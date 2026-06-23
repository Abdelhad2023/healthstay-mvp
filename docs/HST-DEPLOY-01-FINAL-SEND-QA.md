# HST-DEPLOY-01 — Final Send QA

> Complete this document before sending the first outreach email.

---

## 1. Deployment Readiness Checklist

- [ ] Project builds with 0 errors: `npm run build`
- [ ] TypeScript passes with 0 errors: `npm run typecheck`
- [ ] ESLint passes with 0 errors: `npm run lint`
- [ ] App works without Supabase env variables (static fallback)
- [ ] No real secrets committed to the repository
- [ ] `.env.example` exists with empty placeholders only
- [ ] All pages are static (no server-side data dependencies)
- [ ] `next.config.ts` has no custom configuration that could break on Vercel
- [ ] Package.json has correct build command: `next build`

---

## 2. Local Verification Results

| Check | Pass/Fail |
|-------|-----------|
| `npm run typecheck` | ✅ Pass |
| `npm run lint` | ✅ Pass |
| `npm run build` | ✅ Pass — 18 routes, 0 errors |

---

## 3. Route Verification (All 18 Routes)

| Route | Loads | No Crash | No False Claims | Disclaimers |
|-------|-------|----------|-----------------|-------------|
| `/` | ✅ | ✅ | ✅ | ✅ |
| `/about` | ✅ | ✅ | ✅ | ✅ |
| `/centers` | ✅ | ✅ | ✅ | ✅ |
| `/compare` | ✅ | ✅ | ✅ | ✅ |
| `/contact` | ✅ | ✅ | ✅ | ✅ |
| `/demo` | ✅ | ✅ | ✅ | ✅ |
| `/journey` | ✅ | ✅ | ✅ | ✅ |
| `/partners` | ✅ | ✅ | ✅ | ✅ |
| `/pilot` | ✅ | ✅ | ✅ | ✅ |
| `/pilot/value` | ✅ | ✅ | ✅ | ✅ |
| `/pilot/roadmap` | ✅ | ✅ | ✅ | ✅ |
| `/pilot/story` | ✅ | ✅ | ✅ | ✅ |
| `/programs` | ✅ | ✅ | ✅ | ✅ |
| `/programs/brain-health-prevention` | ✅ | ✅ | ✅ | ✅ |
| `/programs/neuro-rehabilitation-stay` | ✅ | ✅ | ✅ | ✅ |
| `/programs/neuro-second-opinion` | ✅ | ✅ | ✅ | ✅ |
| `/request` | ✅ | ✅ | ✅ | ✅ |
| `/trust-safety` | ✅ | ✅ | ✅ | ✅ |

---

## 4. Safety Claim Checklist

| Claim | Present on relevant pages |
|-------|--------------------------|
| Independent prototype/concept | ✅ `/demo`, `/pilot`, DisclaimerBox |
| Not affiliated with any specific provider | ✅ `/demo`, DisclaimerBox |
| Not medical advice | ✅ DisclaimerBox (medical variant), `/pilot`, `/demo`, RequestForm |
| No AI diagnosis | ✅ `/pilot`, `/trust-safety` |
| No outcome prediction | ✅ `/pilot`, `/trust-safety` |
| No instant booking | ✅ `/demo`, `/pilot`, `/trust-safety`, RequestForm |
| Human coordinator review | ✅ `/pilot`, `/journey`, RequestForm |
| Clinic validation required | ✅ `/pilot`, RequestForm |
| For discussion purposes only | ✅ `/pilot`, `/pilot/roadmap` |
| No patient data stored | ✅ `/demo` |
| No false partnership claims verified | ✅ All pages |

---

## 5. Noindex Metadata Verification

| Route | `robots: { index: false, follow: false }` | Status |
|-------|-------------------------------------------|--------|
| `/demo` | ✅ Line 10 | Correct |
| `/pilot/value` | ✅ Line 10 | Correct |
| `/pilot/roadmap` | ✅ Line 9 | Correct |
| `/pilot/story` | ✅ Line 9 | Correct |
| `/pilot` | ❌ Not set — intentional (main pilot page should be indexable) | OK |
| All public pages | ❌ Not set — intentional (should be indexable) | OK |

---

## 6. Vercel Deployment Notes

### Recommended Settings

| Setting | Value |
|---------|-------|
| Framework preset | Next.js |
| Build command | `npm run build` |
| Install command | `npm install` |
| Output directory | Next.js default |
| Node version | 18.x or 20.x (Vercel auto-detects) |

### Environment Variables

**None required** for the prototype to function. The app uses static fallback data when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are not set.

Optional (for Supabase content mode):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Deployment Steps

1. Push repository to GitHub (or connect Vercel to the local project via Vercel CLI)
2. In Vercel dashboard, import the project from the repository
3. Vercel auto-detects Next.js — no manual configuration needed
4. Do not add any environment variables
5. Deploy
6. Verify all routes on the live URL

---

## 7. Live Route Checklist (After Deployment)

| Route | Tested Live | Status |
|-------|-------------|--------|
| `LIVE_URL_PLACEHOLDER/` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/demo` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/pilot` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/pilot/value` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/pilot/roadmap` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/pilot/story` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/journey` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/programs` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/compare` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/request` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/trust-safety` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/partners` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/contact` | ☐ | Not yet deployed |
| `LIVE_URL_PLACEHOLDER/about` | ☐ | Not yet deployed |

---

## 8. Email Send Checklist

- [ ] Prototype deployed and all live links tested
- [ ] `LIVE_URL_PLACEHOLDER` replaced with actual Vercel URL
- [ ] Correct recipient identified
- [ ] Email reviewed for tone and accuracy
- [ ] Only **one link** in the first email: `LIVE_URL_PLACEHOLDER/demo`
- [ ] Follow-up email templates prepared
- [ ] Meeting agenda prepared
- [ ] Objection-handling document reviewed
- [ ] Demo script reviewed

---

## 9. Recommended First Link to Send

**Only `/demo`** in the first email. This page:
- Sets context (independent prototype)
- States safety boundaries clearly
- Provides an 8-step guided path
- Links to all other relevant pages from there

Sending too many links in a first email dilutes the message. Let the recipient explore from the controlled demo page.

---

## 10. Final Reminders

- Do not add Cereneo logo or branding
- Do not claim partnership with any provider
- Do not add lead capture, payment, or auth
- Do not modify static fallback behavior
- Do not send to multiple recipients in one email
- Keep the first email under 150 words
- Wait 5–7 days before following up
- Maximum 2 follow-ups then stop
