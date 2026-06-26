import { Metadata } from "next";
import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import { healthStayPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Health Stay Packages",
  description:
    "Compare prevention, second opinion, rehabilitation, recovery, and future medical travel packages. All packages require human review and clinic validation.",
};

const categories = [
  "All",
  "Prevention / Check-up",
  "Second Opinion",
  "Rehabilitation",
  "Recovery Support",
  "Medical Wellness",
  "Dental",
  "Fertility",
];

export default function PackagesPage() {
  return (
    <>
      <section className="bg-sky/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Health stay packages
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-muted leading-relaxed">
              Compare prevention, second opinion, rehabilitation, recovery, and
              future medical travel packages. All packages require human review
              and clinic validation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category) => {
              const filtered =
                category === "All"
                  ? healthStayPackages
                  : healthStayPackages.filter((p) => p.category === category);
              if (filtered.length === 0) return null;
              return (
                <div key={category}>
                  <h2 className="text-lg font-semibold text-navy mb-5">
                    {category === "All" ? "All packages" : category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filtered.map((pkg) => (
                      <PackageCard key={pkg.slug} pkg={pkg} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-100 rounded-xl p-5">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
              Package disclaimer
            </p>
            <p className="mt-1 text-xs text-amber-700 leading-relaxed">
              All packages require human review and clinic validation. Prices
              shown are indicative or marked as &quot;on request&quot;. No
              package is confirmed without a personalised proposal reviewed by a
              human coordinator and validated by the relevant clinic or provider.
              Future categories (Dental, Fertility) are shown as expansion
              concepts and are not yet available.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/request"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-teal rounded-xl hover:bg-teal-dark transition-colors"
            >
              Request a personal proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
