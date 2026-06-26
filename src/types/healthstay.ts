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

export type DestinationStatus = "pilot" | "demo" | "coming_soon";

export interface Destination {
  slug: string;
  country: string;
  subtitle: string;
  description: string;
  status: DestinationStatus;
  packageExamples: string[];
  visualTheme: string;
}

export type PackageStatus = "available_demo" | "future_category" | "pilot";

export interface HealthStayPackage {
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  duration: string;
  destination: string;
  priceLabel: string;
  accommodationIncluded: boolean;
  coordinatorIncluded: boolean;
  clinicValidationRequired: boolean;
  status: PackageStatus;
  ctaHref: string;
}

export interface NeedOption {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  icon: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}
