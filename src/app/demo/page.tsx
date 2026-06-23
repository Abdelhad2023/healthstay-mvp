import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "HealthStay Demo — Swiss Neuro-Health Journey Prototype",
  description:
    "Controlled presentation demo for a premium Swiss neuro-health journey platform concept.",
  robots: { index: false, follow: false },
};

const demoPathCards = [
  { step: 1, title: "Start with the homepage", href: "/", description: "Understand the platform concept in 10 seconds." },
  { step: 2, title: "Explore programmes", href: "/programs", description: "Browse Swiss neuro-health programmes with transparent packages." },
  { step: 3, title: "View the patient journey", href: "/journey", description: "See how every step includes human support and clinic validation." },
  { step: 4, title: "Compare packages", href: "/compare", description: "Side-by-side comparison of prevention, second opinion, and rehabilitation." },
  { step: 5, title: "Open the Swiss pilot page", href: "/pilot", description: "Full pilot concept presentation." },
  { step: 6, title: "Submit a prototype request", href: "/request", description: "Client-side demo form — no data stored." },
  { step: 7, title: "Review trust and safety", href: "/trust-safety", description: "Nine principles of responsible health travel." },
  { step: 8, title: "Discuss provider value", href: "/partners", description: "Why a premium Swiss provider would consider a pilot." },
];

const demoOrder = [
  { href: "/pilot", label: "Swiss Pilot Concept" },
  { href: "/journey", label: "Patient Journey" },
  { href: "/programs/brain-health-prevention", label: "Brain Health Prevention Stay" },
  { href: "/compare", label: "Compare Programmes" },
  { href: "/request", label: "Request a Proposal" },
  { href: "/partners", label: "Provider Value" },
];

const keyMessages = [
  {
    title: "Not a directory: a guided journey",
    text: "HealthStay structures the full patient journey — from first discovery to post-stay follow-up — with human coordination and clinic validation at every sensitive step.",
  },
  {
    title: "Not AI diagnosis: AI-assisted orientation",
    text: "AI is used only for programme matching and information summarisation, never for diagnosis, treatment recommendations, or medical outcome predictions.",
  },
  {
    title: "Not instant booking: human-reviewed request",
    text: "Every request is reviewed by a human coordinator and validated by the selected clinic before any proposal is confirmed. No instant medical bookings.",
  },
  {
    title: "Not generic tourism: Swiss neuro-health focus",
    text: "The platform is specialised in premium Swiss neuro-health — prevention, second opinion, and rehabilitation — with packages designed for international patients.",
  },
];

export default function DemoPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full">
            Controlled Demo
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
            HealthStay Demo: A premium international patient journey concept for Swiss neuro-health stays.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            This independent prototype shows how international patients could explore Swiss neuro-health programmes, request transparent proposals, and receive human-guided support from first inquiry to post-stay follow-up.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
            <p className="text-sm font-semibold text-amber-800">Demo context</p>
            <ul className="mt-3 space-y-2 text-sm text-amber-700">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>This is an <strong>independent concept prototype</strong> — not affiliated with any specific provider.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>It does <strong>not</strong> provide medical advice, diagnosis, or treatment recommendations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>There is <strong>no instant booking</strong> — every request requires human review and clinic validation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>No patient data is stored — forms are client-side demo only.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Designed for <strong>pilot discussion</strong> with a premium Swiss neuro-health provider.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="5-minute demo path" subtitle="Suggested order to walk through the prototype in a meeting." />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {demoPathCards.map((card) => (
              <Link key={card.step} href={card.href} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">{card.step}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{card.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What to show first" subtitle="Recommended 5-page demo flow for a presentation." />
          <div className="mt-8 flex flex-wrap gap-3">
            {demoOrder.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] font-semibold">{i + 1}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Key message blocks" subtitle="Four distinctions that define the HealthStay concept." />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyMessages.map((msg) => (
              <div key={msg.title} className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-900">{msg.title}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Ready to explore the concept?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/pilot" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                Open pilot page
              </Link>
              <Link href="/request" className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Open request flow
              </Link>
              <Link href="/partners" className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                View provider value
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <DisclaimerBox variant="pilot" />
          </div>
        </div>
      </section>
    </>
  );
}
