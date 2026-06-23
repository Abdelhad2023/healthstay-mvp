import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import HumanValidationBanner from "@/components/HumanValidationBanner";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getProgramBySlug } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Neuro Second Opinion Journey",
  description:
    "A remote or on-site expert review of existing medical information by a Swiss neuro-specialist team.",
};

export default async function NeuroSecondOpinionPage() {
  const program = await getProgramBySlug("neuro-second-opinion");

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
              <h2 className="text-lg font-semibold text-gray-900">Remote-first or travel option</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                The second opinion service can be conducted entirely remotely: medical documents are
                securely reviewed, and the consultation takes place via video. For those who prefer
                an on-site experience, a short 1–2 day stay in Switzerland can be arranged with
                accommodation and coordination included.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Documents may be required later</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                After your initial request, the selected clinic may ask for relevant medical
                documents to conduct the specialist review. No documents are uploaded or stored on
                this platform at the request stage.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Human review</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Every second opinion request is reviewed by a human coordinator first. If the
                programme appears suitable, it is forwarded to the clinic&apos;s specialist team for
                expert review. The outcome is a structured medical summary and orientation — not a
                guaranteed treatment plan or cure.
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
                A second opinion provides an expert perspective on existing medical information. It
                does not replace your primary medical team, guarantee a specific treatment, or
                predict outcomes. The final decision about your care remains with you and your
                primary healthcare provider.
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
