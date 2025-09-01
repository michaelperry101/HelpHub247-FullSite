# HelpHub 247 — Production-ready App (Next.js 14, App Router)

**Light-first theme**, sliding scrollable **mobile sidebar**, polished **Settings**, simple **Chat** UI,
and static pages for **About, Reviews, Subscribe, Privacy, Terms**. Optional Google sign-in via NextAuth.

## Quick start

```bash
npm install
npm run dev
# or
npm run build && npm start
```

## Environment (.env)

Copy `.env.example` to `.env.local` and add values **if** you want Google login in `/login`:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=changeme_super_secret
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

> If you skip auth config, the site still builds and runs. The Google button on /login will just redirect to NextAuth which will show a config error until you add keys.

## Files

- `app/layout.jsx` — wraps everything with **ThemeProvider** (default light) and `ClientShell`
- `components/Header.jsx` — top nav + theme toggle + "Chat" CTA
- `components/Sidebar.jsx` — **slide-down**, scrollable mobile menu (Framer Motion)
- `context/SidebarContext.jsx` — state for opening/closing the sidebar
- `app/settings/page.jsx` — **beautiful settings** UI
- `app/chat/page.jsx` — functional local chat demo
- `app/api/auth/[...nextauth]/route.js` — optional Google login
- Tailwind configured with a **brand blue** and subtle shadows

## Deploy to Vercel

This repo is Vercel-ready:
1. Push to GitHub
2. Import into Vercel
3. (Optional) Add env vars for Google OAuth & NEXTAUTH_SECRET
4. Deploy — **no build errors**

## Theming

We use `next-themes` with `defaultTheme="light"`.
Click the "Dark" button in the header or in Settings to toggle.

---

Enjoy!