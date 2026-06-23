-- HealthStay MVP — Non-Sensitive Content Schema
-- This migration creates tables for public, non-sensitive content only.
-- No patient data, no medical records, no contact submissions, no requests.

create extension if not exists "pgcrypto";

-- Helper: updated_at trigger
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- 1. markets
create table if not exists public.markets (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  locale text not null,
  currency_code text not null,
  timezone text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger trg_markets_updated_at
  before update on public.markets
  for each row execute function set_updated_at();

-- 2. health_categories
create table if not exists public.health_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  display_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger trg_health_categories_updated_at
  before update on public.health_categories
  for each row execute function set_updated_at();

-- 3. programs
create table if not exists public.programs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category_id uuid references public.health_categories(id),
  title text not null,
  short_description text not null,
  long_description text not null,
  duration_label text not null,
  location_label text not null,
  price_label text not null,
  ideal_for text[] not null default '{}',
  includes text[] not null default '{}',
  not_included text[] not null default '{}',
  accommodation_support boolean not null default false,
  coordinator_support boolean not null default true,
  post_stay_support boolean not null default false,
  human_validation_required boolean not null default true,
  cta_label text not null default 'Request a proposal',
  status text not null default 'published',
  display_order integer not null default 0,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint programs_status_check check (status in ('draft', 'published', 'archived'))
);

create trigger trg_programs_updated_at
  before update on public.programs
  for each row execute function set_updated_at();

create index if not exists idx_programs_slug on public.programs(slug);
create index if not exists idx_programs_status on public.programs(status);
create index if not exists idx_programs_category_id on public.programs(category_id);

-- 4. centers
create table if not exists public.centers (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  country text not null,
  region text not null,
  city text not null,
  focus_areas text[] not null default '{}',
  languages text[] not null default '{}',
  accommodation text not null,
  international_support text[] not null default '{}',
  package_types text[] not null default '{}',
  verification_status text not null default 'prototype',
  prototype_notice text,
  status text not null default 'published',
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint centers_verification_status_check check (verification_status in ('prototype', 'pending_validation', 'verified')),
  constraint centers_status_check check (status in ('draft', 'published', 'archived'))
);

create trigger trg_centers_updated_at
  before update on public.centers
  for each row execute function set_updated_at();

create index if not exists idx_centers_slug on public.centers(slug);
create index if not exists idx_centers_status on public.centers(status);

-- 5. center_programs (many-to-many)
create table if not exists public.center_programs (
  center_id uuid not null references public.centers(id) on delete cascade,
  program_id uuid not null references public.programs(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (center_id, program_id)
);

-- 6. journey_steps
create table if not exists public.journey_steps (
  id uuid primary key default gen_random_uuid(),
  step_number integer not null,
  title text not null,
  description text not null,
  human_touchpoint boolean not null default false,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint journey_steps_status_check check (status in ('draft', 'published', 'archived'))
);

create trigger trg_journey_steps_updated_at
  before update on public.journey_steps
  for each row execute function set_updated_at();

create index if not exists idx_journey_steps_step_number on public.journey_steps(step_number);

-- 7. trust_principles
create table if not exists public.trust_principles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  display_order integer not null default 0,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint trust_principles_status_check check (status in ('draft', 'published', 'archived'))
);

create trigger trg_trust_principles_updated_at
  before update on public.trust_principles
  for each row execute function set_updated_at();

create index if not exists idx_trust_principles_display_order on public.trust_principles(display_order);

-- 8. compare_rows
create table if not exists public.compare_rows (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  prevention_value text not null,
  second_opinion_value text not null,
  rehabilitation_value text not null,
  display_order integer not null default 0,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint compare_rows_status_check check (status in ('draft', 'published', 'archived'))
);

create trigger trg_compare_rows_updated_at
  before update on public.compare_rows
  for each row execute function set_updated_at();

create index if not exists idx_compare_rows_display_order on public.compare_rows(display_order);

-- Row Level Security
alter table public.markets enable row level security;
alter table public.health_categories enable row level security;
alter table public.programs enable row level security;
alter table public.centers enable row level security;
alter table public.center_programs enable row level security;
alter table public.journey_steps enable row level security;
alter table public.trust_principles enable row level security;
alter table public.compare_rows enable row level security;

-- Public read-only policies
create policy "Allow public read for active markets"
  on public.markets for select
  using (is_active = true);

create policy "Allow public read for active categories"
  on public.health_categories for select
  using (is_active = true);

create policy "Allow public read for published programs"
  on public.programs for select
  using (status = 'published');

create policy "Allow public read for published centers"
  on public.centers for select
  using (status = 'published');

create policy "Allow public read for published center_programs"
  on public.center_programs for select
  using (
    exists (select 1 from public.centers c where c.id = center_id and c.status = 'published')
    and exists (select 1 from public.programs p where p.id = program_id and p.status = 'published')
  );

create policy "Allow public read for published journey_steps"
  on public.journey_steps for select
  using (status = 'published');

create policy "Allow public read for published trust_principles"
  on public.trust_principles for select
  using (status = 'published');

create policy "Allow public read for published compare_rows"
  on public.compare_rows for select
  using (status = 'published');
