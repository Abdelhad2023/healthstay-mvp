import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBox from "@/components/DisclaimerBox";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Are you a clinic or rehabilitation centre? Join HealthStay's global platform and reach international patients seeking transparent, human-reviewed health programmes.",
};

const benefits = [
  {
    title: "International patient demand",
    description:
      "Access a curated audience of international patients and families actively seeking Swiss neuro-health programmes — with transparent expectations and pre-qualified requests.",
  },
  {
    title: "Package transparency",
    description:
      "List your programmes with clear inclusions, exclusions, and price visibility. Patients understand exactly what you offer before submitting a request.",
  },
  {
    title: "Better qualified requests",
    description:
      "Every request is reviewed by a human coordinator before reaching your team. You receive pre-screened, relevant enquiries — not random submissions.",
  },
  {
    title: "No false instant booking",
    description:
      "HealthStay does not allow instant medical bookings. Every request requires clinic validation, ensuring only suitable patients are confirmed.",
  },
  {
    title: "Human-reviewed request flow",
    description:
      "Our coordinator team handles the initial communication, scheduling, and logistics — so your clinical team can focus on patient care.",
  },
  {
    title: "Future partner dashboard",
    description:
      "A dedicated dashboard is planned for managing your profile, packages, requests, and patient communication in one place.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Partner with us"
            subtitle="Are you a clinic or rehabilitation centre? Help international patients discover your neuro-health programmes through a trusted, transparent platform."
          />

          <div className="mt-6">
            <DisclaimerBox variant="partnership" />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-gray-100 rounded-xl p-6"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <DisclaimerBox variant="prototype" />
          </div>

          <div className="mt-12">
            <CTASection
              title="Interested in a pilot?"
              subtitle="We are looking for pilot partners in Swiss neuro-health. Get in touch to discuss how we can work together."
              primaryCta={{ label: "Discuss a pilot", href: "/request" }}
              secondaryCta={{ label: "Contact us", href: "/about" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
