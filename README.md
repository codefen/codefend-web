# codefend-web

Marketing site for [codefend.com](https://codefend.com) — **Next.js 15** (Node), no PHP runtime for the public site.

## Architecture

| Surface | Stack | Notes |
|--------|--------|--------|
| Marketing pages (`/en/*`, `/es/*`) | Static HTML exported from PHP templates → `public/` | Same look as the former PHP site |
| Service detail pages | Static HTML under `public/{locale}/services/*.html` | |
| Articles detail | Next SSR from MySQL `codefend_web` | `/[locale]/article/[slug]` |
| Articles list | Static snapshot (re-export after CMS changes) | |
| User / admin panels | Static SPA in `public/user-panel`, `public/admin-panel` | API remains `api.codefend.com` (PHP) |
| CMS (`/cms`) | PHP (optional) | Until CMS is ported to Node |

## Local

```bash
npm install
npm run dev
```

Export marketing HTML from the PHP tree (build-time only):

```bash
npm run export:php
```

Env: copy `.env.local` / `.env.production` (`DATABASE_*`, `SITE_URL`).

## Production (OVH)

- App: `/var/www/codefend-web` (systemd `codefend-web`, port 3000)
- Nginx: proxies `codefend.com` → Node; panels served as static files; `api.codefend.com` stays PHP
- Old PHP marketing tree: `/var/www/codefend.com.php-bak`
