import Link from "next/link";

const items = [
  {
    label: "No AI diagnosis",
    desc: "Every decision involves a qualified medical professional",
  },
  {
    label: "No treatment prediction",
    desc: "We do not predict outcomes or guarantee results",
  },
  {
    label: "No instant booking",
    desc: "Every request requires human review and clinic validation",
  },
  {
    label: "No patient data stored in MVP",
    desc: "Your information is handled with strict privacy",
  },
  {
    label: "Human + clinic validation always",
    desc: "Real people, real clinics — every step of the way",
  },
  {
    label: "Transparency at every step",
    desc: "Clear pricing, inclusions and exclusions from the start",
  },
];

export default function SafetyChecklist() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 bg-navy/[0.02] border border-card-border rounded-xl px-4 py-3.5 hover:border-teal/20 hover:bg-teal-light/20 transition-all duration-200"
          >
            <div className="w-6 h-6 mt-0.5 bg-gradient-to-br from-teal to-teal-dark rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">{item.label}</p>
              <p className="text-xs text-slate-muted mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/trust-safety"
          className="inline-flex items-center text-sm font-semibold text-teal hover:text-teal-dark transition-colors gap-1 group"
        >
          Learn more about trust & safety
          <svg
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
