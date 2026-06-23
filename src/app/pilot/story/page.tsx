import { Metadata } from "next";
import DisclaimerBox from "@/components/DisclaimerBox";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilot Story — HealthStay",
  description:
    "A simple story explaining the HealthStay Swiss neuro-health journey concept.",
  robots: { index: false, follow: false },
};

const storySections = [
  {
    title: "The international patient problem",
    text: "A patient or family discovers they need a neuro-health programme abroad. They search online, find hospital websites with medical information but no practical guidance. They do not know what to expect, what it costs, who to contact, or how to prepare. They send emails, wait for replies, receive incomplete answers, and feel uncertain about the next step.",
  },
  {
    title: "Why hospital websites are not enough",
    text: "Hospital websites are designed to inform, not to guide. They explain services but do not help a family plan a trip from another country. Questions about accommodation, transport, language support, coordinator availability, and post-stay follow-up are often unanswered — not because the hospital does not care, but because its website is not built for international patient journeys.",
  },
  {
    title: "Why a marketplace alone is not enough",
    text: "A simple directory or marketplace listing clinics would still leave patients uncertain. Health travel is not like booking a hotel room — it requires trust, human judgment, and clinical validation. An international patient cannot click a button and confirm a medical stay. They need a coordinator, a transparent proposal, and a clinic that has reviewed their specific situation.",
  },
  {
    title: "Why HealthStay is different",
    text: "HealthStay combines the best of both worlds: the clarity of a structured digital platform and the safety of human review. Patients explore transparent packages, compare programmes, and submit a request — but no confirmation happens until a human coordinator reviews the request and the selected clinic validates suitability. AI assists with matching and information, not with medical decisions.",
  },
  {
    title: "How the journey works",
    text: "From first discovery to post-stay follow-up, the journey follows a clear path: explore programmes, answer basic questions, receive suggested options, coordinator review, clinic validation, transparent proposal, stay preparation, arrival support, programme delivery, and return home with continued follow-up. At every sensitive step, a human is involved.",
  },
  {
    title: "Why human validation protects trust",
    text: "Medical travel involves decisions that cannot be automated. A clinic must confirm that a programme is suitable for a specific patient. A coordinator must ensure the patient understands what is included and what is not. By requiring human validation before confirmation, HealthStay protects patients from unrealistic expectations and protects providers from unsuitable inquiries.",
  },
  {
    title: "Why Switzerland and neuro-health are the right starting point",
    text: "Switzerland offers world-class neuro-health expertise in a premium, restorative environment. Neuro-health journeys — prevention, second opinion, rehabilitation — are complex enough to benefit from structured guidance, yet safe enough for a controlled pilot. Families need coordination, accommodation, language support, and post-stay follow-up. These are exactly the needs HealthStay is built to address.",
  },
  {
    title: "What a six-month pilot could prove",
    text: "A six-month pilot with a Swiss neuro-health provider could demonstrate whether a structured digital journey produces better-qualified inquiries, clearer patient expectations, reduced back-and-forth communication, and higher satisfaction for both patients and providers. These are measurable operational outcomes — not medical claims.",
  },
  {
    title: "What the long-term platform could become",
    text: "With validated pilot results, HealthStay could expand to additional Swiss neuro-health programmes, add a partner dashboard for providers, integrate coordinator tools, and eventually support more health categories — always with the same principle: AI assists, humans validate, and patients decide with clarity and confidence.",
  },
];

export default function PilotStoryPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full">
            Pilot Story
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
            The HealthStay story
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A simple narrative for decision-makers: why this platform exists, what problem it solves, and why it matters for Swiss neuro-health.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {storySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Interested in learning more?"
            subtitle="Explore the pilot concept or get in touch to discuss a potential engagement."
            primaryCta={{ label: "Explore the pilot", href: "/pilot" }}
            secondaryCta={{ label: "Contact us", href: "/contact" }}
          />
          <div className="mt-8">
            <DisclaimerBox variant="pilot" />
          </div>
        </div>
      </section>
    </>
  );
}
