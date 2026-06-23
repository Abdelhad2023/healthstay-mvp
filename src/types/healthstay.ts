export interface Program {
  slug: string;
  title: string;
  category: "Prevention" | "Second Opinion" | "Rehabilitation" | "Follow-up";
  shortDescription: string;
  longDescription: string;
  idealFor: string[];
  duration: string;
  location: string;
  priceLabel: string;
  includes: string[];
  notIncluded?: string[];
  accommodationSupport: boolean;
  coordinatorSupport: boolean;
  postStaySupport: boolean;
  humanValidationRequired: boolean;
  ctaLabel: string;
}

export interface Center {
  slug: string;
  name: string;
  country: string;
  region: string;
  city: string;
  focusAreas: string[];
  languages: string[];
  accommodation: string;
  internationalSupport: string[];
  packageTypes: string[];
  verificationStatus: "prototype" | "verified" | "pending";
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  description: string;
  humanTouchpoint: boolean;
}

export interface TrustPrinciple {
  title: string;
  description: string;
}

export interface CompareRow {
  label: string;
  prevention: string;
  secondOpinion: string;
  rehabilitation: string;
}
