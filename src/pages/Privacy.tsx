import { Link } from 'react-router-dom';
import { useUI } from '../components/UI';

/* Privacy and cookie policy. Update the date, the storage table and the lists below whenever the site starts storing or sending something new. */
export default function Privacy() {
  const { openConsent } = useUI();
  return (
      <div className="wrap prose">
      <p className="eyebrow">Legal</p>
      <h1 className="page-title">Privacy and cookie policy</h1>
      <p className="meta">Last updated 12 November 2026</p>
      <div className="callout">
      <p><strong>The short version.</strong> You can use Tea-cher without an account, and then we collect no personal details: your deck, saved cases, playlists and progress stay on your own device. Accounts are currently only for verified schools (students and teachers at Notre Dame Sixth Form College). If you make one, we store your name, school email address and year group, plus your saved cases, playlists and Got it / Revise again marks so they follow you between devices. Your teacher can see your name and your marks on the homework they set. There is no analytics and no advertising yet.</p>
      </div>
      <h2>Who we are</h2>
      <p>Tea-cher is run by No-Tea Studio (<a href="https://noteastudio.co.uk" target="_blank" rel="noopener noreferrer">noteastudio.co.uk</a>). We are the controller of any personal data covered by this policy. You can contact us using the details on that website.</p>
      <h2>What we collect</h2>
      <p>Without an account, we don’t collect personal data on our own servers. If you create an account we collect and store: your <strong>name</strong> (as you typed it), your <strong>school email address</strong>, your <strong>year group</strong> (optional), your <strong>account type</strong> (student or teacher, decided automatically from your school email address), and a hashed (scrambled) copy of your password. We also store which classrooms you are in, your <strong>revision</strong> (your deck, saved cases, playlists and Got it / Revise again marks, so they follow you between devices), and, for teachers, the classrooms, playlists and homework you create. Teachers can also write private notes about a student in their classroom (for example about how revision is going); the student can’t see these, and they are deleted when the student leaves the classroom or the account is deleted. Only your teacher can see anything of yours, and only your name, your marks on the cases in their homework, how many cases you have marked in total, and when you last revised. We never see your password. Your teacher can see your name and those marks, and nobody else can see your account details. You can download a copy of everything your account holds from your profile page (“Download my data”). While a classroom screen is open it checks for changes about every 20 seconds. Accounts are provided by <strong>Supabase</strong>, which stores this data for us as our processor and sends the confirmation and password-reset emails.</p>
      <h2>What is stored on your device</h2>
      <p>Tea-cher uses your browser’s local storage, which the law treats like cookies. If you have an account, your deck, saved cases, playlists and marks are also sent to your account (see above); signing out clears them from the device. Without an account, nothing below is sent to us or to anyone else.</p>
      <div className="tbl-wrap">
      <table className="tbl">
      <thead>
      <tr>
        <th>Name</th>
        <th>What it does</th>
        <th>Type</th>
        <th>How long</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>tc.consent</code></td>
        <td>Remembers your choice on this page.</td>
        <td>Essential</td>
        <td>Up to 12 months</td>
      </tr>
      <tr>
        <td><code>tc.deck</code></td>
        <td>The cases in your revision deck.</td>
        <td>Essential</td>
        <td>Until you clear it or your browser data</td>
      </tr>
      <tr>
        <td><code>tc.saved, tc.lists, tc.lastList</code></td>
        <td>The cases you bookmark, the names and contents of any playlists you create, and which playlist you used last. Playlist names are typed by you and stay on your device.</td>
        <td>Essential</td>
        <td>Until you delete them or clear your browser data</td>
      </tr>
      <tr>
        <td><code>tc.auth</code></td>
        <td>Keeps you signed in if you have an account (set by our account provider). Only used after you sign in.</td>
        <td>Essential</td>
        <td>Until you sign out, or the sign-in expires</td>
      </tr>
      <tr>
        <td><code>tc.sync</code></td>
        <td>If you have an account: remembers which of your revision changes have been sent to your account, so nothing is lost or sent twice.</td>
        <td>Essential</td>
        <td>Until you sign out</td>
      </tr>
      <tr>
        <td><code>tc.pendingJoin</code> (session storage)</td>
        <td>Remembers a classroom invite you opened before signing in, so we can take you back to it.</td>
        <td>Essential</td>
        <td>Until you close the tab</td>
      </tr>
      <tr>
        <td><code>tc.rl</code> (session storage)</td>
        <td>Counts recent sign-in and sign-up tries so the site can slow down repeated attempts.</td>
        <td>Essential (security)</td>
        <td>Until you close the tab</td>
      </tr>
      <tr>
        <td><code>tc.run</code> (session storage)</td>
        <td>Hands the list of cases you chose to revise from one page to the next, for example from the library to the flashcards.</td>
        <td>Essential</td>
        <td>Until you close the tab</td>
      </tr>
      <tr>
        <td><code>tc.status</code></td>
        <td>Your Got it and Again marks, which drive your progress.</td>
        <td>Essential</td>
        <td>Until you clear your browser data</td>
      </tr>
      <tr>
        <td><code>tc.theme, tc.mode, tc.shuffle, tc.tipSeen</code></td>
        <td>Your light or dark theme, flashcard options and whether you have closed the flashcard tip.</td>
        <td>Essential (set when you use the control)</td>
        <td>Until you clear your browser data</td>
      </tr>
      <tr>
        <td><code>tc.recent</code></td>
        <td>The cases you viewed recently, shown on the home page.</td>
        <td>Preferences. Only with your consent.</td>
        <td>Until you clear it or withdraw consent</td>
      </tr>
      </tbody>
      </table>
      </div>
      <p>Essential storage is needed to give you features you ask for, such as saving a deck, so it doesn’t need consent. Anything else only starts after you agree. You can change your mind at any time: <button type="button" className="linklike" onClick={openConsent}><u>open cookie settings</u></button>. You can also clear your browser’s site data to delete everything.</p>
      <h2>Sharing a playlist</h2>
      <p>If you choose to share a playlist, the link contains the playlist’s name and a short code for each case in it, after the <code>#</code> symbol. Browsers do not send that part of a link to any website, so we never receive it. Anyone you give the link to can see the name and the cases. Don’t put anything private in a playlist name.</p>
      <h2>Other companies</h2>
      <ul>
      <li><strong>Google Fonts.</strong> The fonts on this site load from Google’s servers, so Google receives your IP address and browser details when a page loads. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy</a>.</li>
      <li><strong>Supabase.</strong> Our account provider. If you have an account, it stores your account details and sends you the confirmation and password-reset emails.</li>
      <li><strong>Our host.</strong> Like any website host, ours may keep technical logs such as your IP address and browser type, for security and to keep the site running.</li>
      </ul>
      <h2>Advertising</h2>
      <p>We plan to show advertising in future to help cover running costs. If we do, we will update this policy and ask for your consent before any advertising cookies or similar technologies are used. Rejecting them won’t stop you using the site.</p>
      <h2>Our legal basis</h2>
      <p>For accounts, we process your data so that we can provide the classroom features you sign up for (performance of our service to you, and our legitimate interest in running it securely). For essential storage, no consent is needed. For anything optional, we rely on your consent, which you can withdraw at any time. For technical data handled to deliver and secure the site, we rely on our legitimate interest in keeping the service running and safe.</p>
      <h2>Your rights</h2>
      <p>Under the UK GDPR you have the right to ask what personal data we hold about you, to have it corrected or deleted, to restrict or object to how it’s used, and to receive a copy of it. You can correct your name and year group, and delete your account and profile yourself, on your profile page. To ask for anything else, contact us using the details on our website. You can also complain to the Information Commissioner’s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
      <h2>Young people</h2>
      <p>Tea-cher is made for A Level students, many of whom are under 18. Accounts are limited to verified schools, and you must be 16 or over to sign up. We keep to the minimum we need (a name, a school email and optional year group), and we don’t use account data for advertising.</p>
      <h2>Changes</h2>
      <p>If we change this policy in a way that matters, we will update the date above and ask for your consent again where the law requires it.</p>
      <p><Link className="btn" to="/">Back to Tea-cher</Link></p>
      </div>
      
  );
}
