-- Tea-cher classrooms and account sync. Run AFTER schema.sql (SQL Editor > New query > paste > Run). Safe to run again.
--
-- DESIGN: every table here is locked (row level security on, and NO direct access for the browser at all). The browser can only call the functions
-- below, and each function (a) works out who is calling from the login, never from anything the browser says, (b) checks the role and ownership,
-- (c) validates every input, and (d) returns only what that person is allowed to see. Nothing builds SQL from text, and every function runs with an
-- empty search_path. Errors carry a short code in "hint" (unauthenticated, forbidden, not_found, invalid, conflict, limit, rate, expired, off) that the site turns into a message.
--
-- WHAT A TEACHER CAN SEE ABOUT A STUDENT (progress_for_class): their name, their Got it / Revise again marks on the cases in that classroom's homework only,
-- how many cases they have marked in total, and when they last revised. Nothing else, ever.

----------------------------------------------------------------------------------------------------------------------------------------------
-- 1. Tables
----------------------------------------------------------------------------------------------------------------------------------------------
create table if not exists public.classes (
  id             uuid primary key default gen_random_uuid(),
  teacher_id     uuid not null references auth.users(id) on delete cascade,
  name           text not null check (char_length(name) between 1 and 40 and name !~ '[[:cntrl:]<>]'),
  created_at     timestamptz not null default now(),
  invite_code    text check (invite_code ~ '^[1-9][0-9]{5}$'),
  invite_token   text check (invite_token ~ '^[0-9a-f]{32}$'),
  invite_expires date,
  invite_created timestamptz,
  invite_revoked boolean not null default false
);
create unique index if not exists classes_teacher_name on public.classes (teacher_id, lower(name));
create unique index if not exists classes_live_code on public.classes (invite_code) where invite_code is not null and not invite_revoked;
create index if not exists classes_token on public.classes (invite_token);

create table if not exists public.class_members (
  class_id   uuid not null references public.classes(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  joined_at  timestamptz not null default now(),
  primary key (class_id, student_id)
);
create index if not exists class_members_student on public.class_members (student_id);

create table if not exists public.playlists (
  id         uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references auth.users(id) on delete cascade,
  name       text not null check (char_length(name) between 1 and 60 and name !~ '[[:cntrl:]<>]'),
  case_ids   text[] not null default '{}' check (cardinality(case_ids) <= 200),
  updated_at timestamptz not null default now()
);
create unique index if not exists playlists_teacher_name on public.playlists (teacher_id, lower(name));

create table if not exists public.assignments (
  id         uuid primary key default gen_random_uuid(),
  class_id   uuid not null references public.classes(id) on delete cascade,
  title      text not null check (char_length(title) between 1 and 60 and title !~ '[[:cntrl:]<>]'),
  note       text not null default '' check (char_length(note) <= 300 and note !~ '[[:cntrl:]<>]'),
  case_ids   text[] not null check (cardinality(case_ids) between 1 and 200),
  due        date,
  created_at timestamptz not null default now()
);
create index if not exists assignments_class on public.assignments (class_id);
-- who a piece of homework is for: null = the whole classroom, otherwise just these students
alter table public.assignments add column if not exists student_ids uuid[] check (student_ids is null or cardinality(student_ids) between 1 and 60);

-- a teacher's private notes about one student in one classroom (never shown to the student or anyone else; deleted when the student leaves or the classroom goes)
create table if not exists public.student_notes (
  class_id   uuid not null references public.classes(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  note       text not null check (char_length(note) between 1 and 1000),
  updated_at timestamptz not null default now(),
  primary key (class_id, student_id)
);

-- a person's Got it / Revise again marks (anyone with an account; only ever shown to a teacher through progress_for_class)
create table if not exists public.progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  case_id text not null check (case_id ~ '^[a-z0-9-]{1,100}$'),
  s       text not null check (s in ('got', 'again')),
  t       timestamptz not null default now(),
  primary key (user_id, case_id)
);

-- the rest of a person's revision (deck, saved cases, playlists, last playlist), so it follows them between devices
create table if not exists public.user_data (
  user_id    uuid not null references auth.users(id) on delete cascade,
  key        text not null check (key in ('deck', 'saved', 'lists', 'lastList')),
  value      jsonb not null check (pg_column_size(value) < 100000),
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

-- failed invite-code guesses (a 6-digit code has only 900,000 possibilities, so guessing is rationed per account)
create table if not exists public.invite_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  at      timestamptz not null default now()
);
create index if not exists invite_attempts_user on public.invite_attempts (user_id, at);

do $$ declare t text; begin
  foreach t in array array['classes', 'class_members', 'playlists', 'assignments', 'student_notes', 'progress', 'user_data', 'invite_attempts'] loop
    execute format('alter table public.%I enable row level security', t);       -- no policies: nothing is readable or writable directly
    execute format('revoke all on public.%I from anon, authenticated', t);
  end loop;
end $$;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 2. Private helpers (callable only by the functions below, never by the browser)
----------------------------------------------------------------------------------------------------------------------------------------------
create or replace function public._uid() returns uuid language plpgsql stable set search_path = '' as $$
declare u uuid := auth.uid();
begin
  if u is null then raise exception 'Sign in first.' using errcode = 'P0001', hint = 'unauthenticated'; end if;
  return u;
end $$;

create or replace function public._role(uid uuid) returns text language sql stable security definer set search_path = '' as $$
  select coalesce((select role from public.profiles where id = uid), 'user');
$$;

create or replace function public._need_teacher() returns uuid language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._uid();
begin
  if public._role(u) <> 'teacher' then raise exception 'That needs a teacher account.' using errcode = 'P0001', hint = 'forbidden'; end if;
  return u;
end $$;

create or replace function public._tidy(t text, n int) returns text language sql immutable set search_path = '' as $$
  select left(btrim(regexp_replace(coalesce(t, ''), '\s+', ' ', 'g')), n);
$$;

create or replace function public._person(uid uuid) returns text language sql stable security definer set search_path = '' as $$
  select coalesce(nullif((select display_name from public.profiles where id = uid), ''), 'Someone');
$$;

create or replace function public._london_today() returns date language sql stable set search_path = '' as $$
  select (now() at time zone 'Europe/London')::date;
$$;

create or replace function public._ms(t timestamptz) returns bigint language sql immutable set search_path = '' as $$
  select (extract(epoch from t) * 1000)::bigint;
$$;

create or replace function public._invite_state(code text, revoked boolean, expires date) returns text language sql stable set search_path = '' as $$
  select case when code is null then 'none' when revoked then 'off' when expires is not null and public._london_today() > expires then 'expired' else 'active' end;
$$;

create or replace function public._invite_json(c public.classes) returns jsonb language sql stable set search_path = '' as $$
  select case when c.invite_code is null then null else jsonb_build_object('code', c.invite_code, 'token', c.invite_token, 'expiresOn', c.invite_expires,
    'created', public._ms(c.invite_created), 'revoked', c.invite_revoked, 'state', public._invite_state(c.invite_code, c.invite_revoked, c.invite_expires)) end;
$$;

-- a fresh 6-digit code (never starting with 0, not used by any live invite) and a 128-bit token; both from the database's strong random source
create or replace function public._new_invite(cid uuid, expires date) returns void language plpgsql security definer set search_path = '' as $$
declare code text;
begin
  loop
    code := (100000 + (('x' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 7))::bit(28)::int % 900000))::text;
    exit when not exists (select 1 from public.classes where invite_code = code and not invite_revoked);
  end loop;
  update public.classes set invite_code = code, invite_token = replace(gen_random_uuid()::text, '-', ''), invite_expires = expires, invite_created = now(), invite_revoked = false where id = cid;
end $$;

create or replace function public._check_day(d date) returns date language plpgsql stable set search_path = '' as $$
begin
  if d is not null and d < public._london_today() then raise exception 'The date can’t be in the past.' using errcode = 'P0001', hint = 'invalid'; end if;
  return d;
end $$;

-- the case ids in a list: only well-formed ids, no repeats, original order, at most 200
create or replace function public._clean_ids(ids text[]) returns text[] language plpgsql immutable set search_path = '' as $$
declare out text[]; x text;
begin
  out := '{}';
  foreach x in array coalesce(ids, '{}') loop
    if x ~ '^[a-z0-9-]{1,100}$' and not (x = any(out)) then out := out || x; end if;
  end loop;
  if cardinality(out) > 200 then raise exception 'That is too many cases (the limit is 200).' using errcode = 'P0001', hint = 'limit'; end if;
  return out;
end $$;

create or replace function public._own_class(cid uuid) returns public.classes language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._need_teacher(); c public.classes;
begin
  select * into c from public.classes where id = cid and teacher_id = u;
  if not found then raise exception 'That classroom doesn’t exist.' using errcode = 'P0001', hint = 'not_found'; end if;
  return c;
end $$;

create or replace function public._guard_invites(uid uuid) returns void language plpgsql security definer set search_path = '' as $$
begin
  delete from public.invite_attempts where at < now() - interval '1 hour';
  if (select count(*) from public.invite_attempts where user_id = uid and at > now() - interval '10 minutes') >= 10 then
    raise exception 'Too many wrong codes. Wait a few minutes and try again.' using errcode = 'P0001', hint = 'rate';
  end if;
end $$;

create or replace function public._find_invite(k text) returns public.classes language plpgsql stable security definer set search_path = '' as $$
declare c public.classes; key text := public._tidy(k, 40);
begin
  if key ~ '^[0-9]{6}$' then select * into c from public.classes where invite_code = key order by invite_revoked limit 1;
  elsif key ~ '^[0-9a-f]{32}$' then select * into c from public.classes where invite_token = key limit 1;
  end if;
  return c;     -- (all columns null when nothing matched)
end $$;

revoke all on function public._uid(), public._role(uuid), public._need_teacher(), public._tidy(text, int), public._person(uuid), public._london_today(), public._ms(timestamptz),
  public._invite_state(text, boolean, date), public._invite_json(public.classes), public._new_invite(uuid, date), public._check_day(date), public._clean_ids(text[]),
  public._own_class(uuid), public._guard_invites(uuid), public._find_invite(text) from public, anon, authenticated;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 3. Classrooms
----------------------------------------------------------------------------------------------------------------------------------------------
create or replace function public.classes_list() returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._uid();
begin
  if public._role(u) = 'teacher' then
    return coalesce((select jsonb_agg(jsonb_build_object('id', c.id, 'name', c.name,
        'students', (select count(*) from public.class_members m where m.class_id = c.id),
        'homework', (select count(*) from public.assignments a where a.class_id = c.id),
        'invite', public._invite_state(c.invite_code, c.invite_revoked, c.invite_expires), 'code', c.invite_code, 'expiresOn', c.invite_expires) order by c.created_at)
      from public.classes c where c.teacher_id = u), '[]'::jsonb);
  end if;
  return coalesce((select jsonb_agg(jsonb_build_object('id', c.id, 'name', c.name, 'teacher', public._person(c.teacher_id)) order by c.name)
    from public.classes c join public.class_members m on m.class_id = c.id where m.student_id = u), '[]'::jsonb);
end $$;

create or replace function public.class_get(p_id uuid) returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._uid(); c public.classes;
begin
  select * into c from public.classes where id = p_id;
  if found and c.teacher_id = u then
    return jsonb_build_object('id', c.id, 'name', c.name, 'teacher', public._person(u), 'invite', public._invite_json(c),
      'members', coalesce((select jsonb_agg(jsonb_build_object('id', m.student_id, 'name', public._person(m.student_id)) order by lower(public._person(m.student_id)))
        from public.class_members m where m.class_id = c.id), '[]'::jsonb));
  end if;
  if found and exists (select 1 from public.class_members m where m.class_id = c.id and m.student_id = u) then
    return jsonb_build_object('id', c.id, 'name', c.name, 'teacher', public._person(c.teacher_id));
  end if;
  raise exception 'That classroom doesn’t exist.' using errcode = 'P0001', hint = 'not_found';
end $$;

create or replace function public.class_create(p_name text) returns jsonb language plpgsql security definer set search_path = '' as $$
declare u uuid := public._need_teacher(); nm text := public._tidy(p_name, 40); cid uuid;
begin
  if nm = '' then raise exception 'Type a name for the classroom.' using errcode = 'P0001', hint = 'invalid'; end if;
  if nm ~ '[[:cntrl:]<>]' then raise exception 'Use letters, numbers and ordinary punctuation.' using errcode = 'P0001', hint = 'invalid'; end if;
  if (select count(*) from public.classes where teacher_id = u) >= 30 then raise exception 'You can have up to 30 classrooms.' using errcode = 'P0001', hint = 'limit'; end if;
  begin
    insert into public.classes (teacher_id, name) values (u, nm) returning id into cid;
  exception when unique_violation then raise exception 'You already have a classroom with that name.' using errcode = 'P0001', hint = 'conflict';
  end;
  perform public._new_invite(cid, null);     -- new classrooms start with a link and code that never expire
  return jsonb_build_object('id', cid, 'name', nm);
end $$;

create or replace function public.class_rename(p_id uuid, p_name text) returns void language plpgsql security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_id); nm text := public._tidy(p_name, 40);
begin
  if nm = '' or nm ~ '[[:cntrl:]<>]' then raise exception 'Type a name for the classroom.' using errcode = 'P0001', hint = 'invalid'; end if;
  begin update public.classes set name = nm where id = c.id;
  exception when unique_violation then raise exception 'You already have a classroom with that name.' using errcode = 'P0001', hint = 'conflict';
  end;
end $$;

create or replace function public.class_remove(p_id uuid) returns void language plpgsql security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_id);
begin delete from public.classes where id = c.id; end $$;

create or replace function public.class_remove_member(p_class uuid, p_user uuid) returns void language plpgsql security definer set search_path = '' as $$
declare u uuid := public._uid(); c public.classes;
begin
  select * into c from public.classes where id = p_class;
  if not found then raise exception 'That classroom doesn’t exist.' using errcode = 'P0001', hint = 'not_found'; end if;
  if not (c.teacher_id = u or p_user = u) then raise exception 'You can’t do that.' using errcode = 'P0001', hint = 'forbidden'; end if;   -- the teacher removes a student, or a student leaves
  delete from public.class_members where class_id = p_class and student_id = p_user;
  delete from public.student_notes where class_id = p_class and student_id = p_user;
end $$;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 4. Invites
----------------------------------------------------------------------------------------------------------------------------------------------
create or replace function public.invite_create(p_class uuid, p_expires date default null) returns jsonb language plpgsql security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_class);
begin
  perform public._check_day(p_expires);
  perform public._new_invite(c.id, p_expires);       -- the old link and code stop working at once
  select * into c from public.classes where id = c.id; return public._invite_json(c);
end $$;

create or replace function public.invite_set_expiry(p_class uuid, p_day date) returns jsonb language plpgsql security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_class);
begin
  if c.invite_code is null or c.invite_revoked then raise exception 'Turn the invite on first.' using errcode = 'P0001', hint = 'invalid'; end if;
  update public.classes set invite_expires = public._check_day(p_day) where id = c.id;
  select * into c from public.classes where id = c.id; return public._invite_json(c);
end $$;

create or replace function public.invite_revoke(p_class uuid) returns void language plpgsql security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_class);
begin update public.classes set invite_revoked = true where id = c.id and invite_code is not null; end $$;

create or replace function public.invite_lookup(p_key text) returns jsonb language plpgsql security definer set search_path = '' as $$
declare u uuid := public._uid(); c public.classes;
begin
  perform public._guard_invites(u);
  c := public._find_invite(p_key);
  if c.id is null then insert into public.invite_attempts (user_id) values (u); return jsonb_build_object('state', 'invalid'); end if;
  return jsonb_build_object('state', public._invite_state(c.invite_code, c.invite_revoked, c.invite_expires), 'classId', c.id, 'className', c.name,
    'teacher', public._person(c.teacher_id), 'expiresOn', c.invite_expires);
end $$;

create or replace function public.invite_join(p_key text) returns jsonb language plpgsql security definer set search_path = '' as $$
declare u uuid := public._uid(); c public.classes; st text;
begin
  if public._role(u) = 'teacher' then raise exception 'Teacher accounts can’t join classrooms.' using errcode = 'P0001', hint = 'forbidden'; end if;
  perform public._guard_invites(u);
  c := public._find_invite(p_key);
  if c.id is null then     -- (returned, not raised: an error would roll back the record of this wrong guess)
    insert into public.invite_attempts (user_id) values (u);
    return jsonb_build_object('invalid', true);
  end if;
  st := public._invite_state(c.invite_code, c.invite_revoked, c.invite_expires);
  if exists (select 1 from public.class_members where class_id = c.id and student_id = u) then return jsonb_build_object('classId', c.id, 'className', c.name, 'already', true); end if;
  if st = 'expired' then raise exception 'That invite has expired. Ask your teacher for a new one.' using errcode = 'P0001', hint = 'expired'; end if;
  if st <> 'active' then raise exception 'That invite has been turned off. Ask your teacher for a new one.' using errcode = 'P0001', hint = 'off'; end if;
  if (select count(*) from public.class_members where class_id = c.id) >= 60 then raise exception 'That classroom is full.' using errcode = 'P0001', hint = 'limit'; end if;
  insert into public.class_members (class_id, student_id) values (c.id, u);
  return jsonb_build_object('classId', c.id, 'className', c.name, 'already', false);
end $$;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 5. A teacher's playlists
----------------------------------------------------------------------------------------------------------------------------------------------
create or replace function public.playlists_list() returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._need_teacher();
begin
  return coalesce((select jsonb_agg(jsonb_build_object('id', l.id, 'name', l.name, 'ids', to_jsonb(l.case_ids), 'updated', public._ms(l.updated_at)) order by lower(l.name))
    from public.playlists l where l.teacher_id = u), '[]'::jsonb);
end $$;

create or replace function public.playlist_get(p_id uuid) returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._need_teacher(); l public.playlists;
begin
  select * into l from public.playlists where id = p_id and teacher_id = u;
  if not found then raise exception 'That playlist doesn’t exist.' using errcode = 'P0001', hint = 'not_found'; end if;
  return jsonb_build_object('id', l.id, 'name', l.name, 'ids', to_jsonb(l.case_ids));
end $$;

create or replace function public.playlist_save(p_id uuid, p_name text, p_ids text[]) returns jsonb language plpgsql security definer set search_path = '' as $$
declare u uuid := public._need_teacher(); nm text := public._tidy(p_name, 60); ids text[] := public._clean_ids(p_ids); lid uuid := p_id;
begin
  if nm = '' or nm ~ '[[:cntrl:]<>]' then raise exception 'Type a name for the playlist.' using errcode = 'P0001', hint = 'invalid'; end if;
  begin
    if lid is null then
      if (select count(*) from public.playlists where teacher_id = u) >= 50 then raise exception 'You can have up to 50 playlists.' using errcode = 'P0001', hint = 'limit'; end if;
      insert into public.playlists (teacher_id, name, case_ids) values (u, nm, ids) returning id into lid;
    else
      update public.playlists set name = nm, case_ids = ids, updated_at = now() where id = lid and teacher_id = u;
      if not found then raise exception 'That playlist doesn’t exist.' using errcode = 'P0001', hint = 'not_found'; end if;
    end if;
  exception when unique_violation then raise exception 'You already have a playlist with that name.' using errcode = 'P0001', hint = 'conflict';
  end;
  return jsonb_build_object('id', lid, 'name', nm);
end $$;

create or replace function public.playlist_remove(p_id uuid) returns void language plpgsql security definer set search_path = '' as $$
declare u uuid := public._need_teacher();
begin delete from public.playlists where id = p_id and teacher_id = u; end $$;     -- homework already set keeps its own copy of the cases

----------------------------------------------------------------------------------------------------------------------------------------------
-- 6. Homework
----------------------------------------------------------------------------------------------------------------------------------------------
create or replace function public._assignment_json(a public.assignments) returns jsonb language sql stable set search_path = '' as $$
  select jsonb_build_object('id', a.id, 'classId', a.class_id, 'title', a.title, 'note', a.note, 'caseIds', to_jsonb(a.case_ids), 'studentIds', to_jsonb(a.student_ids),
    'due', to_char(a.due, 'YYYY-MM-DD'), 'created', public._ms(a.created_at));
$$;
revoke all on function public._assignment_json(public.assignments) from public, anon, authenticated;

create or replace function public.assignments_list(p_class uuid) returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._uid();
begin
  if not exists (select 1 from public.classes c where c.id = p_class and (c.teacher_id = u or exists (select 1 from public.class_members m where m.class_id = c.id and m.student_id = u))) then
    raise exception 'That classroom doesn’t exist.' using errcode = 'P0001', hint = 'not_found';
  end if;
  -- a teacher sees all homework; a student sees what is for the whole classroom or for them
  return coalesce((select jsonb_agg(public._assignment_json(a) order by a.due nulls last, a.created_at) from public.assignments a
    where a.class_id = p_class and (exists (select 1 from public.classes c where c.id = p_class and c.teacher_id = u) or a.student_ids is null or u = any(a.student_ids))), '[]'::jsonb);
end $$;

drop function if exists public.assignment_create(uuid, text, text, date, text[]);
create or replace function public.assignment_create(p_class uuid, p_title text, p_note text, p_due date, p_ids text[], p_students uuid[] default null) returns jsonb language plpgsql security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_class); t text := public._tidy(p_title, 60); n text := public._tidy(p_note, 300); ids text[] := public._clean_ids(p_ids); a public.assignments; who uuid[];
begin
  if t = '' or t ~ '[[:cntrl:]<>]' or n ~ '[[:cntrl:]<>]' then raise exception 'Type a title for the homework.' using errcode = 'P0001', hint = 'invalid'; end if;
  if cardinality(ids) = 0 then raise exception 'Choose a playlist that has at least one case.' using errcode = 'P0001', hint = 'invalid'; end if;
  if (select count(*) from public.assignments where class_id = c.id) >= 60 then raise exception 'That classroom has the most homework it can hold. Remove some that is finished.' using errcode = 'P0001', hint = 'limit'; end if;
  if p_students is not null and cardinality(p_students) > 0 then
    select array_agg(distinct x) into who from unnest(p_students) x;
    if exists (select 1 from unnest(who) x where not exists (select 1 from public.class_members m where m.class_id = c.id and m.student_id = x)) then
      raise exception 'Choose students who are in this classroom.' using errcode = 'P0001', hint = 'invalid';
    end if;
  end if;
  insert into public.assignments (class_id, title, note, case_ids, due, student_ids) values (c.id, t, n, ids, public._check_day(p_due), who) returning * into a;
  return public._assignment_json(a);
end $$;

create or replace function public.assignment_remove(p_id uuid) returns void language plpgsql security definer set search_path = '' as $$
declare u uuid := public._need_teacher();
begin delete from public.assignments a using public.classes c where a.id = p_id and c.id = a.class_id and c.teacher_id = u; end $$;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 7. Marks and what a teacher may see of them
----------------------------------------------------------------------------------------------------------------------------------------------
create or replace function public.progress_set(p_case text, p_s text) returns void language plpgsql security definer set search_path = '' as $$
declare u uuid := public._uid();
begin
  if p_case is null or p_case !~ '^[a-z0-9-]{1,100}$' then raise exception 'Unknown case.' using errcode = 'P0001', hint = 'invalid'; end if;
  if p_s is null then delete from public.progress where user_id = u and case_id = p_case; return; end if;
  if p_s not in ('got', 'again') then raise exception 'Unknown mark.' using errcode = 'P0001', hint = 'invalid'; end if;
  if not exists (select 1 from public.progress where user_id = u and case_id = p_case) and (select count(*) from public.progress where user_id = u) >= 1000 then
    raise exception 'Too many marks.' using errcode = 'P0001', hint = 'limit';
  end if;
  insert into public.progress (user_id, case_id, s, t) values (u, p_case, p_s, now()) on conflict (user_id, case_id) do update set s = excluded.s, t = now();
end $$;

-- marks made on a device before signing in: only fills cases with no mark yet, and doesn't count as "revised recently"
create or replace function public.progress_import(p_marks jsonb) returns void language plpgsql security definer set search_path = '' as $$
declare u uuid := public._uid(); k text; v text; n int;
begin
  if p_marks is null or jsonb_typeof(p_marks) <> 'object' then return; end if;
  select count(*) into n from public.progress where user_id = u;
  for k, v in select key, value #>> '{}' from jsonb_each(p_marks) limit 1000 loop
    continue when k !~ '^[a-z0-9-]{1,100}$' or v not in ('got', 'again');
    exit when n >= 1000;
    insert into public.progress (user_id, case_id, s, t) values (u, k, v, to_timestamp(0)) on conflict (user_id, case_id) do nothing;
    n := n + 1;
  end loop;
end $$;

create or replace function public.progress_mine() returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._uid();
begin
  return coalesce((select jsonb_object_agg(case_id, jsonb_build_object('s', s, 't', public._ms(t))) from public.progress where user_id = u), '{}'::jsonb);
end $$;

create or replace function public.progress_for_class(p_class uuid) returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_class);
begin
  return coalesce((select jsonb_agg(r order by lower(r ->> 'name')) from (
    select jsonb_build_object('id', m.student_id, 'name', public._person(m.student_id),
      -- marks only on the cases in homework that applies to this student (the whole classroom's, or set just for them)
      'marks', coalesce((select jsonb_object_agg(g.case_id, g.s) from public.progress g where g.user_id = m.student_id and g.case_id = any(
          array(select x from public.assignments a, unnest(a.case_ids) x where a.class_id = c.id and (a.student_ids is null or m.student_id = any(a.student_ids))))), '{}'::jsonb),
      'got', (select count(*) from public.progress g where g.user_id = m.student_id and g.s = 'got'),
      'again', (select count(*) from public.progress g where g.user_id = m.student_id and g.s = 'again'),
      'lastActive', (select nullif(public._ms(max(g.t)), 0) from public.progress g where g.user_id = m.student_id)) as r
    from public.class_members m where m.class_id = c.id) q), '[]'::jsonb);
end $$;

-- a teacher's private notes on their students
create or replace function public.notes_list(p_class uuid) returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_class);
begin
  return coalesce((select jsonb_object_agg(student_id, note) from public.student_notes where class_id = c.id), '{}'::jsonb);
end $$;

create or replace function public.note_set(p_class uuid, p_student uuid, p_note text) returns void language plpgsql security definer set search_path = '' as $$
declare c public.classes := public._own_class(p_class); n text := btrim(regexp_replace(coalesce(p_note, ''), E'[\r\t]+', ' ', 'g'), E' \n');
begin
  if not exists (select 1 from public.class_members where class_id = c.id and student_id = p_student) then raise exception 'That student isn’t in this classroom.' using errcode = 'P0001', hint = 'not_found'; end if;
  if char_length(n) > 1000 then raise exception 'Notes can be up to 1000 characters.' using errcode = 'P0001', hint = 'invalid'; end if;
  if translate(n, E'\n', '') ~ '[[:cntrl:]]' then raise exception 'That note has characters that can’t be saved.' using errcode = 'P0001', hint = 'invalid'; end if;
  if n = '' then delete from public.student_notes where class_id = c.id and student_id = p_student; return; end if;
  insert into public.student_notes (class_id, student_id, note) values (c.id, p_student, n) on conflict (class_id, student_id) do update set note = excluded.note, updated_at = now();
end $$;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 8. Deck, saved cases and playlists, kept with the account
----------------------------------------------------------------------------------------------------------------------------------------------
create or replace function public.userdata_get() returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._uid();
begin
  return coalesce((select jsonb_object_agg(key, jsonb_build_object('value', value, 'updatedAt', public._ms(updated_at))) from public.user_data where user_id = u), '{}'::jsonb);
end $$;

create or replace function public.userdata_put(p_key text, p_value jsonb) returns bigint language plpgsql security definer set search_path = '' as $$
declare u uuid := public._uid(); old timestamptz; ts timestamptz;
begin
  if p_key not in ('deck', 'saved', 'lists', 'lastList') then raise exception 'Unknown item.' using errcode = 'P0001', hint = 'invalid'; end if;
  if p_value is null or jsonb_typeof(p_value) <> (case when p_key = 'lastList' then (case when jsonb_typeof(p_value) = 'null' then 'null' else 'string' end) else 'array' end) then
    raise exception 'That data isn’t the right shape.' using errcode = 'P0001', hint = 'invalid';
  end if;
  if pg_column_size(p_value) >= 100000 then raise exception 'That is too much data.' using errcode = 'P0001', hint = 'limit'; end if;
  if jsonb_typeof(p_value) = 'array' and jsonb_array_length(p_value) > 1000 then raise exception 'That is too much data.' using errcode = 'P0001', hint = 'limit'; end if;
  select updated_at into old from public.user_data where user_id = u and key = p_key;
  if old is not null and old > now() - interval '1 second' then raise exception 'Slow down: try again in a moment.' using errcode = 'P0001', hint = 'rate'; end if;
  insert into public.user_data (user_id, key, value, updated_at) values (u, p_key, p_value, now()) on conflict (user_id, key) do update set value = excluded.value, updated_at = now() returning updated_at into ts;
  return public._ms(ts);
end $$;

-- "Download my data": everything held about the signed-in person, as one JSON document. (A teacher's private notes about a student are the teacher's record,
-- not part of the student's account data: ask the school for those.)
create or replace function public.export_my_data() returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare u uuid := public._uid();
begin
  return jsonb_build_object(
    'exportedAt', now(),
    'account', (select jsonb_build_object('id', p.id, 'email', (select email from auth.users where id = u), 'displayName', p.display_name, 'yearGroup', p.year_group, 'role', p.role, 'createdAt', p.created_at) from public.profiles p where p.id = u),
    'revision', coalesce((select jsonb_object_agg(key, value) from public.user_data where user_id = u), '{}'::jsonb),
    'marks', coalesce((select jsonb_agg(jsonb_build_object('caseId', case_id, 'mark', s, 'markedAt', t) order by case_id) from public.progress where user_id = u), '[]'::jsonb),
    'classroomsJoined', coalesce((select jsonb_agg(jsonb_build_object('name', c.name, 'teacher', public._person(c.teacher_id), 'joinedAt', m.joined_at,
        'homework', coalesce((select jsonb_agg(jsonb_build_object('title', a.title, 'note', a.note, 'due', a.due, 'caseIds', to_jsonb(a.case_ids)) order by a.created_at)
          from public.assignments a where a.class_id = c.id and (a.student_ids is null or u = any(a.student_ids))), '[]'::jsonb)))
      from public.class_members m join public.classes c on c.id = m.class_id where m.student_id = u), '[]'::jsonb),
    'classroomsTaught', coalesce((select jsonb_agg(jsonb_build_object('name', c.name, 'createdAt', c.created_at, 'students', (select count(*) from public.class_members m where m.class_id = c.id),
        'homework', (select count(*) from public.assignments a where a.class_id = c.id))) from public.classes c where c.teacher_id = u), '[]'::jsonb),
    'playlistsMade', coalesce((select jsonb_agg(jsonb_build_object('name', l.name, 'caseIds', to_jsonb(l.case_ids), 'updatedAt', l.updated_at)) from public.playlists l where l.teacher_id = u), '[]'::jsonb)
  );
end $$;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 9. What the browser may call (signed-in people only)
----------------------------------------------------------------------------------------------------------------------------------------------
do $$ declare f text; begin
  foreach f in array array[
    'classes_list()', 'class_get(uuid)', 'class_create(text)', 'class_rename(uuid, text)', 'class_remove(uuid)', 'class_remove_member(uuid, uuid)',
    'invite_create(uuid, date)', 'invite_set_expiry(uuid, date)', 'invite_revoke(uuid)', 'invite_lookup(text)', 'invite_join(text)',
    'playlists_list()', 'playlist_get(uuid)', 'playlist_save(uuid, text, text[])', 'playlist_remove(uuid)',
    'assignments_list(uuid)', 'assignment_create(uuid, text, text, date, text[], uuid[])', 'assignment_remove(uuid)', 'notes_list(uuid)', 'note_set(uuid, uuid, text)', 'export_my_data()',
    'progress_set(text, text)', 'progress_import(jsonb)', 'progress_mine()', 'progress_for_class(uuid)', 'userdata_get()', 'userdata_put(text, jsonb)'] loop
    execute format('revoke all on function public.%s from public, anon', f);
    execute format('grant execute on function public.%s to authenticated', f);
  end loop;
end $$;
