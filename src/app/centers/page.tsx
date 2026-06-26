import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CenterCard from "@/components/CenterCard";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getCenters } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Hospitals & Centers",
  description:
    "Discover health centers and clinics offering prevention, second opinion, and rehabilitation programmes for international patients.",
};

export default async function CentersPage() {
  const centers = await getCenters();

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Hospitals & centers"
            subtitle="Discover health centers and clinics that offer curated programmes for international guests. Each profile shows focus areas, languages, and available package types."
          />
          <div className="mt-4 bg-teal-light border border-teal/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-teal-dark uppercase tracking-wider">
              Concept demonstration
            </p>
            <p className="mt-1 text-xs text-teal-dark/80 leading-relaxed">
              Prototype profiles for concept demonstration. Final partner data
              requires direct validation by each establishment. Current centers
              reflect the Swiss neuro-health pilot scope.
            </p>
          </div>
          <div className="mt-6">
            <DisclaimerBox variant="partnership" />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {centers.map((center) => (
              <CenterCard key={center.slug} center={center} />
            ))}
          </div>
          <div className="mt-8">
            <DisclaimerBox variant="prototype" />
          </div>
        </div>
      </section>
    </>
  );
}
