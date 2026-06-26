import { Destination } from "@/types/healthstay";

export const destinations: Destination[] = [
  {
    slug: "switzerland",
    country: "Switzerland",
    subtitle: "Active pilot destination — world-class neuro-health",
    description:
      "Switzerland is the first pilot destination for HealthStay, offering world-class neuro-health, prevention, and rehabilitation programmes in a premium environment with lake and mountain settings.",
    status: "pilot",
    packageExamples: [
      "Brain Health Prevention Stay",
      "Neuro Second Opinion Journey",
      "Neuro-Rehabilitation Stay",
    ],
    visualTheme: "swiss-alps",
  },
  {
    slug: "turkey",
    country: "Turkey",
    subtitle: "Coming soon — future expansion",
    description:
      "Turkey offers advanced medical facilities and internationally accredited hospitals. A future expansion destination being evaluated for health stays and medical wellness packages.",
    status: "coming_soon",
    packageExamples: [
      "Full Health Check-up Stay",
      "Medical Wellness Recovery",
      "Dental Travel Package",
    ],
    visualTheme: "istanbul-modern",
  },
  {
    slug: "germany",
    country: "Germany",
    subtitle: "Coming soon — future expansion",
    description:
      "Germany is known for its medical excellence, innovative treatments, and high standards in rehabilitation and specialist care. A future expansion destination being evaluated.",
    status: "coming_soon",
    packageExamples: [
      "Neuro Second Opinion Journey",
      "Full Health Check-up Stay",
      "Rehabilitation Stay",
    ],
    visualTheme: "berlin-modern",
  },
  {
    slug: "uae",
    country: "UAE",
    subtitle: "Coming soon — future expansion",
    description:
      "The UAE combines cutting-edge medical infrastructure with luxury hospitality. A future expansion destination being evaluated.",
    status: "coming_soon",
    packageExamples: [
      "Medical Wellness Recovery",
      "Full Health Check-up Stay",
      "Prevention Stay",
    ],
    visualTheme: "dubai-modern",
  },
  {
    slug: "tunisia",
    country: "Tunisia",
    subtitle: "Coming soon — future expansion",
    description:
      "Tunisia offers accessible medical travel options with growing expertise in rehabilitation and wellness. A future expansion destination.",
    status: "coming_soon",
    packageExamples: [
      "Medical Wellness Recovery",
      "Rehabilitation Support",
    ],
    visualTheme: "mediterranean",
  },
  {
    slug: "morocco",
    country: "Morocco",
    subtitle: "Coming soon — future expansion",
    description:
      "Morocco is positioned for regional medical travel with family-friendly options and growing healthcare infrastructure. A future expansion destination.",
    status: "coming_soon",
    packageExamples: [
      "Medical Wellness Recovery",
      "Post-Stay Recovery Support",
    ],
    visualTheme: "marrakech",
  },
  {
    slug: "france",
    country: "France",
    subtitle: "Coming soon — future expansion",
    description:
      "France offers specialist medical care with proximity to Switzerland, making it a convenient option for coordinated health journeys. A future expansion destination being evaluated.",
    status: "coming_soon",
    packageExamples: [
      "Second Opinion Journey",
      "Prevention Stay",
      "Medical Wellness",
    ],
    visualTheme: "paris-elegance",
  },
  {
    slug: "spain",
    country: "Spain",
    subtitle: "Coming soon — future expansion",
    description:
      "Spain combines a favourable climate with excellent healthcare for recovery and medical wellness stays. A future expansion destination being evaluated.",
    status: "coming_soon",
    packageExamples: [
      "Medical Wellness Recovery",
      "Rehabilitation Support",
      "Post-Stay Recovery",
    ],
    visualTheme: "mediterranean-coast",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByStatus(
  status: Destination["status"]
): Destination[] {
  return destinations.filter((d) => d.status === status);
}
