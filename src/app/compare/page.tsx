import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CompareTable from "@/components/CompareTable";
import DisclaimerBox from "@/components/DisclaimerBox";
import CTASection from "@/components/CTASection";
import { getCompareRows } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Compare Neuro-Health Programmes",
  description:
    "Compare Swiss brain health prevention, neuro second opinion, and neuro-rehabilitation programmes side by side. Transparent package comparison.",
};

export default async function ComparePage() {
  const rows = await getCompareRows();

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Compare programmes"
            subtitle="See how our three main programmes differ in goal, duration, included services, and validation requirements."
          />
          <div className="mt-10 bg-white border border-gray-100 rounded-xl overflow-hidden">
            <CompareTable rows={rows} />
          </div>
          <div className="mt-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              All programmes use <strong>request-based confirmation</strong>, not instant booking.
              Each request is reviewed by a human coordinator and validated by the selected clinic
              before any proposal is confirmed.
            </p>
          </div>
          <div className="mt-8">
            <DisclaimerBox variant="medical" />
          </div>
          <div className="mt-12">
            <CTASection
              title="Not sure which programme fits?"
              subtitle="Tell us about your goals and preferences. Our team will help you identify potentially suitable options."
              primaryCta={{ label: "Request a personal proposal", href: "/request" }}
              secondaryCta={{ label: "View all programmes", href: "/programs" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
