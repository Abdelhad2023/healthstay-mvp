import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getPrograms } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Health Stays & Programmes",
  description:
    "Browse health stay programmes: prevention, second opinion, rehabilitation, and post-stay support. Transparent packages with human validation.",
};

const categories = ["All", "Prevention", "Second Opinion", "Rehabilitation", "Follow-up"] as const;

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Health stays & programmes"
            subtitle="Browse our curated selection of health stays. Each programme is transparent about what is included, what needs validation, and what to expect."
          />
          <div className="mt-10 space-y-12">
            {categories.map((category) => {
              const filtered =
                category === "All"
                  ? programs
                  : programs.filter((p) => p.category === category);
              if (filtered.length === 0) return null;
              return (
                <div key={category}>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    {category === "All" ? "All programmes" : category === "Follow-up" ? "Recovery Support" : category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((program) => (
                      <ProgramCard key={program.slug} program={program} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <DisclaimerBox variant="prototype" />
          </div>
        </div>
      </section>
    </>
  );
}
