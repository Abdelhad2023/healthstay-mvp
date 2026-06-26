import Link from "next/link";
import { NeedOption } from "@/types/healthstay";

interface NeedCardProps {
  need: NeedOption;
}

const iconConfig: Record<string, { bg: string; path: string }> = {
  prevention: {
    bg: "bg-teal-light",
    path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  "second-opinion": {
    bg: "bg-sky",
    path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  rehabilitation: {
    bg: "bg-teal-light",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  "not-sure": {
    bg: "bg-sky",
    path: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
};

export default function NeedCard({ need }: NeedCardProps) {
  const icon = iconConfig[need.id] || iconConfig.prevention;

  return (
    <div className={`bg-white border-2 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${
      need.id === "not-sure"
        ? "border-teal/40 shadow-md shadow-teal/5"
        : "border-card-border hover:border-teal/20"
    }`}>
      <div
        className={`w-14 h-14 ${icon.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
      >
        <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
        </svg>
      </div>
      <h3 className="text-base font-bold text-navy leading-snug">
        {need.title}
      </h3>
      <p className="mt-2 text-sm text-slate-muted leading-relaxed">
        {need.description}
      </p>
      <Link
        href={need.ctaHref}
        className="mt-5 inline-flex items-center text-sm font-semibold text-navy group-hover:text-teal transition-colors"
      >
        <span>{need.ctaLabel}</span>
        <svg
          className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform"
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
  );
}
