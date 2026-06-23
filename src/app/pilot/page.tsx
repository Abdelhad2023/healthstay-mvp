import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Swiss Neuro-Health Journey Pilot — HealthStay",
  description:
    "Explore a premium pilot concept for AI-assisted Swiss neuro-health, prevention, second opinion, and rehabilitation journeys with transparent packages and human validation.",
};

const pilotFlow = [
  {
    step: 1,
    title: "Explore programmes",
    description: "Patient browses Swiss neuro-health programmes with transparent inclusions and pricing.",
  },
  {
    step: 2,
    title: "Orientation questions",
    description: "Patient answers non-sensitive questions about goals, preferences, and availability.",
  },
  {
    step: 3,
    title: "Suggested options",
    description: "Platform suggests potentially suitable programmes based on preferences.",
  },
  {
    step: 4,
    title: "Coordinator review",
    description: "Human coordinator reviews the request and refines the options.",
  },
  {
    step: 5,
    title: "Clinic validation",
    description: "Selected clinic validates suitability and availability.",
  },
  {
    step: 6,
    title: "Transparent proposal",
    description: "Patient receives a clear proposal with confirmed package, pricing, and logistics.",
  },
  {
    step: 7,
    title: "Stay preparation",
    description: "Coordinator assists with travel, accommodation, visa letters, and pre-arrival questions.",
  },
  {
    step: 8,
    title: "Post-stay follow-up",
    description: "Digital follow-up, progress tracking, and continued coordinator support after returning home.",
  },
];

const pilotIncludes = [
  {
    title: "Premium programme pages",
    description: "Professionally designed programme detail pages with transparent package structure.",
  },
  {
    title: "Human-reviewed request flow",
    description: "Every request is reviewed by a coordinator before reaching the clinic.",
  },
  {
    title: "International patient journey",
    description: "Structured 10-step journey from discovery to post-stay follow-up.",
  },
  {
    title: "Care Matching Preview",
    description: "AI-assisted matching demonstration showing programme fit based on preferences.",
  },
  {
    title: "Trust and safety framework",
    description: "Clear principles on AI boundaries, human validation, and data privacy.",
  },
  {
    title: "Partner profile concept",
    description: "Clinic profiles with focus areas, languages, and available packages.",
  },
  {
    title: "Future dashboard concept",
    description: "Planned partner dashboard for managing profiles, packages, and requests.",
  },
];

const providerBenefits = [
  {
    title: "Better-qualified requests",
    description: "Coordinator pre-screens all enquiries before they reach your clinical team.",
  },
  {
    title: "Clearer patient expectations",
    description: "Transparent packages help patients understand what is included before submitting a request.",
  },
  {
    title: "Premium digital journey",
    description: "Professional, calm, high-trust digital experience aligned with Swiss quality standards.",
  },
  {
    title: "Reduced back-and-forth",
    description: "Structured request format captures key information upfront, minimising administrative communication.",
  },
  {
    title: "Structured pre-arrival process",
    description: "Coordinator handles logistics, travel, and accommodation planning before the patient arrives.",
  },
  {
    title: "Improved post-stay continuity",
    description: "Digital follow-up framework supports patients after returning home, reducing readmission questions.",
  },
  {
    title: "Reusable model",
    description: "The programme and journey structure can be adapted for future health programmes.",
  },
];

const pilotTimeline = [
  { month: "Month 1", title: "Discovery", description: "Public-information prototype review and feedback" },
  { month: "Month 2", title: "Refinement", description: "Journey refinement based on partner input" },
  { month: "Month 3", title: "Structure", description: "Package structure and request workflow finalisation" },
  { month: "Month 4", title: "Trust", description: "Coordinator workflow and trust framework" },
  { month: "Month 5", title: "Controlled pilot", description: "Controlled pilot with selected patient inquiries" },
  { month: "Month 6", title: "Evaluation", description: "Evaluation, improvements, and scale decision" },
];

export default function PilotPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full">
            Swiss Neuro-Health Pilot Concept
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Swiss Neuro-Health Journey Pilot
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            An AI-assisted international patient journey concept for premium Swiss neuro-health, prevention, second opinion, and rehabilitation stays.
          </p>
          <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
            HealthStay is designed to help international patients understand available programmes, request transparent proposals, and receive human-guided support before, during, and after a Swiss health stay.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Discuss a pilot
            </Link>
            <Link
              href="/journey"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Explore the patient journey
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The opportunity"
            subtitle="International patients seeking neuro-health programmes abroad face a fragmented, opaque process. HealthStay turns this into a structured, transparent, human-reviewed journey."
          />
          <div className="mt-8 space-y-4">
            <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                International patients need clarity, trust, language support, and coordination when considering a health journey abroad. Existing hospital websites are often informative but not designed as journey-oriented platforms.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                Premium Swiss providers can benefit from better-qualified international requests, reduced back-and-forth communication, and a digital journey that reflects their quality of care.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                HealthStay turns complex health travel into a structured, human-reviewed journey — from discovery and comparison to clinic validation and post-stay follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Switzerland"
            subtitle="Switzerland offers a unique combination of medical excellence, premium hospitality, and a restorative environment."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">High trust</h3>
              <p className="mt-1 text-xs text-gray-600">Switzerland is consistently ranked among the most trusted healthcare systems globally.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Premium care reputation</h3>
              <p className="mt-1 text-xs text-gray-600">Swiss medical institutions are known for quality, precision, and patient-centred care.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">International patient appeal</h3>
              <p className="mt-1 text-xs text-gray-600">Multi-lingual staff, international patient departments, and experience with diverse cultural needs.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Recovery environment</h3>
              <p className="mt-1 text-xs text-gray-600">Lake and mountain settings provide a calm, restorative backdrop for prevention and rehabilitation.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Multilingual potential</h3>
              <p className="mt-1 text-xs text-gray-600">English, German, French, Italian, and international language support widely available.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Hospitality & medical quality</h3>
              <p className="mt-1 text-xs text-gray-600">Switzerland uniquely combines premium hospitality infrastructure with world-class medical expertise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why neuro-health first"
            subtitle="Neuro-health is an ideal starting point for a pilot — it involves complex journeys where families need guidance and transparency."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Complex journeys</h3>
              <p className="mt-1 text-xs text-gray-600">Neuroprevention, second opinion, and rehabilitation involve multiple steps, stakeholders, and decisions.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Families need guidance</h3>
              <p className="mt-1 text-xs text-gray-600">Families helping a relative need clear information, coordination, and human support throughout the process.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Accommodation matters</h3>
              <p className="mt-1 text-xs text-gray-600">Patients and accompanying persons need coordinated accommodation, meals, and transport — not just medical care.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Human validation is essential</h3>
              <p className="mt-1 text-xs text-gray-600">Unlike a hotel booking, a neuro-health stay requires clinical suitability assessment before confirmation.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Post-stay continuity</h3>
              <p className="mt-1 text-xs text-gray-600">Recovery continues after the stay. A structured follow-up framework helps patients transition home with confidence.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900">Premium and differentiated</h3>
              <p className="mt-1 text-xs text-gray-600">Neuro-health is a premium niche where transparency, coordination, and trust create real value for patients and providers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pilot concept flow"
            subtitle="The end-to-end patient journey from discovery to post-stay follow-up."
          />
          <div className="mt-8 space-y-4">
            {pilotFlow.map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-white border border-gray-100 rounded-lg p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What the pilot includes"
            subtitle="The pilot concept covers the full digital patient journey infrastructure."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pilotIncludes.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Care Matching Preview"
            subtitle="An example of how the platform could help match patient preferences to potentially suitable programmes. This is a demonstration, not medical advice."
          />
          <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Example user need</p>
              <p className="mt-2 text-sm text-gray-900 font-medium">
                &ldquo;I am looking for a premium Swiss brain health prevention stay with accommodation and post-stay follow-up.&rdquo;
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Brain Health Prevention Stay</p>
                  <p className="text-xs text-gray-500">Prevention · 3–5 days · Lake Lucerne</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-full">
                  High fit
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Neuro Second Opinion Journey</p>
                  <p className="text-xs text-gray-500">Second Opinion · Remote or 1–2 days · Zurich</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                  Medium fit
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Post-Stay Recovery Support</p>
                  <p className="text-xs text-gray-500">Follow-up · 4–8 weeks remote</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                  Medium fit
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Matching criteria</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  "Programme focus",
                  "Switzerland destination fit",
                  "Accommodation support",
                  "Coordinator support",
                  "Language support",
                  "Post-stay continuity",
                  "Human validation required",
                ].map((criterion) => (
                  <span
                    key={criterion}
                    className="inline-flex items-center px-2.5 py-1 text-xs text-gray-600 bg-gray-50 border border-gray-100 rounded-full"
                  >
                    {criterion}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-amber-50 border border-amber-100 rounded-lg p-3">
              <p className="text-xs text-amber-700 leading-relaxed">
                This is an example matching preview for demonstration purposes only. It does not constitute medical advice, diagnosis, treatment recommendation, or outcome prediction. All matches are reviewed by a human coordinator before any proposal is shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What the pilot does not do"
            subtitle="Clear boundaries are essential for a responsible health platform."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "No AI diagnosis or medical advice",
              "No medical decision automation",
              "No treatment outcome prediction",
              "No instant medical booking",
              "No sensitive medical data storage in MVP",
              "No false partnership claim",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white border border-amber-200 rounded-lg px-4 py-3">
                <span className="text-amber-600 font-semibold">—</span>
                <span className="text-sm text-amber-900">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <DisclaimerBox variant="pilot" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Value for a Swiss provider"
            subtitle="Why a premium Swiss neuro-health organisation would consider this pilot."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {providerBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Suggested six-month pilot structure"
            subtitle="A concept timeline for discussion. This is not a promised official engagement."
          />
          <div className="mt-8 space-y-4">
            {pilotTimeline.map((item) => (
              <div key={item.month} className="flex items-start gap-4 bg-white border border-gray-100 rounded-lg p-4">
                <div className="flex-shrink-0 w-20">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.month}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400 text-center">
            This is a concept timeline for discussion purposes only. It does not represent a commitment or official plan.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Discuss a Swiss neuro-health pilot
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-lg mx-auto">
              Interested in exploring this pilot concept for your organisation? Get in touch to start the conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Open contact page
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Explore the patient journey
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <DisclaimerBox variant="pilot" />
          <DisclaimerBox variant="medical" />
        </div>
      </section>
    </>
  );
}
