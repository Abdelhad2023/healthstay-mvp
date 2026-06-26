import Link from "next/link";
import { AudienceSegment } from "@/types/healthstay";

interface AudienceCardProps {
  segment: AudienceSegment;
}

const iconSvgs: Record<string, { bg: string; path: string }> = {
  patients: {
    bg: "bg-teal-light",
    path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  hospitals: {
    bg: "bg-sky",
    path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  coordinators: {
    bg: "bg-teal-light",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
};

export default function AudienceCard({ segment }: AudienceCardProps) {
  const icon = iconSvgs[segment.id] || iconSvgs.patients;

  return (
    <div className="bg-white border border-card-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
      <div
        className={`w-14 h-14 ${icon.bg} rounded-2xl flex items-center justify-center mb-5`}
      >
        <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-navy">{segment.title}</h3>
      <p className="mt-2 text-sm text-slate-muted leading-relaxed">
        {segment.description}
      </p>
      <Link
        href={segment.ctaHref}
        className="mt-5 flex items-center text-sm font-semibold text-navy group-hover:text-teal transition-colors"
      >
        <span>{segment.ctaLabel}</span>
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
