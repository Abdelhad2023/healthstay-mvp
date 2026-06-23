import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ProgramCard from "@/components/ProgramCard";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import JourneyTimeline from "@/components/JourneyTimeline";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getPrograms, getJourneySteps } from "@/lib/content/repository";

export default async function HomePage() {
  const [programs, journeySteps] = await Promise.all([
    getPrograms(),
    getJourneySteps(),
  ]);

  const mainPrograms = programs.filter(
    (p) => p.slug !== "post-stay-recovery-support"
  );

  return (
    <>
      <HeroSection
        title="Premium Swiss neuro-health journeys, guided from first request to post-stay follow-up."
        subtitle="Compare prevention, second opinion, and neuro-rehabilitation stays with transparent packages and human validation."
        primaryCta={{ label: "Request a personal proposal", href: "/request" }}
        secondaryCta={{ label: "Explore programmes", href: "/programs" }}
      />

      <TrustStrip />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Curated Swiss neuro-health programmes"
            subtitle="Each package is designed with transparency in mind. Know what is included, what requires human validation, and what to expect at every step."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/programs"
              className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
            >
              View all programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How the journey works"
            subtitle="From discovery to post-stay follow-up — every step includes human support and clinic validation."
          />
          <div className="mt-10 max-w-2xl">
            <JourneyTimeline steps={journeySteps} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Not a hospital directory"
                subtitle="Unlike a simple clinic listing, HealthStay offers transparent packages, human coordination, and clinic validation before confirmation."
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Transparent packages</strong> — Know exactly what is included and what is not, with clear pricing.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Human coordination</strong> — A dedicated coordinator supports you from request to follow-up.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Clinic validation</strong> — Every request is reviewed by the clinic before confirmation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold">•</span>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Post-stay support</strong> — Follow-up and guidance continue after you return home.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Your safety, our priority
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                HealthStay is not an AI doctor or a diagnosis tool. We connect you with Swiss neuro-health
                programmes through a human-reviewed, clinic-validated process. No instant bookings,
                no hidden terms, no medical predictions.
              </p>
              <DisclaimerBox variant="prototype" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Ready to explore your options?"
            subtitle="Submit a non-binding request and receive a personalised proposal reviewed by a human coordinator."
            primaryCta={{ label: "Request a personal proposal", href: "/request" }}
            secondaryCta={{ label: "Learn how it works", href: "/journey" }}
          />
        </div>
      </section>
    </>
  );
}
