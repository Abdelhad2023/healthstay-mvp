import { Program } from "@/types/healthstay";

export const programs: Program[] = [
  {
    slug: "brain-health-prevention",
    title: "Brain Health Prevention Stay",
    category: "Prevention",
    shortDescription:
      "A comprehensive multi-day brain health assessment and lifestyle optimisation programme in a premium Swiss setting.",
    longDescription:
      "Designed for individuals who want to take a proactive approach to their brain health, this prevention-focused programme combines advanced cognitive assessment, lifestyle consultation, nutritional planning, and regenerative activities. Set against the backdrop of Switzerland's lake and mountain regions, the stay offers a calm environment for reflection, testing, and personalised planning. The goal is to identify risk factors early, establish a brain-healthy routine, and provide a clear prevention roadmap — not to diagnose or treat existing conditions.",
    idealFor: [
      "Individuals with a family history of neurological conditions",
      "Professionals experiencing cognitive fatigue or brain fog",
      "Anyone seeking a structured brain health baseline",
      "Guests who prefer prevention over reaction",
    ],
    duration: "3–5 days",
    location: "Lake Lucerne Region, Switzerland",
    priceLabel: "From CHF 8,500 — on request after validation",
    includes: [
      "Comprehensive cognitive assessment",
      "Medical consultation with a prevention specialist",
      "Lifestyle and nutrition planning session",
      "Wellness activities: guided nature walks, mindfulness, light exercise",
      "Premium accommodation (5 nights)",
      "Airport transfer (Zurich or Basel)",
      "Dedicated English-speaking coordinator",
      "Post-stay prevention report and digital follow-up",
    ],
    notIncluded: [
      "Flight tickets",
      "Travel insurance",
      "Ongoing treatment or therapy",
      "Medication prescriptions",
    ],
    accommodationSupport: true,
    coordinatorSupport: true,
    postStaySupport: true,
    humanValidationRequired: true,
    ctaLabel: "Request a personal proposal",
  },
  {
    slug: "neuro-second-opinion",
    title: "Neuro Second Opinion Journey",
    category: "Second Opinion",
    shortDescription:
      "A remote or on-site expert review of existing medical information by a Swiss neuro-specialist team.",
    longDescription:
      "For patients or families who already have medical records, scans, or a diagnosis and seek an independent expert perspective from a Swiss neuro-centre. The process begins with a document review by a specialist physician, followed by a consultation to discuss findings and orientation. The outcome is a structured medical summary and recommendation — not a guaranteed treatment plan or cure. The service can be conducted remotely or as a short on-site stay.",
    idealFor: [
      "Patients with a recent neurological diagnosis seeking a second perspective",
      "Families helping a relative explore options abroad",
      "Individuals considering a neuro-rehabilitation programme and wanting expert pre-screening",
      "Anyone who wants Swiss neuro-expertise without committing to a full treatment stay",
    ],
    duration: "Remote or 1–2 days on-site",
    location: "Zurich / Geneva / Remote, Switzerland",
    priceLabel: "From CHF 3,500 — on request after validation",
    includes: [
      "Specialist review of existing medical documents",
      "Video or in-person consultation with a neuro-specialist",
      "Structured medical summary and orientation letter",
      "Coordinator support for scheduling and logistics",
      "Optional on-site accommodation (if travelling)",
    ],
    notIncluded: [
      "Ongoing treatment or therapy",
      "Emergency medical care",
      "Medication prescriptions",
      "Guaranteed admission to any programme",
      "Medical document translation (if needed)",
    ],
    accommodationSupport: true,
    coordinatorSupport: true,
    postStaySupport: false,
    humanValidationRequired: true,
    ctaLabel: "Request a personal proposal",
  },
  {
    slug: "neuro-rehabilitation-stay",
    title: "Neuro-Rehabilitation Stay",
    category: "Rehabilitation",
    shortDescription:
      "A structured, multi-week neuro-rehabilitation programme with coordinated accommodation, therapy, and family support.",
    longDescription:
      "For patients recovering from neurological events such as stroke, brain injury, or mild neuro-condition, this programme offers a structured rehabilitation pathway in a Swiss neuro-centre. Therapy sessions are coordinated by a multidisciplinary team and may include mobility training, speech therapy, cognitive exercises, and psychological support. The programme includes accommodation for the patient and an accompanying person, daily meals, transport, and a transition plan for returning home. Post-stay follow-up is conducted via secure digital sessions.",
    idealFor: [
      "Patients recovering from stroke or brain injury",
      "Individuals with mild to moderate cognitive or motor impairments",
      "Families seeking a structured, supervised rehabilitation environment",
      "Guests who need a coordinated programme including accommodation and transport",
    ],
    duration: "7–14 days (extendable)",
    location: "Lake Lucerne / Zurich Region, Switzerland",
    priceLabel: "On request — after clinic validation",
    includes: [
      "Multidisciplinary therapy sessions (mobility, speech, cognition)",
      "Medical supervision by a neuro-rehabilitation team",
      "Premium accommodation (private room)",
      "Daily meals and nutrition support",
      "Accompanying person accommodation (if needed)",
      "Airport transfer",
      "Dedicated English-speaking coordinator",
      "Weekly progress reports",
      "Post-stay digital follow-up (up to 4 weeks)",
      "Transition planning and home exercise guidance",
    ],
    notIncluded: [
      "Flight tickets",
      "Travel insurance",
      "Emergency medical treatment",
      "Medication costs",
      "Care beyond the agreed programme duration",
    ],
    accommodationSupport: true,
    coordinatorSupport: true,
    postStaySupport: true,
    humanValidationRequired: true,
    ctaLabel: "Request a personal proposal",
  },
  {
    slug: "post-stay-recovery-support",
    title: "Post-Stay Recovery Support",
    category: "Follow-up",
    shortDescription:
      "Continued digital guidance and coordinator support after returning home from a Swiss neuro-health stay.",
    longDescription:
      "After completing a prevention, second opinion, or rehabilitation stay in Switzerland, guests can opt into a structured post-stay support programme. This includes remote check-ins with the coordinator, digital progress tracking, access to the post-stay report, and optional video consultations with the Swiss team. The goal is to ensure continuity between the Swiss programme and the patient's home environment — not to replace local medical follow-up.",
    idealFor: [
      "Guests who have completed a HealthStay programme",
      "Patients and families who want continued guidance after returning home",
      "Individuals who want help implementing the prevention or rehabilitation plan",
      "Anyone who values a structured transition back to daily life",
    ],
    duration: "4–8 weeks (remote)",
    location: "Remote — global",
    priceLabel: "From CHF 1,800 — on request after validation",
    includes: [
      "Weekly video check-in with coordinator",
      "Digital progress tracking and reporting",
      "Access to post-stay medical summary",
      "One video consultation with the Swiss centre team",
      "Home exercise or lifestyle plan guidance",
      "Email and messaging support during business hours",
    ],
    notIncluded: [
      "Local medical follow-up or therapy",
      "Emergency support",
      "Medication management",
      "In-person visits",
    ],
    accommodationSupport: false,
    coordinatorSupport: true,
    postStaySupport: true,
    humanValidationRequired: false,
    ctaLabel: "Request a personal proposal",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getProgramsByCategory(
  category: Program["category"]
): Program[] {
  return programs.filter((p) => p.category === category);
}

export function getComparisonPrograms(): Program[] {
  return programs.filter(
    (p) =>
      p.slug === "brain-health-prevention" ||
      p.slug === "neuro-second-opinion" ||
      p.slug === "neuro-rehabilitation-stay"
  );
}
