# HST-MVP-02 — Supabase Non-Sensitive Content Schema

## What This Phase Adds

This phase introduces a Supabase PostgreSQL content foundation for public, non-sensitive data only. The platform can fetch content from Supabase when configured, and falls back to existing static data when it is not.

## What Data Is Stored

Only public/demo content is stored in the database:

| Table | Content |
|-------|---------|
| `markets` | Country/market configuration (e.g. Switzerland) |
| `health_categories` | Programme categories (Prevention, Second Opinion, etc.) |
| `programs` | Health stay programme details |
| `centers` | Demo center profiles with prototype notices |
| `center_programs` | Many-to-many relations between centers and programmes |
| `journey_steps` | International patient journey step definitions |
| `trust_principles` | Trust & safety principle content |
| `compare_rows` | Comparison table row data |

## What Data Is Explicitly NOT Stored

- Patient requests or inquiries
- Contact form submissions
- Medical records or documents
- Personal health information
- Authentication data
- Payment information

## How to Run Migrations

### Prerequisites

1. Install the Supabase CLI: https://supabase.com/docs/guides/cli
2. Link your local project to a Supabase project:

```bash
supabase link --project-ref your-project-ref
```

### Run migrations

```bash
supabase db push
```

Or to run locally:

```bash
supabase start
supabase migration up
```

## How to Add Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Add your Supabase project credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## How Fallback Mode Works

1. The app checks if `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set.
2. If both are missing → no Supabase client is created → all repository functions return static data from `src/data/`.
3. If both are set → Supabase client is created → repository functions query the database.
4. If a query fails (network error, missing table, etc.) → falls back to static data.
5. Errors are logged only in development mode; users never see database errors.

## RLS Summary

All tables have Row Level Security enabled with read-only policies for anonymous users:

| Table | Policy |
|-------|--------|
| `markets` | Read only if `is_active = true` |
| `health_categories` | Read only if `is_active = true` |
| `programs` | Read only if `status = 'published'` |
| `centers` | Read only if `status = 'published'` |
| `center_programs` | Read only when both related center and programme are published |
| `journey_steps` | Read only if `status = 'published'` |
| `trust_principles` | Read only if `status = 'published'` |
| `compare_rows` | Read only if `status = 'published'` |

No anonymous INSERT, UPDATE, or DELETE policies exist. Write access is reserved for authenticated admin roles (not implemented in this phase).

## Why Patient/Contact Submissions Are Excluded

Patient requests and contact submissions involve personal data that requires:

- Privacy and legal review before collection
- GDPR / Swiss FADP compliance
- Data retention policies
- Secure transmission and storage
- Potential healthcare regulatory requirements

These are explicitly excluded from this phase and should be addressed in a later phase only after proper legal and privacy review.

## File Structure

```
src/
  lib/
    supabase/
      client.ts          — Safe Supabase client (null if env missing)
    content/
      repository.ts      — Data access layer with Supabase-first + static fallback
      mappers.ts         — Type-safe DB row to frontend type mappers
supabase/
  migrations/
    20260623000001_create_content_core.sql   — Schema + RLS
    20260623000002_seed_content_demo_data.sql — Demo seed data
.env.example                                 — Optional env template
docs/HST-MVP-02-SUPABASE-CONTENT.md          — This document
```

## Pages Using Repository

Pages now fetch data through the repository layer instead of directly importing static data:

- `/` — Homepage (programmes, journey steps)
- `/programs` — Programme listing
- `/programs/brain-health-prevention` — Programme detail
- `/programs/neuro-second-opinion` — Programme detail
- `/programs/neuro-rehabilitation-stay` — Programme detail
- `/centers` — Center listing
- `/compare` — Comparison table
- `/journey` — Journey timeline
- `/trust-safety` — Trust principles

## Next Recommended Phase

**HST-MVP-03** — Admin content management prototype or controlled pilot presentation package, depending on whether the goal is technical platform growth or Cereneo outreach.
