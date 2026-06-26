import Link from "next/link";
import NeedCard from "@/components/NeedCard";
import HowItWorksStepper from "@/components/HowItWorksStepper";
import SafetyChecklist from "@/components/SafetyChecklist";
import AudienceCard from "@/components/AudienceCard";
import ProviderPlaceholderCard from "@/components/ProviderPlaceholderCard";
import { healthStayPackages } from "@/data/packages";
import { NeedOption, AudienceSegment } from "@/types/healthstay";

const featuredPackages = healthStayPackages.filter((p) =>
  [
    "brain-health-prevention",
    "neuro-second-opinion",
    "neuro-rehabilitation-stay",
    "post-stay-recovery",
  ].includes(p.slug)
);

const packageGradients: Record<string, string> = {
  "brain-health-prevention": "from-teal/30 via-sky to-teal/20",
  "neuro-second-opinion": "from-navy/20 via-sky to-navy/10",
  "neuro-rehabilitation-stay": "from-teal/20 via-teal-light to-teal/10",
  "post-stay-recovery": "from-sky via-white to-sky/50",
};

const needs: NeedOption[] = [
  {
    id: "prevention",
    title: "I want a health check-up or prevention stay",
    description:
      "Prevention, longevity, wellness and health optimization.",
    ctaLabel: "Explore Prevention Stays",
    ctaHref: "/programs",
    icon: "❤️",
  },
  {
    id: "second-opinion",
    title: "I want a second medical opinion",
    description:
      "Get an expert review of your diagnosis and treatment options.",
    ctaLabel: "Explore Second Opinion",
    ctaHref: "/programs",
    icon: "📋",
  },
  {
    id: "rehabilitation",
    title: "I need rehabilitation or recovery support",
    description:
      "Recovery after treatment, injury, surgery or neurological condition.",
    ctaLabel: "Explore Rehabilitation",
    ctaHref: "/programs",
    icon: "💪",
  },
  {
    id: "not-sure",
    title: "I'm not sure yet",
    description:
      "That's completely normal. Answer a few simple questions and we'll help you find the right health stay option. No pressure, no commitment.",
    ctaLabel: "Help me choose",
    ctaHref: "/journey",
    icon: "💬",
  },
];

const audienceSegments: AudienceSegment[] = [
  {
    id: "patients",
    title: "For patients & families",
    description:
      "Find the right health stay with confidence and clarity.",
    ctaLabel: "Explore now",
    ctaHref: "/programs",
  },
  {
    id: "hospitals",
    title: "For hospitals & centers",
    description:
      "Reach international patients with better-qualified inquiries.",
    ctaLabel: "Partner with us",
    ctaHref: "/partners",
  },
  {
    id: "coordinators",
    title: "For coordinators",
    description:
      "Provide the best support across the entire journey.",
    ctaLabel: "Learn more",
    ctaHref: "/journey",
  },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — Hero + Right Dashboard */}
      <section className="bg-gradient-to-b from-sky/70 to-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10 pb-6 lg:pb-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Left Hero — more dramatic & premium */}
            <div className="lg:col-span-3 bg-gradient-to-br from-navy-dark via-[#06243F] to-teal/15 rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-end min-h-[480px] sm:min-h-[560px] relative overflow-hidden shadow-2xl shadow-navy/30 ring-1 ring-white/5">
              {/* Ambient glow behind mountains */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-48 bg-teal/10 rounded-full blur-3xl" />

              {/* Premium Mountain SVG scene */}
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-30" viewBox="0 0 800 600" preserveAspectRatio="xMidYMax slice">
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(14,159,154,0.15)" />
                      <stop offset="100%" stopColor="rgba(14,159,154,0.05)" />
                    </linearGradient>
                  </defs>
                  <rect width="800" height="600" fill="url(#skyGrad)" />

                  {/* Far mountains — snow-capped */}
                  <path d="M0,380 L100,210 L220,340 L350,160 L480,300 L600,190 L800,350 L800,600 L0,600 Z" fill="rgba(255,255,255,0.08)" />
                  <path d="M90,230 L100,210 L120,250 Z" fill="url(#snowGrad)" />
                  <path d="M340,180 L350,160 L370,200 Z" fill="url(#snowGrad)" />
                  <path d="M590,210 L600,190 L620,230 Z" fill="url(#snowGrad)" />

                  {/* Mid mountains — deeper tone */}
                  <path d="M0,440 L70,270 L170,370 L280,220 L400,340 L530,250 L680,380 L800,320 L800,600 L0,600 Z" fill="rgba(255,255,255,0.06)" />
                  <path d="M60,290 L70,270 L90,310 Z" fill="url(#snowGrad)" />
                  <path d="M270,240 L280,220 L300,260 Z" fill="url(#snowGrad)" />
                  <path d="M520,270 L530,250 L550,290 Z" fill="url(#snowGrad)" />

                  {/* Near hills — warm earth tones */}
                  <path d="M0,510 L90,390 L190,470 L330,370 L470,450 L630,390 L800,480 L800,600 L0,600 Z" fill="rgba(255,255,255,0.04)" />

                  {/* Lake — teal shimmer */}
                  <path d="M0,530 C180,505 380,520 580,505 C680,500 800,515 800,515 L800,600 L0,600 Z" fill="url(#lakeGrad)" />
                  <path d="M0,545 C200,530 400,540 600,530 C700,525 800,535 800,535 L800,600 L0,600 Z" fill="rgba(14,159,154,0.06)" />
                </svg>
              </div>

              {/* Floating decorative circles */}
              <div className="absolute top-12 right-12 w-3 h-3 bg-teal/30 rounded-full blur-[1px] animate-pulse" />
              <div className="absolute top-20 right-24 w-2 h-2 bg-white/20 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-32 left-8 w-4 h-4 bg-teal/20 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '2s' }} />

              <div className="relative">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-teal bg-white/10 backdrop-blur-md border border-teal/30 rounded-full mb-5 shadow-lg shadow-teal/5">
                  <span className="w-1.5 h-1.5 bg-teal rounded-full mr-2 animate-pulse" />
                  Global vision &middot; Swiss pilot first
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Find trusted health stays{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-light">worldwide</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                  Explore hospitals, clinics and health centers offering
                  transparent health stay packages with accommodation,
                  coordination, human review and clinic validation.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/request"
                    className="inline-flex items-center px-6 py-3.5 text-base font-bold text-white bg-gradient-to-r from-teal to-teal-dark rounded-xl hover:from-teal-dark hover:to-teal transition-colors shadow-xl shadow-teal/30 hover:shadow-teal/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Request a Proposal
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/programs"
                    className="inline-flex items-center px-6 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
                  >
                    Explore Health Stays
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Pilot Destination — Switzerland */}
              <div className="bg-white border border-card-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-navy uppercase tracking-wider">
                    Pilot destination
                  </h2>
                  <Link
                    href="/destinations"
                    className="text-xs font-semibold text-teal hover:text-teal-dark transition-colors"
                  >
                    View all &rarr;
                  </Link>
                </div>
                <Link
                  href="/destinations/switzerland"
                  className="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-teal-light/40 to-transparent hover:from-teal-light/60 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy via-teal/30 to-navy flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-navy">Switzerland</p>
                      <span className="text-xs font-medium text-teal bg-teal-light px-1.5 py-0.5 rounded-full">Active pilot</span>
                    </div>
                    <p className="text-xs text-slate-muted truncate mt-0.5">
                      World-class neuro-health, prevention &amp; rehabilitation
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-muted group-hover:text-navy transition-colors flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Global expansion coming soon */}
                <div className="mt-3 pt-3 border-t border-card-border">
                  <p className="text-xs text-slate-muted flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    More destinations coming soon — Europe, Middle East &amp; North Africa
                  </p>
                </div>
              </div>

              {/* Featured Packages */}
              <div className="bg-white border border-card-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-navy uppercase tracking-wider">
                    Featured health stay packages
                  </h2>
                  <Link
                    href="/packages"
                    className="text-xs font-semibold text-teal hover:text-teal-dark transition-colors"
                  >
                    View all &rarr;
                  </Link>
                </div>
                <div className="space-y-3">
                  {featuredPackages.map((pkg) => (
                    <Link
                      key={pkg.slug}
                      href={pkg.ctaHref}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-sky/60 transition-colors group"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                          packageGradients[pkg.slug] || "from-sky to-teal-light"
                        } flex items-center justify-center flex-shrink-0`}
                      >
                        <svg
                          className="w-6 h-6 text-navy"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-navy">
                          {pkg.title}
                        </p>
                        <p className="text-xs text-slate-muted">
                          {pkg.duration} &middot; {pkg.destination}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-teal whitespace-nowrap">
                        {pkg.priceLabel.startsWith("Price on request")
                          ? "Price on request"
                          : "Proposal after validation"}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Your Health Journey (elegant value section) */}
      <section className="bg-gradient-to-b from-navy-dark via-navy to-navy-light py-10 sm:py-14 relative overflow-hidden">
        {/* Decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal/60 via-teal to-teal/60" />
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M0,100 C100,50 200,120 300,80 C350,60 400,70 400,70 L400,200 L0,200 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-teal bg-teal-light/10 border border-teal/20 rounded-full mb-4">
              Your journey, guided
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Tell us what you need
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              Every health stay begins with a conversation. Whatever your
              goal — prevention, a second opinion, or recovery — we will
              connect you with the right care, coordinated from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {needs.map((need) => (
              <NeedCard key={need.id} need={need} />
            ))}
          </div>


        </div>
      </section>

      {/* SECTION 3 — How It Works */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-sky/60 via-white to-sky/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M0,100 C100,50 200,120 300,80 C350,60 400,70 400,70 L400,200 L0,200 Z" fill="#0E9F9A" />
            <path d="M0,150 C120,100 250,130 400,100 L400,200 L0,200 Z" fill="#06243F" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-teal bg-teal-light/60 border border-teal/20 rounded-full mb-4">
              Simple, guided process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
              From exploration to post-stay support
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-muted max-w-2xl mx-auto">
              Every step includes human guidance and clinic validation. No
              automation, no shortcuts — just clear, coordinated care.
            </p>
          </div>
          <HowItWorksStepper />
        </div>
      </section>

      {/* SECTION 4 — Safe + Swiss Pilot (2-column ultra elegant) */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-teal bg-teal-light/60 border border-teal/20 rounded-full mb-4">
              Built on trust
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
              Safety first, always
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-muted max-w-2xl mx-auto">
              No AI diagnosis, no instant booking, no shortcuts. Every request
              is reviewed by a real person and validated by a clinic.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Safety — white card with premium details */}
            <div className="bg-white border border-card-border rounded-2xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/[0.03] rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-teal/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold text-teal bg-teal-light rounded-full">Safe. Transparent. Human.</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mt-1">Your safety is our foundation</h3>
                </div>
              </div>
              <SafetyChecklist />
            </div>

            {/* Swiss Pilot — dark navy with premium details */}
            <div className="bg-gradient-to-br from-navy-dark via-navy to-navy-light rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-xl ring-1 ring-white/5">
              {/* Swiss cross decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 opacity-[0.04]">
                <svg viewBox="0 0 24 24" fill="white">
                  <rect x="4" y="9" width="16" height="6" rx="1" />
                  <rect x="9" y="4" width="6" height="16" rx="1" />
                </svg>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-[0.02]">
                <svg viewBox="0 0 200 200" fill="none">
                  <path d="M0,100 C50,50 100,0 100,0 C100,0 150,50 200,100 C150,150 100,200 100,200 C100,200 50,150 0,100 Z" fill="white" />
                </svg>
              </div>

              <div className="relative">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-teal bg-white/10 backdrop-blur-sm border border-teal/30 rounded-full">
                  <svg className="w-3 h-3 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="9" width="16" height="6" rx="1" />
                    <rect x="9" y="4" width="6" height="16" rx="1" />
                  </svg>
                  Proof of concept
                </span>
                <h3 className="mt-5 text-xl sm:text-2xl font-bold text-white">
                  Starting with a Swiss pilot
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Switzerland is our first proof of concept — not the whole
                  platform. We start with a neuro-health pilot to validate the
                  model, then expand to more hospitals, specialties and countries
                  worldwide. Switzerland offers world-class expertise, but our
                  vision is global.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/pilot"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-navy bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Discover the pilot
                    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/trust-safety"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white/80 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 hover:text-white transition-colors"
                  >
                    Trust & safety
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Who Is HealthStay For? */}
      <section className="py-10 sm:py-14 bg-sky/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
              Who is HealthStay for?
            </h2>
            <p className="mt-3 text-base text-slate-muted max-w-xl mx-auto">
              Patients, healthcare providers and coordinators — all supported
              through a single transparent platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {audienceSegments.map((segment) => (
              <AudienceCard key={segment.id} segment={segment} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Final CTA */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <path d="M0,100 C100,50 200,120 300,80 C350,60 400,70 400,70 L400,200 L0,200 Z" fill="white" />
              </svg>
            </div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Ready to start your health stay journey?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
                Request a personal proposal and our team will guide you through
                every step — from exploration to post-stay support.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/request"
                  className="inline-flex items-center px-6 py-3.5 text-base font-bold text-navy bg-teal rounded-xl hover:bg-teal-dark transition-colors shadow-xl shadow-teal/30"
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center px-6 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
                >
                  Explore Health Stays
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/50">
                No payment. No obligation. Human review and clinic validation
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Trusted Providers */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-sky/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-teal bg-teal-light/60 border border-teal/20 rounded-full mb-4">
              Our network
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
          Trusted by leading healthcare providers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-muted max-w-2xl mx-auto">
              We are building a global network of hospitals, clinics and
              wellness centres. The profiles below illustrate the types of
              partners we work with.
            </p>
          </div>
          <ProviderPlaceholderCard />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-10 sm:pb-14 bg-gradient-to-b from-white to-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-card-border rounded-2xl p-6 sm:p-8 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-navy/[0.05] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-navy/50 uppercase tracking-wider">
                  Important disclaimer
                </p>
                <p className="mt-1.5 text-xs text-slate-muted leading-relaxed">
                  HealthStay is a concept platform for health stay discovery and
                  request coordination. It does not provide medical advice,
                  diagnosis, treatment recommendations or emergency support. Every
                  real request must be reviewed by a human coordinator and validated
                  by the relevant clinic or provider. Provider examples are shown
                  for concept demonstration only. Real partner profiles, packages,
                  prices and availability require direct validation by each provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
