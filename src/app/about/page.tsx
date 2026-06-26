import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import DisclaimerBox from "@/components/DisclaimerBox";
import StatCard from "@/components/StatCard";

export const metadata: Metadata = {
  title: "About HealthStay",
  description:
    "HealthStay is a trusted marketplace and concierge platform for international health stays. Global vision. Swiss pilot first.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About HealthStay"
            subtitle="A trusted marketplace and concierge platform for international health stays. Global vision. Swiss pilot first."
          />

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Our vision</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                HealthStay is a global platform that helps people find and request trusted health
                stays worldwide — including hospitals, clinics, rehabilitation centers, prevention
                centers, and medical wellness providers that offer health stay packages with
                accommodation, coordination, human review, and clinic validation.
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                We start with a Swiss neuro-health pilot to prove the concept, then expand to more
                hospitals, specialties, and countries. Switzerland offers world-class expertise in
                brain health, prevention, and rehabilitation as our first proof of concept.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-gray-100">
              <StatCard value="4" label="Programmes" />
              <StatCard value="4" label="Partner centres" />
              <StatCard value="10" label="Journey steps" />
              <StatCard value="9" label="Trust principles" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Global vision. Swiss pilot first.</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                HealthStay is designed as a global platform. We start with a Swiss neuro-health
                pilot because Switzerland offers world-class medical expertise, premium
                infrastructure, and an ideal environment for prevention, second opinions, and
                rehabilitation. The platform is built to expand to more countries, hospitals,
                specialties, and package types.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Our approach</h2>
              <div className="mt-3 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">AI assists, humans decide.</strong> We use AI
                    for matching and information, not diagnosis or predictions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Transparency first.</strong> Every package
                    shows what is included, what is not, and what requires validation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Clinic validation required.</strong> No
                    programme is confirmed without the clinic reviewing your specific situation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">End-to-end support.</strong> From first
                    request to post-stay follow-up, a human coordinator is by your side.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">What makes us different</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                We are not a hospital directory, not an instant booking engine, not an AI doctor.
                We are a curated, human-centred platform that connects international patients with
                health programmes worldwide through transparent packages and clinic-validated
                proposals.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <DisclaimerBox variant="medical" />
            <DisclaimerBox variant="prototype" />
          </div>

          <div className="mt-12">
            <CTASection
              title="Ready to start your journey?"
              subtitle="Submit a non-binding request and discover how transparent health travel can be."
              primaryCta={{ label: "Request a personal proposal", href: "/request" }}
              secondaryCta={{ label: "Explore programmes", href: "/programs" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
