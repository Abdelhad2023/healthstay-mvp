import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import HumanValidationBanner from "@/components/HumanValidationBanner";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getProgramBySlug } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Neuro-Rehabilitation Stay",
  description:
    "A structured, multi-week neuro-rehabilitation programme with coordinated accommodation, therapy, and family support in Switzerland.",
};

export default async function NeuroRehabilitationPage() {
  const program = await getProgramBySlug("neuro-rehabilitation-stay");

  if (!program) return null;

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={program.title}
            subtitle={program.shortDescription}
          />

          <div className="mt-8 space-y-8">
            <HumanValidationBanner />

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {program.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Who it is for</h2>
              <ul className="mt-3 space-y-2">
                {program.idealFor.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Typical support areas</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Mobility</p>
                  <p className="text-xs text-gray-600 mt-1">Physiotherapy, gait training, balance exercises.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Speech</p>
                  <p className="text-xs text-gray-600 mt-1">Speech therapy, communication strategies, language exercises.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Cognition</p>
                  <p className="text-xs text-gray-600 mt-1">Memory training, executive function exercises, problem-solving.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Family support</p>
                  <p className="text-xs text-gray-600 mt-1">Family coaching, transition planning, psychological support.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Stay and accommodation</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Patients stay in a private room within the centre or at a partner accommodation
                nearby. Accompanying family members can be accommodated as well. Daily meals,
                transport, and a dedicated coordinator are included throughout the programme.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Transition back home</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Before departure, the team prepares a structured transition plan including home
                exercise guidance, local care recommendations, and a summary report for your
                primary healthcare provider.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Online follow-up concept</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                After returning home, patients receive up to four weeks of digital follow-up,
                including video check-ins, progress tracking, and continued access to their
                coordinator. This is not a replacement for local medical follow-up.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">What may be included</h2>
              <ul className="mt-3 space-y-2">
                {program.includes.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {program.notIncluded && (
                <>
                  <h3 className="mt-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Not included
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {program.notIncluded.map((item) => (
                      <li key={item} className="text-sm text-gray-500 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                Important
              </p>
              <p className="mt-1 text-xs text-amber-700 leading-relaxed">
                This programme requires a clinical suitability assessment before confirmation.
                The rehabilitation team must validate that the programme is appropriate for your
                specific condition and stage of recovery. No treatment outcomes are guaranteed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {program.ctaLabel}
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to programmes
              </Link>
            </div>

            <DisclaimerBox variant="medical" />
          </div>
        </div>
      </section>
    </>
  );
}
