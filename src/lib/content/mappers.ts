import type { Program, Center, JourneyStep, TrustPrinciple, CompareRow } from "@/types/healthstay";

export interface ProgramRow {
  slug: string;
  title: string;
  category_slug: string;
  category_name: string;
  short_description: string;
  long_description: string;
  duration_label: string;
  location_label: string;
  price_label: string;
  ideal_for: string[];
  includes: string[];
  not_included: string[];
  accommodation_support: boolean;
  coordinator_support: boolean;
  post_stay_support: boolean;
  human_validation_required: boolean;
  cta_label: string;
}

const categoryMap: Record<string, Program["category"]> = {
  prevention: "Prevention",
  "second-opinion": "Second Opinion",
  rehabilitation: "Rehabilitation",
  "follow-up": "Follow-up",
};

export function mapProgramRow(row: ProgramRow): Program {
  return {
    slug: row.slug,
    title: row.title,
    category: categoryMap[row.category_slug] || "Prevention",
    shortDescription: row.short_description,
    longDescription: row.long_description,
    idealFor: row.ideal_for,
    duration: row.duration_label,
    location: row.location_label,
    priceLabel: row.price_label,
    includes: row.includes,
    notIncluded: row.not_included.length > 0 ? row.not_included : undefined,
    accommodationSupport: row.accommodation_support,
    coordinatorSupport: row.coordinator_support,
    postStaySupport: row.post_stay_support,
    humanValidationRequired: row.human_validation_required,
    ctaLabel: row.cta_label,
  };
}

export function mapCenterRow(row: Record<string, unknown>): Center {
  return {
    slug: row.slug as string,
    name: row.name as string,
    country: row.country as string,
    region: row.region as string,
    city: row.city as string,
    focusAreas: row.focus_areas as string[],
    languages: row.languages as string[],
    accommodation: row.accommodation as string,
    internationalSupport: row.international_support as string[],
    packageTypes: row.package_types as string[],
    verificationStatus: (row.verification_status as Center["verificationStatus"]) || "prototype",
  };
}

export function mapJourneyStepRow(row: Record<string, unknown>): JourneyStep {
  return {
    stepNumber: row.step_number as number,
    title: row.title as string,
    description: row.description as string,
    humanTouchpoint: row.human_touchpoint as boolean,
  };
}

export function mapTrustPrincipleRow(row: Record<string, unknown>): TrustPrinciple {
  return {
    title: row.title as string,
    description: row.description as string,
  };
}

export function mapCompareRowRow(row: Record<string, unknown>): CompareRow {
  return {
    label: row.label as string,
    prevention: row.prevention_value as string,
    secondOpinion: row.second_opinion_value as string,
    rehabilitation: row.rehabilitation_value as string,
  };
}
