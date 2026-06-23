import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Provider Value — HealthStay Swiss Neuro-Health Pilot",
  description:
    "How a Swiss neuro-health provider could use a structured international patient journey pilot.",
  robots: { index: false, follow: false },
};

const valuePillars = [
  {
    title: "Better-qualified international inquiries",
    description: "Coordinator pre-screens all requests before they reach the clinical team. Providers receive relevant, context-rich inquiries — not random submissions.",
  },
  {
    title: "Clearer programme understanding",
    description: "Patients explore structured programme pages with transparent inclusions and pricing. Expectations are aligned before the provider invests time.",
  },
  {
    title: "Transparent package communication",
    description: "Each programme clearly states what is included, what is not, and what requires human validation. Reduces repetitive explanation work for provider staff.",
  },
  {
    title: "Reduced repetitive explanation work",
    description: "The platform handles initial orientation, programme comparison, logistics questions, and accommodation information before the provider is involved.",
  },
  {
    title: "Stronger premium digital experience",
    description: "A calm, elegant, high-trust digital journey that reflects the quality of Swiss neuro-health care. Designed for international patients and their families.",
  },
  {
    title: "Reusable journey model",
    description: "The programme structure, request workflow, and follow-up concept can be adapted for future health programmes beyond the initial pilot scope.",
  },
];

const providerControls = [
  "Medical suitability assessment",
  "Final proposal approval",
  "Clinical validation of each request",
  "Pricing confirmation",
  "Medical documentation requests",
  "Patient acceptance decision",
  "Compliance and regulatory requirements",
];

const healthstayDoesNotControl = [
  "Medical decisions or diagnosis",
  "Treatment planning or prescription",
  "Clinical outcomes or predictions",
  "Emergency care or urgent response",
  "Official pricing without provider validation",
  "Provider-internal compliance",
];

const pilotIndicators = [
  "Inquiry quality score (context completeness)",
  "Completion rate of the digital request flow",
  "Clarity of patient expectations at first contact",
  "Estimated time saved in first-response communication",
  "Number of suitable pilot-stage inquiries received",
  "Provider feedback on journey structure",
  "Patient satisfaction with information clarity",
];

export default function PilotValuePage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full">
            Provider Value
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
            Why a Swiss neuro-health provider would consider a pilot
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            International patient inquiries are often complex and time-consuming. HealthStay structures the journey before the provider invests time, resulting in better-qualified requests and clearer patient expectations.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The provider problem"
            subtitle="International patient inquiries today often lack structure."
          />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Unclear expectations", "Incomplete context", "Language and travel questions", "Accommodation needs", "Family coordination", "Post-stay continuity", "Back-and-forth communication"].map((item) => (
              <div key={item} className="bg-white border border-gray-100 rounded-lg px-4 py-3 text-sm text-gray-600 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The HealthStay pilot solution"
            subtitle="HealthStay structures the journey before the provider invests time."
          />
          <div className="mt-8 space-y-4">
            {[
              { title: "Programme education", text: "Patients explore structured programme pages before submitting a request." },
              { title: "Non-sensitive orientation", text: "Basic questions capture goals and preferences — no medical data required." },
              { title: "Package clarity", text: "Transparent inclusions and pricing set clear expectations from the start." },
              { title: "Expectation setting", text: "The platform explains what requires human validation and clinic approval." },
              { title: "Human-reviewed inquiry", text: "A coordinator reviews the request before it reaches the provider." },
              { title: "Provider validation step", text: "The provider retains full control over suitability assessment and approval." },
              { title: "Post-stay continuity concept", text: "Digital follow-up framework supports patients after returning home." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white border border-gray-100 rounded-lg p-4">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-semibold">→</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Value pillars" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What the provider controls"
            subtitle="The pilot is designed so the provider retains full authority over clinical and operational decisions."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {providerControls.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                <span className="flex-shrink-0 w-5 h-5 bg-green-50 border border-green-200 rounded-full flex items-center justify-center text-green-700 text-xs font-semibold">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What HealthStay does not control"
            subtitle="Clear boundaries protect the provider's autonomy and the patient's safety."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {healthstayDoesNotControl.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white border border-amber-200 rounded-lg px-4 py-3">
                <span className="flex-shrink-0 text-amber-600 font-semibold">—</span>
                <span className="text-sm text-amber-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pilot success indicators"
            subtitle="Operational KPIs for evaluating the pilot — not medical outcomes."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pilotIndicators.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3">
                <span className="flex-shrink-0 w-2 h-2 bg-gray-900 rounded-full" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Discuss a six-month pilot
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-lg mx-auto">
              Interested in exploring how a structured patient journey pilot could benefit your organisation?
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                Discuss a six-month pilot
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <DisclaimerBox variant="pilot" />
          </div>
        </div>
      </section>
    </>
  );
}
