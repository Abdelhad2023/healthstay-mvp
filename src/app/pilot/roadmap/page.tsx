import { Metadata } from "next";
import Link from "next/link";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Six-Month Pilot Roadmap — HealthStay",
  description:
    "A concept roadmap for a controlled Swiss neuro-health patient journey pilot.",
  robots: { index: false, follow: false },
};

const months = [
  {
    month: "Month 1",
    title: "Discovery and alignment",
    deliverables: [
      "Validate provider goals for the pilot",
      "Map current international inquiry journey",
      "Identify target programmes for the pilot",
      "Define safety boundaries and compliance scope",
    ],
  },
  {
    month: "Month 2",
    title: "Programme and package structuring",
    deliverables: [
      "Structure programme pages for selected services",
      "Define what can be shown publicly in prototype",
      "Define request-form questions (non-sensitive)",
      "Define human validation process for inquiries",
    ],
  },
  {
    month: "Month 3",
    title: "Prototype refinement",
    deliverables: [
      "Adapt journey pages to provider context",
      "Improve package communication and clarity",
      "Refine request flow based on provider feedback",
      "Test with internal provider stakeholders",
    ],
  },
  {
    month: "Month 4",
    title: "Controlled inquiry workflow",
    deliverables: [
      "Define coordinator process and response templates",
      "Define provider validation and approval process",
      "Define escalation boundaries for complex cases",
      "Establish communication protocols",
    ],
  },
  {
    month: "Month 5",
    title: "Limited pilot simulation or soft launch",
    deliverables: [
      "Use selected real inquiries or simulated journeys",
      "Collect structured provider feedback",
      "Measure operational clarity and efficiency",
      "Improve flow based on initial findings",
    ],
  },
  {
    month: "Month 6",
    title: "Evaluation and scale decision",
    deliverables: [
      "Review pilot value against success indicators",
      "Decide whether to continue or scale",
      "Define compliance and regulatory requirements",
      "Plan future dashboard or integration needs",
    ],
  },
];

export default function PilotRoadmapPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full">
            Pilot Roadmap
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
            Six-month pilot roadmap
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A concept timeline for a controlled Swiss neuro-health patient journey pilot. This is a proposal for discussion — not a committed plan.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-10">
              {months.map((item) => (
                <div key={item.month} className="relative flex gap-6 sm:gap-8">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">{item.month.replace("Month ", "M")}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {item.deliverables.map((d) => (
                        <li key={d} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-100 rounded-lg p-4">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Important</p>
            <p className="mt-1 text-xs text-amber-700 leading-relaxed">
              This roadmap is a concept proposal only. Real timelines, responsibilities, compliance requirements, and scope must be validated with the provider. This is not a commitment or official plan.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                Ready to discuss the roadmap?
              </h2>
              <p className="mt-3 text-base text-gray-600 max-w-lg mx-auto">
                Every pilot is different. Let&apos;s discuss what a realistic timeline looks like for your organisation.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                  Discuss a pilot
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
