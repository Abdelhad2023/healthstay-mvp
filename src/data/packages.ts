import { HealthStayPackage } from "@/types/healthstay";

export const healthStayPackages: HealthStayPackage[] = [
  {
    slug: "brain-health-prevention",
    category: "Prevention / Check-up",
    title: "Brain Health Prevention Stay",
    shortDescription:
      "A comprehensive multi-day brain health assessment and lifestyle optimisation programme in a premium setting.",
    duration: "3–5 days",
    destination: "Switzerland",
    priceLabel: "Price on request — after clinic validation",
    accommodationIncluded: true,
    coordinatorIncluded: true,
    clinicValidationRequired: true,
    status: "pilot",
    ctaHref: "/programs/brain-health-prevention",
  },
  {
    slug: "neuro-second-opinion",
    category: "Second Opinion",
    title: "Neuro Second Opinion Journey",
    shortDescription:
      "A remote or on-site expert review of existing medical information by a specialist team.",
    duration: "Remote or 1–2 days on-site",
    destination: "Switzerland",
    priceLabel: "Price on request — after clinic validation",
    accommodationIncluded: true,
    coordinatorIncluded: true,
    clinicValidationRequired: true,
    status: "pilot",
    ctaHref: "/programs/neuro-second-opinion",
  },
  {
    slug: "neuro-rehabilitation-stay",
    category: "Rehabilitation",
    title: "Neuro-Rehabilitation Stay",
    shortDescription:
      "A structured, multi-week neuro-rehabilitation programme with coordinated accommodation, therapy, and family support.",
    duration: "7–14 days (extendable)",
    destination: "Switzerland",
    priceLabel: "Proposal after clinic validation",
    accommodationIncluded: true,
    coordinatorIncluded: true,
    clinicValidationRequired: true,
    status: "pilot",
    ctaHref: "/programs/neuro-rehabilitation-stay",
  },
  {
    slug: "post-stay-recovery",
    category: "Recovery Support",
    title: "Post-Stay Recovery Support",
    shortDescription:
      "Continued digital guidance and coordinator support after returning home from a health stay.",
    duration: "4–8 weeks (remote)",
    destination: "Remote — global",
    priceLabel: "Price on request",
    accommodationIncluded: false,
    coordinatorIncluded: true,
    clinicValidationRequired: false,
    status: "pilot",
    ctaHref: "/programs/post-stay-recovery-support",
  },
  {
    slug: "full-health-checkup",
    category: "Prevention / Check-up",
    title: "Full Health Check-up Stay",
    shortDescription:
      "A comprehensive health screening and check-up package with accommodation and coordination support.",
    duration: "2–4 days",
    destination: "Switzerland / Turkey",
    priceLabel: "Price on request — demo destination",
    accommodationIncluded: true,
    coordinatorIncluded: true,
    clinicValidationRequired: true,
    status: "available_demo",
    ctaHref: "/request",
  },
  {
    slug: "medical-wellness-recovery",
    category: "Medical Wellness",
    title: "Medical Wellness Recovery",
    shortDescription:
      "A wellness-focused recovery stay combining medical supervision with spa, nutrition, and relaxation.",
    duration: "5–7 days",
    destination: "Switzerland / Spain",
    priceLabel: "Price on request — demo destination",
    accommodationIncluded: true,
    coordinatorIncluded: true,
    clinicValidationRequired: true,
    status: "available_demo",
    ctaHref: "/request",
  },
  {
    slug: "dental-travel",
    category: "Dental",
    title: "Dental Travel Package",
    shortDescription:
      "Comprehensive dental care packages combined with travel and accommodation coordination. Coming in a future phase.",
    duration: "TBD",
    destination: "Turkey / Tunisia",
    priceLabel: "Proposal after validation",
    accommodationIncluded: true,
    coordinatorIncluded: true,
    clinicValidationRequired: true,
    status: "future_category",
    ctaHref: "/request",
  },
  {
    slug: "fertility-journey",
    category: "Fertility",
    title: "Fertility Journey",
    shortDescription:
      "Fertility and reproductive health packages with international coordination. Coming in a future phase.",
    duration: "TBD",
    destination: "Spain / UAE",
    priceLabel: "Proposal after validation",
    accommodationIncluded: true,
    coordinatorIncluded: true,
    clinicValidationRequired: true,
    status: "future_category",
    ctaHref: "/request",
  },
];

export function getPackageBySlug(slug: string): HealthStayPackage | undefined {
  return healthStayPackages.find((p) => p.slug === slug);
}

export function getPackagesByCategory(
  category: string
): HealthStayPackage[] {
  return healthStayPackages.filter((p) => p.category === category);
}

export function getAvailablePackages(): HealthStayPackage[] {
  return healthStayPackages.filter(
    (p) => p.status === "pilot" || p.status === "available_demo"
  );
}
