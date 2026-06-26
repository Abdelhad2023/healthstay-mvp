import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import JourneyTimeline from "@/components/JourneyTimeline";
import CTASection from "@/components/CTASection";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getJourneySteps } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "How It Works — The Health Stay Journey",
  description:
    "From discovery to post-stay follow-up. Every step of your health journey includes human support and clinic validation.",
};

export default async function JourneyPage() {
  const journeySteps = await getJourneySteps();

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How it works"
            subtitle="Your international health stay journey, from exploring programmes to post-stay follow-up. Every sensitive step includes human review and clinic validation."
          />

          <div className="mt-12">
            <JourneyTimeline steps={journeySteps} />
          </div>

          <div className="mt-10 space-y-4">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-sm font-semibold text-gray-900">AI-assisted, human-reviewed</h3>
              <p className="mt-1 text-sm text-gray-600">
                Our AI-assisted Care Matching tool helps suggest potentially suitable programmes
                based on your preferences. Every suggestion is reviewed by a human coordinator
                before being shared with you. We do not use AI for diagnosis, treatment
                recommendations, or medical predictions.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-sm font-semibold text-gray-900">Clinic validation before confirmation</h3>
              <p className="mt-1 text-sm text-gray-600">
                No programme is confirmed until the selected clinic or centre validates its
                suitability for your specific situation. This is not an instant booking platform.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-sm font-semibold text-gray-900">Support throughout the journey</h3>
              <p className="mt-1 text-sm text-gray-600">
                Your dedicated coordinator is available before, during, and after your stay —
                helping with logistics, questions, and post-stay follow-up.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <DisclaimerBox variant="medical" />
          </div>

          <div className="mt-12">
            <CTASection
              title="Begin your journey"
              subtitle="Submit a non-binding request and let our team guide you through the process."
              primaryCta={{ label: "Request a personal proposal", href: "/request" }}
              secondaryCta={{ label: "Explore programmes", href: "/programs" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
