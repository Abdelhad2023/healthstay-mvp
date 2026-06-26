import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getTrustPrinciples } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "Safe. Transparent. Human. HealthStay is built on trust, transparency, and human validation. No AI diagnosis, no medical predictions, no instant bookings — clinic validation required.",
};

export default async function TrustSafetyPage() {
  const trustPrinciples = await getTrustPrinciples();

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Safe. Transparent. Human."
            subtitle="HealthStay is built on the principle that medical travel requires trust, transparency, and human oversight — not algorithms making decisions."
          />

          <div className="mt-10 space-y-6">
            {trustPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="bg-white border border-gray-100 rounded-xl p-6"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <DisclaimerBox variant="medical" />
            <DisclaimerBox variant="prototype" />
          </div>
        </div>
      </section>
    </>
  );
}
