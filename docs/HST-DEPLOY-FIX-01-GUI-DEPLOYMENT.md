# HST-DEPLOY-FIX-01 — GUI Deployment Guide

> How to upload the local project to GitHub Desktop and deploy on Vercel (no terminal commands).

---

## Project Status

| Check | Status |
|-------|--------|
| Local code | Complete — 0 build errors, 0 lint errors, 0 type errors |
| Git repository | Exists locally, but the old commit on GitHub (6f72600) is outdated |
| Vercel deployment | Currently showing 404 because it deploys the old commit |
| Goal | Upload the real local project to GitHub, then import into Vercel |

---

## Files That Must Exist at Project Root

These are the files that GitHub Desktop and Vercel need to recognise this as a Next.js project:

| File | Status |
|------|--------|
| `package.json` | ✅ Exists — declares Next.js, React, Supabase client |
| `next.config.ts` | ✅ Exists — default config, no custom settings |
| `tsconfig.json` | ✅ Exists — TypeScript configuration |
| `eslint.config.mjs` | ✅ Exists — ESLint configuration |
| `postcss.config.mjs` | ✅ Exists — PostCSS for Tailwind |
| `src/app/page.tsx` | ✅ Exists — homepage component |
| `.gitignore` | ✅ Exists — excludes node_modules, .next, .env*, etc. |

## Files That Must NOT Be Uploaded

These are excluded by `.gitignore` — they should NOT appear in GitHub Desktop's staging area:

| File/Directory | Why Excluded |
|----------------|--------------|
| `node_modules/` | Dependencies — installed by `npm install` on Vercel |
| `.next/` | Build cache — generated fresh on Vercel |
| `.env*` (any `.env` file) | Environment variables — not committed to git |
| `tsconfig.tsbuildinfo` | TypeScript build cache |

---

## Step 1 — Verify GitHub Desktop

1. Open **GitHub Desktop**
2. Select the HealthStay repository
3. Confirm the current repository shows `healthstay-mvp` or the correct repo name
4. Look at the **Changes** tab — it should show the local files that differ from the old commit

## Step 2 — Check What Will Be Uploaded

Before committing, confirm these files are **not** in the Changes list:
- `node_modules/` — should be excluded (greyed out or not shown)
- `.next/` — should be excluded
- Any `.env` file (`.env.local`, `.env.production`, etc.) — should be excluded
- `tsconfig.tsbuildinfo` — should be excluded

Expected files in the Changes list:
- All files in `src/` (components, pages, data, lib)
- All files in `docs/` (outreach, QA, deployment documents)
- All files in `supabase/migrations/` (SQL schema + seed data)
- Root config files (`package.json`, `tsconfig.json`, `next.config.ts`, etc.)
- `public/` assets
- `README.md`
- `.env.example` — this is safe to commit (contains only empty placeholders)
- `.gitignore`

## Step 3 — Commit All Changes

1. In the **Summary** field, write:
   ```
   HST-MVP-03 + HST-DEPLOY-01 + HST-OUTREACH-01 — Full local prototype + outreach package
   ```
2. In the **Description** field (optional):
   ```
   18 routes, Supabase content schema, outreach docs, final QA checks passed.
   ```
3. Click **Commit to main**
4. Click **Push origin** to upload to GitHub

## Step 4 — Replace Old Vercel Deployment

The old Vercel deployment is using commit `6f72600` and shows a 404. It must be replaced.

1. Go to **https://vercel.com**
2. Log in with your GitHub account
3. Go to the HealthStay project dashboard

### Option A: Redeploy from GitHub

1. Go to **Deployments** tab
2. Find the latest failed/404 deployment
3. Click the three dots (`...`) on the right
4. Select **Redeploy**
5. Choose the latest commit (the one you just pushed)
6. Click **Redeploy**

### Option B: Re-import the Project (if Option A doesn't work)

1. Go to Vercel dashboard: **https://vercel.com**
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Select your GitHub repository (`healthstay-mvp` or similar)
5. Vercel will auto-detect:

   | Setting | Expected Value |
   |---------|----------------|
   | Framework Preset | Next.js |
   | Build Command | `npm run build` |
   | Install Command | `npm install` |
   | Output Directory | Next.js default (`.next`) |

6. **Do not** add any environment variables — the prototype works with static fallback
7. Click **Deploy**
8. Wait for the build to complete (1–3 minutes)

## Step 5 — Verify the Live URL

Once deployment completes, Vercel will show a live URL like:
```
https://healthstay-mvp.vercel.app
```

Test these routes immediately:

| Route | Test |
|-------|------|
| `https://[your-url].vercel.app/` | Homepage loads |
| `https://[your-url].vercel.app/demo` | Demo page loads |
| `https://[your-url].vercel.app/pilot` | Pilot page loads |
| `https://[your-url].vercel.app/pilot/value` | Provider value page loads |
| `https://[your-url].vercel.app/pilot/roadmap` | Roadmap page loads |
| `https://[your-url].vercel.app/pilot/story` | Story page loads |
| `https://[your-url].vercel.app/journey` | Journey page loads |
| `https://[your-url].vercel.app/programs` | Programmes listing loads |
| `https://[your-url].vercel.app/compare` | Compare page loads |
| `https://[your-url].vercel.app/request` | Request form loads |
| `https://[your-url].vercel.app/trust-safety` | Trust page loads |
| `https://[your-url].vercel.app/partners` | Partners page loads |
| `https://[your-url].vercel.app/contact` | Contact page loads |
| `https://[your-url].vercel.app/about` | About page loads |

After confirming all routes work, the old 404 deployment can be ignored — it is replaced by the new one.

## Step 6 — Prepare for Sending

1. Copy the live Vercel URL (e.g. `https://healthstay-mvp.vercel.app`)
2. Open `docs/FIRST_EMAIL_READY_TO_SEND.md`
3. Replace `LIVE_URL_PLACEHOLDER` with the actual URL
4. Replace `[Name]` with the recipient name
5. Replace `docs/DEMO_LINKS_TO_SHARE.md` — replace `LIVE_URL_PLACEHOLDER` with the actual URL throughout

## Warning

| Issue | Detail |
|-------|--------|
| Old commit `6f72600` | Ignore it. It was an early version that did not contain the full project. |
| Old URL returning 404 | Normal — the old deployment is stale. The new deployment replaces it. |
| Multiple lockfiles warning | The Next.js build shows a cosmetic warning about multiple lockfiles. It does not affect the deployment. The build succeeds with 0 errors. |

---

## Troubleshooting

**Q: GitHub Desktop shows `node_modules` in Changes.**
A: Check `.gitignore` exists at the project root and contains `/node_modules`. If it is missing, add it.

**Q: Vercel build fails.**
A: The most common cause is a missing `package.json` or incorrect framework auto-detection. Confirm the Framework Preset is set to **Next.js**. Do not change any other settings.

**Q: Vercel URL shows 404 after deployment.**
A: Wait 30 seconds and refresh. If it persists, go to Vercel → Deployments → find the latest deployment → Redeploy.

**Q: I need a custom domain.**
A: In Vercel dashboard, go to your project → Settings → Domains → Add your domain. This is optional and can be done later.
