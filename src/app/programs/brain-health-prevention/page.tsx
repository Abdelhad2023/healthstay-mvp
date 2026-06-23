import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import HumanValidationBanner from "@/components/HumanValidationBanner";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getProgramBySlug } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Brain Health Prevention Stay",
  description:
    "A premium multi-day brain health assessment and lifestyle optimisation programme in a Swiss lakefront setting.",
};

export default async function BrainHealthPreventionPage() {
  const program = await getProgramBySlug("brain-health-prevention");

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

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Stay experience</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Set against the backdrop of Lake Lucerne, the programme combines advanced cognitive
                screening with restorative activities. Mornings are dedicated to assessments and
                consultations; afternoons include guided nature walks, mindfulness sessions, and
                personalised lifestyle coaching. Evenings are free for rest or exploration of the
                surrounding Swiss landscape.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Accommodation and coordination</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Guests stay in premium accommodation with lake views. A dedicated English-speaking
                coordinator handles airport transfers, check-in, scheduling, and any questions during
                the stay. Accompanying persons are welcome.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Example journey timeline</h2>
              <div className="mt-3 space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Day 1 — Arrival</p>
                  <p className="text-sm text-gray-600">Airport transfer, check-in, welcome orientation.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Day 2 — Assessment</p>
                  <p className="text-sm text-gray-600">Cognitive baseline assessment, medical consultation.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Day 3 — Planning</p>
                  <p className="text-sm text-gray-600">Lifestyle and nutrition planning, wellness activities.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Day 4 — Integration</p>
                  <p className="text-sm text-gray-600">Final consultations, personalised prevention plan, farewell.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Post-stay</p>
                  <p className="text-sm text-gray-600">Digital report, follow-up call, home plan.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                Important
              </p>
              <p className="mt-1 text-xs text-amber-700 leading-relaxed">
                This programme is for prevention and wellness purposes only. It does not diagnose,
                treat, or predict any medical condition. All requests are reviewed by a human
                coordinator and validated by the clinic before confirmation.
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
