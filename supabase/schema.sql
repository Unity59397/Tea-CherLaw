-- Tea-cher accounts: run this in the Supabase dashboard (SQL Editor > New query > paste > Run). It is safe to run again: nothing is lost.
-- Sign-up, email confirmation, passwords and sessions are handled by Supabase Auth (auth.users). This file adds the profile that goes with each account,
-- decides each person's role from their school email address, and keeps everyone else out.
--
-- THE RULES ENFORCED HERE (in the database, so changing the website's code cannot bypass them):
--   * Only verified school addresses can have an account:  @ndonline.ac.uk -> student,  @notredamecoll.ac.uk -> teacher.
--     Anything else is refused at sign-up, and also when someone tries to change their email to a different kind of address.
--   * Nobody can choose or change their own role. The browser can read its profile and change only display_name and year_group.
--   * Every function runs with an empty search_path and fully-qualified names, so nothing can be hijacked through a look-alike table or function.
-- To add a school later, add one row to school_domains below (and the same line to src/auth/schools.ts so the sign-up form can explain it).

----------------------------------------------------------------------------------------------------------------------------------------------
-- 1. Verified schools
----------------------------------------------------------------------------------------------------------------------------------------------
create table if not exists public.school_domains (
  domain text primary key check (domain = lower(domain) and domain ~ '^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$'),
  role   text not null check (role in ('student', 'teacher'))
);
alter table public.school_domains enable row level security;     -- no policy at all: the browser can neither read nor change this table
revoke all on public.school_domains from anon, authenticated;
insert into public.school_domains (domain, role) values ('ndonline.ac.uk', 'student'), ('notredamecoll.ac.uk', 'teacher')
  on conflict (domain) do update set role = excluded.role;

-- The role for an email address, or null when the address is not from a verified school.
-- It compares the WHOLE part after the @ with the list, ignoring case: "x@ndonline.ac.uk.evil.com", "x@evilndonline.ac.uk" and "a@b@ndonline.ac.uk" all give null.
create or replace function public.school_role(email text) returns text
language sql stable security definer set search_path = '' as $$
  select d.role from public.school_domains d
  where email is not null
    and length(email) <= 254
    and email ~ '^[^@[:space:]]+@[^@[:space:]]+$'
    and d.domain = lower(split_part(email, '@', 2));
$$;
revoke all on function public.school_role(text) from public, anon, authenticated;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 2. Profiles
----------------------------------------------------------------------------------------------------------------------------------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  year_group   text,
  role         text not null default 'user',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
-- constraints (dropped and re-added so that running this file again always leaves the latest rules in place)
alter table public.profiles drop constraint if exists profiles_display_name_ok, drop constraint if exists profiles_year_group_ok, drop constraint if exists profiles_role_ok;
alter table public.profiles
  add constraint profiles_display_name_ok check (char_length(display_name) <= 40 and display_name !~ '[[:cntrl:]<>]'),
  add constraint profiles_year_group_ok  check (year_group is null or year_group in ('Year 12', 'Year 13', 'Other')),
  add constraint profiles_role_ok        check (role in ('user', 'student', 'teacher'));

alter table public.profiles enable row level security;
drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles for select to authenticated using (auth.uid() = id);
drop policy if exists "update own profile" on public.profiles;
create policy "update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- the browser may read its own profile and change only these two columns; there is no insert and no delete (the profile is made by the trigger below)
revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;
grant update (display_name, year_group) on public.profiles to authenticated;

----------------------------------------------------------------------------------------------------------------------------------------------
-- 3. Sign-up: school emails only, role from the email, profile made automatically
----------------------------------------------------------------------------------------------------------------------------------------------
-- 3a. Refuse an address that is not from a verified school (runs BEFORE the account exists, so nothing is created and no email is sent)
create or replace function public.require_school_email() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if public.school_role(new.email) is null then
    raise exception 'Only verified school email addresses can be used for Tea-cher accounts.' using errcode = 'P0001';
  end if;
  return new;
end $$;
revoke all on function public.require_school_email() from public, anon, authenticated;
drop trigger if exists require_school_email_insert on auth.users;
create trigger require_school_email_insert before insert on auth.users for each row execute function public.require_school_email();
drop trigger if exists require_school_email_update on auth.users;
create trigger require_school_email_update before update of email on auth.users for each row when (new.email is distinct from old.email) execute function public.require_school_email();

-- 3b. A profile is created the moment an account is created, with the role the email address earns (the name typed on the form travels in the user metadata)
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, display_name, role)
  values (new.id, left(regexp_replace(trim(coalesce(new.raw_user_meta_data ->> 'display_name', '')), '[[:cntrl:]<>]', '', 'g'), 40), coalesce(public.school_role(new.email), 'user'));
  return new;
end $$;
revoke all on function public.handle_new_user() from public, anon, authenticated;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- 3c. If the confirmed email address changes, the role follows it (a student cannot become a teacher by changing to a teacher address without owning that mailbox:
--     Supabase only changes the email after the link sent to the new address is opened)
create or replace function public.sync_role_with_email() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  update public.profiles set role = coalesce(public.school_role(new.email), 'user') where id = new.id;
  return new;
end $$;
revoke all on function public.sync_role_with_email() from public, anon, authenticated;
drop trigger if exists on_auth_user_email_changed on auth.users;
create trigger on_auth_user_email_changed after update of email on auth.users for each row when (new.email is distinct from old.email) execute function public.sync_role_with_email();

-- 3d. One-off tidy-up for accounts made before this file existed: give them the role their address earns
update public.profiles p set role = coalesce(public.school_role(u.email), 'user') from auth.users u where u.id = p.id and p.role is distinct from coalesce(public.school_role(u.email), 'user');

----------------------------------------------------------------------------------------------------------------------------------------------
-- 4. Housekeeping and rate limiting inside the database
----------------------------------------------------------------------------------------------------------------------------------------------
-- updated_at, plus a brake: a profile can be changed at most once every two seconds (stops a script hammering the API with updates)
create or replace function public.touch_updated_at() returns trigger language plpgsql set search_path = '' as $$
begin
  if tg_op = 'UPDATE' and old.updated_at > now() - interval '2 seconds' and auth.uid() is not null then
    raise exception 'Slow down: try again in a moment.' using errcode = 'P0001';
  end if;
  new.updated_at = now(); return new;
end $$;
drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles for each row execute function public.touch_updated_at();

-- "Delete my account": removes the login and (through the cascade) the profile
create or replace function public.delete_my_account() returns void
language sql security definer set search_path = '' as $$
  delete from auth.users where id = auth.uid();
$$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
