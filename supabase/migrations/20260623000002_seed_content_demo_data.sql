-- HealthStay MVP — Seed Demo Content
-- Non-sensitive, public demo data only.
-- All content uses safe language: no AI diagnosis, no success predictions, human validation required.

-- Markets
insert into public.markets (code, name, locale, currency_code, timezone) values
  ('CH', 'Switzerland', 'en', 'CHF', 'Europe/Zurich')
on conflict (code) do nothing;

-- Health Categories
insert into public.health_categories (slug, name, description, display_order, is_active) values
  ('prevention', 'Prevention', 'Brain health prevention and lifestyle optimisation programmes', 1, true),
  ('second-opinion', 'Second Opinion', 'Expert review of existing medical information by Swiss specialists', 2, true),
  ('rehabilitation', 'Rehabilitation', 'Structured neuro-rehabilitation stays with multidisciplinary therapy', 3, true),
  ('follow-up', 'Follow-up', 'Post-stay digital support and continued guidance after returning home', 4, true)
on conflict (slug) do nothing;

-- Programs
with cat as (select id, slug from public.health_categories)
insert into public.programs (
  slug, category_id, title, short_description, long_description,
  duration_label, location_label, price_label, ideal_for, includes, not_included,
  accommodation_support, coordinator_support, post_stay_support, human_validation_required,
  cta_label, status, display_order, seo_title, seo_description
) values
(
  'brain-health-prevention',
  (select id from cat where slug = 'prevention'),
  'Brain Health Prevention Stay',
  'A comprehensive multi-day brain health assessment and lifestyle optimisation programme in a premium Swiss setting.',
  'Designed for individuals who want to take a proactive approach to their brain health, this prevention-focused programme combines advanced cognitive assessment, lifestyle consultation, nutritional planning, and regenerative activities. Set against the backdrop of Switzerland''s lake and mountain regions, the stay offers a calm environment for reflection, testing, and personalised planning. The goal is to identify risk factors early, establish a brain-healthy routine, and provide a clear prevention roadmap — not to diagnose or treat existing conditions.',
  '3–5 days',
  'Lake Lucerne Region, Switzerland',
  'From CHF 8,500 — on request after validation',
  array['Individuals with a family history of neurological conditions', 'Professionals experiencing cognitive fatigue or brain fog', 'Anyone seeking a structured brain health baseline', 'Guests who prefer prevention over reaction'],
  array['Comprehensive cognitive assessment', 'Medical consultation with a prevention specialist', 'Lifestyle and nutrition planning session', 'Wellness activities: guided nature walks, mindfulness, light exercise', 'Premium accommodation (5 nights)', 'Airport transfer (Zurich or Basel)', 'Dedicated English-speaking coordinator', 'Post-stay prevention report and digital follow-up'],
  array['Flight tickets', 'Travel insurance', 'Ongoing treatment or therapy', 'Medication prescriptions'],
  true, true, true, true,
  'Request a personal proposal',
  'published', 1,
  'Brain Health Prevention Stay',
  'A premium multi-day brain health assessment and lifestyle optimisation programme in a Swiss lakefront setting.'
),
(
  'neuro-second-opinion',
  (select id from cat where slug = 'second-opinion'),
  'Neuro Second Opinion Journey',
  'A remote or on-site expert review of existing medical information by a Swiss neuro-specialist team.',
  'For patients or families who already have medical records, scans, or a diagnosis and seek an independent expert perspective from a Swiss neuro-centre. The process begins with a document review by a specialist physician, followed by a consultation to discuss findings and orientation. The outcome is a structured medical summary and recommendation — not a guaranteed treatment plan or cure. The service can be conducted remotely or as a short on-site stay.',
  'Remote or 1–2 days on-site',
  'Zurich / Geneva / Remote, Switzerland',
  'From CHF 3,500 — on request after validation',
  array['Patients with a recent neurological diagnosis seeking a second perspective', 'Families helping a relative explore options abroad', 'Individuals considering a neuro-rehabilitation programme and wanting expert pre-screening', 'Anyone who wants Swiss neuro-expertise without committing to a full treatment stay'],
  array['Specialist review of existing medical documents', 'Video or in-person consultation with a neuro-specialist', 'Structured medical summary and orientation letter', 'Coordinator support for scheduling and logistics', 'Optional on-site accommodation (if travelling)'],
  array['Ongoing treatment or therapy', 'Emergency medical care', 'Medication prescriptions', 'Guaranteed admission to any programme', 'Medical document translation (if needed)'],
  true, true, false, true,
  'Request a personal proposal',
  'published', 2,
  'Neuro Second Opinion Journey',
  'A remote or on-site expert review of existing medical information by a Swiss neuro-specialist team.'
),
(
  'neuro-rehabilitation-stay',
  (select id from cat where slug = 'rehabilitation'),
  'Neuro-Rehabilitation Stay',
  'A structured, multi-week neuro-rehabilitation programme with coordinated accommodation, therapy, and family support.',
  'For patients recovering from neurological events such as stroke, brain injury, or mild neuro-condition, this programme offers a structured rehabilitation pathway in a Swiss neuro-centre. Therapy sessions are coordinated by a multidisciplinary team and may include mobility training, speech therapy, cognitive exercises, and psychological support. The programme includes accommodation for the patient and an accompanying person, daily meals, transport, and a transition plan for returning home. Post-stay follow-up is conducted via secure digital sessions.',
  '7–14 days (extendable)',
  'Lake Lucerne / Zurich Region, Switzerland',
  'On request — after clinic validation',
  array['Patients recovering from stroke or brain injury', 'Individuals with mild to moderate cognitive or motor impairments', 'Families seeking a structured, supervised rehabilitation environment', 'Guests who need a coordinated programme including accommodation and transport'],
  array['Multidisciplinary therapy sessions (mobility, speech, cognition)', 'Medical supervision by a neuro-rehabilitation team', 'Premium accommodation (private room)', 'Daily meals and nutrition support', 'Accompanying person accommodation (if needed)', 'Airport transfer', 'Dedicated English-speaking coordinator', 'Weekly progress reports', 'Post-stay digital follow-up (up to 4 weeks)', 'Transition planning and home exercise guidance'],
  array['Flight tickets', 'Travel insurance', 'Emergency medical treatment', 'Medication costs', 'Care beyond the agreed programme duration'],
  true, true, true, true,
  'Request a personal proposal',
  'published', 3,
  'Neuro-Rehabilitation Stay',
  'A structured, multi-week neuro-rehabilitation programme with coordinated accommodation, therapy, and family support in Switzerland.'
),
(
  'post-stay-recovery-support',
  (select id from cat where slug = 'follow-up'),
  'Post-Stay Recovery Support',
  'Continued digital guidance and coordinator support after returning home from a Swiss neuro-health stay.',
  'After completing a prevention, second opinion, or rehabilitation stay in Switzerland, guests can opt into a structured post-stay support programme. This includes remote check-ins with the coordinator, digital progress tracking, access to the post-stay report, and optional video consultations with the Swiss team. The goal is to ensure continuity between the Swiss programme and the patient''s home environment — not to replace local medical follow-up.',
  '4–8 weeks (remote)',
  'Remote — global',
  'From CHF 1,800 — on request after validation',
  array['Guests who have completed a HealthStay programme', 'Patients and families who want continued guidance after returning home', 'Individuals who want help implementing the prevention or rehabilitation plan', 'Anyone who values a structured transition back to daily life'],
  array['Weekly video check-in with coordinator', 'Digital progress tracking and reporting', 'Access to post-stay medical summary', 'One video consultation with the Swiss centre team', 'Home exercise or lifestyle plan guidance', 'Email and messaging support during business hours'],
  array['Local medical follow-up or therapy', 'Emergency support', 'Medication management', 'In-person visits'],
  false, true, true, false,
  'Request a personal proposal',
  'published', 4,
  'Post-Stay Recovery Support',
  'Continued digital guidance and coordinator support after returning home from a Swiss neuro-health stay.'
)
on conflict (slug) do nothing;

-- Centers
insert into public.centers (slug, name, country, region, city, focus_areas, languages, accommodation, international_support, package_types, verification_status, prototype_notice, status, display_order) values
(
  'swiss-neuro-health-center',
  'Swiss Neuro Health Center — Lake Lucerne',
  'Switzerland', 'Lake Lucerne', 'Weggis',
  array['Brain health prevention', 'Neuro-rehabilitation', 'Cognitive assessment', 'Second medical opinion'],
  array['English', 'German', 'French', 'Arabic'],
  'On-site premium suites with lake views. Accompanying person rooms available.',
  array['Dedicated international coordinator', 'Airport transfer coordination', 'Multi-lingual staff', 'Dietary accommodation', 'Visa support letters'],
  array['Brain Health Prevention Stay', 'Neuro-Rehabilitation Stay', 'Neuro Second Opinion Journey'],
  'prototype',
  'Prototype profile for concept demonstration. Final partner data requires direct validation by the establishment.',
  'published', 1
),
(
  'alpine-brain-prevention-institute',
  'Alpine Brain Prevention Institute',
  'Switzerland', 'Vitznau Region', 'Vitznau',
  array['Prevention programmes', 'Lifestyle medicine', 'Stress and cognitive fatigue', 'Nutritional neuroscience'],
  array['English', 'German', 'Italian'],
  'Partner premium hotel with wellness facilities, 5-minute transfer to institute.',
  array['English-speaking medical team', 'Wellness concierge', 'Dietary planning', 'Nature-based recovery activities'],
  array['Brain Health Prevention Stay', 'Post-Stay Recovery Support'],
  'prototype',
  'Prototype profile for concept demonstration. Final partner data requires direct validation by the establishment.',
  'published', 2
),
(
  'geneva-international-rehab',
  'Geneva International Rehabilitation Center',
  'Switzerland', 'Lake Geneva', 'Geneva',
  array['Neuro-rehabilitation', 'Post-stroke recovery', 'Cognitive rehabilitation', 'Family support programmes'],
  array['English', 'French', 'Spanish', 'Portuguese'],
  'On-site rehabilitation residence with private rooms and family apartments.',
  array['International patient department', 'Multi-lingual therapy team', 'Family accommodation', 'Cultural mediation', 'Travel and visa assistance'],
  array['Neuro-Rehabilitation Stay', 'Post-Stay Recovery Support'],
  'prototype',
  'Prototype profile for concept demonstration. Final partner data requires direct validation by the establishment.',
  'published', 3
),
(
  'zurich-neuro-recovery',
  'Zurich Neuro Recovery Clinic',
  'Switzerland', 'Zurich', 'Zurich',
  array['Neurological second opinions', 'Post-acute neuro-rehabilitation', 'Movement disorders', 'Speech and cognition therapy'],
  array['English', 'German', 'Russian', 'Turkish'],
  'Partner hotel with medical support package. Accessible rooms available.',
  array['International patient coordination', 'Airport pickup and drop-off', 'Interpreter services', 'Insurance liaison support'],
  array['Neuro Second Opinion Journey', 'Neuro-Rehabilitation Stay'],
  'prototype',
  'Prototype profile for concept demonstration. Final partner data requires direct validation by the establishment.',
  'published', 4
)
on conflict (slug) do nothing;

-- Center-Program relations
with
  c as (select id, slug from public.centers),
  p as (select id, slug from public.programs)
insert into public.center_programs (center_id, program_id)
select c.id, p.id from c, p where
  (c.slug = 'swiss-neuro-health-center' and p.slug in ('brain-health-prevention', 'neuro-rehabilitation-stay', 'neuro-second-opinion'))
  or (c.slug = 'alpine-brain-prevention-institute' and p.slug in ('brain-health-prevention', 'post-stay-recovery-support'))
  or (c.slug = 'geneva-international-rehab' and p.slug in ('neuro-rehabilitation-stay', 'post-stay-recovery-support'))
  or (c.slug = 'zurich-neuro-recovery' and p.slug in ('neuro-second-opinion', 'neuro-rehabilitation-stay'))
on conflict (center_id, program_id) do nothing;

-- Journey Steps
insert into public.journey_steps (step_number, title, description, human_touchpoint, status) values
  (1, 'Explore programmes', 'Browse our curated selection of Swiss neuro-health programmes. Each package includes transparent information on what is covered, what is not, and what to expect.', false, 'published'),
  (2, 'Answer basic non-sensitive questions', 'Answer a few non-sensitive questions about your goals, preferences, and availability. No medical documents are required at this stage.', false, 'published'),
  (3, 'Receive suggested options', 'Our AI-assisted matching tool suggests potentially suitable programmes based on your preferences. This is not medical advice — it is a starting point for discussion.', false, 'published'),
  (4, 'Coordinator reviews the request', 'A human coordinator reviews your request, refines the options, and prepares a personalised proposal for clinic submission.', true, 'published'),
  (5, 'Clinic validates suitability', 'The selected clinic or centre reviews your request to confirm whether the programme is suitable and available for your specific situation.', true, 'published'),
  (6, 'Patient receives transparent proposal', 'You receive a clear proposal with the confirmed package, pricing, accommodation, transport, and coordination details — no hidden surprises.', true, 'published'),
  (7, 'Stay preparation', 'Once confirmed, your coordinator helps with travel arrangements, accommodation booking, visa support letters, and any questions before departure.', true, 'published'),
  (8, 'Arrival and support', 'You are welcomed at the airport and transferred to your accommodation. Your coordinator ensures a smooth check-in and orientation.', true, 'published'),
  (9, 'Programme delivery', 'You begin your programme with the clinic or centre team. Your coordinator remains available for any questions or adjustments.', true, 'published'),
  (10, 'Return home and follow-up', 'After the programme, you return home with a detailed report, post-stay plan, and access to digital follow-up sessions with your coordinator.', true, 'published')
on conflict do nothing;

-- Trust Principles
insert into public.trust_principles (slug, title, description, display_order, status) values
  ('human-validation', 'Human validation at every sensitive step', 'AI assists with matching and information, but every proposal is reviewed by a human coordinator and validated by the selected clinic before any commitment.', 1, 'published'),
  ('no-ai-diagnosis', 'No AI diagnosis or medical advice', 'Our platform does not diagnose, treat, or predict medical outcomes. AI is used only for programme matching, information summarisation, and improving the user experience.', 2, 'published'),
  ('no-medical-prediction', 'No success probability predictions', 'We never display success rates, cure probabilities, or treatment outcome predictions. A Care Matching Score shows programme fit based on preferences, not medical prognosis.', 3, 'published'),
  ('transparent-packages', 'Transparent package logic', 'Every programme clearly states what is included, what is not, and what requires human validation. Hidden costs and surprise exclusions are not part of the experience.', 4, 'published'),
  ('data-privacy', 'Data privacy by design', 'We collect only the information needed to prepare a proposal. Sensitive medical data is not stored on our platform. Data handling follows Swiss and European privacy standards.', 5, 'published'),
  ('partner-verification', 'Partner verification concept', 'All clinics and centres are reviewed before being listed. Prototype profiles are clearly marked. Verified partners undergo a structured validation process.', 6, 'published'),
  ('conflict-transparency', 'Conflict-of-interest transparency', 'Our recommendations are based on programme fit, not commission. Any future partnership or referral relationships will be disclosed clearly.', 7, 'published'),
  ('no-emergency-support', 'Medical emergency disclaimer', 'HealthStay is not an emergency service. If you are experiencing a medical emergency, contact your local emergency services immediately.', 8, 'published'),
  ('patient-decides', 'Patient decides, clinic validates', 'The final decision is always yours. A clinic or centre may recommend a different programme if they determine it is more suitable. No programme is confirmed without your explicit consent.', 9, 'published')
on conflict (slug) do nothing;

-- Compare Rows
insert into public.compare_rows (label, prevention_value, second_opinion_value, rehabilitation_value, display_order, status) values
  ('Main goal', 'Early detection and lifestyle optimisation', 'Expert review of existing medical information', 'Structured recovery after a neurological event', 1, 'published'),
  ('Best for', 'Proactive individuals, no current diagnosis needed', 'Patients with existing medical records or diagnosis', 'Recovery after stroke, brain injury, or neuro-condition', 2, 'published'),
  ('Typical duration', '3–5 days', 'Remote or 1–2 days on-site', '7–14 days (extendable)', 3, 'published'),
  ('Remote possible', 'No — on-site only', 'Yes — remote or on-site', 'No — on-site only', 4, 'published'),
  ('Accommodation', 'Premium on-site or partner hotel', 'Optional (if travelling)', 'Private room + accompanying person option', 5, 'published'),
  ('Coordinator support', 'Dedicated coordinator', 'Scheduling and logistics support', 'Full-time dedicated coordinator', 6, 'published'),
  ('Post-stay follow-up', 'Digital report and follow-up', 'Medical summary only', '4-week digital follow-up included', 7, 'published'),
  ('Human validation required', 'Yes — coordinator + clinic review', 'Yes — medical document review required', 'Yes — clinical suitability assessment', 8, 'published'),
  ('Price visibility', 'Indicative price, confirmed after validation', 'Indicative price, confirmed after review', 'On request — depends on clinical needs', 9, 'published'),
  ('Medical documents required', 'Not required at request stage', 'Required later for specialist review', 'Required later for suitability assessment', 10, 'published'),
  ('Booking type', 'Request-based confirmation', 'Request-based confirmation', 'Request-based confirmation', 11, 'published')
on conflict do nothing;
