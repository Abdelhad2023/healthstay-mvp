import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import RequestForm from "@/components/RequestForm";
import HumanValidationBanner from "@/components/HumanValidationBanner";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Request a Personal Proposal",
  description:
    "Submit a non-binding request for a Swiss neuro-health programme. A human coordinator will review your preferences before contacting any clinic.",
};

export default function RequestPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Request a personal proposal"
            subtitle="Tell us about your preferences and goals. No medical documents needed. A human coordinator will review your request and suggest suitable options."
          />

          <div className="mt-8">
            <HumanValidationBanner />
          </div>

          <div className="mt-8">
            <RequestForm />
          </div>

          <div className="mt-10 space-y-4">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-900">What happens after you submit?</h3>
              <ol className="mt-2 space-y-2 list-decimal list-inside text-sm text-gray-600">
                <li>A human coordinator reviews your request.</li>
                <li>Potentially suitable programmes are identified.</li>
                <li>The selected clinic validates your suitability.</li>
                <li>You receive a transparent, personalised proposal.</li>
              </ol>
            </div>
            <DisclaimerBox variant="medical" />
            <DisclaimerBox variant="prototype" />
          </div>
        </div>
      </section>
    </>
  );
}
