import { Metadata } from "next";
import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Health Stay Destinations",
  description:
    "Explore countries where HealthStay can support transparent health stay journeys. Switzerland is the first pilot; other destinations are part of the global vision.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="bg-sky/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Health stay destinations
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-muted leading-relaxed">
              Explore countries where HealthStay can support transparent health
              stay journeys. Switzerland is the first pilot; other destinations
              are part of the global vision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
              Destination status
            </p>
            <p className="mt-1 text-xs text-amber-700 leading-relaxed">
              Switzerland is the active pilot destination. All other countries
              are coming soon as future expansion concepts and do not yet
              represent active provider relationships, verified packages, or
              confirmed availability. Real partnerships and package validation
              are required before any new destination becomes operational.
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
