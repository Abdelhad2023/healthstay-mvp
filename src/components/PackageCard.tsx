import Link from "next/link";
import { HealthStayPackage } from "@/types/healthstay";

interface PackageCardProps {
  pkg: HealthStayPackage;
}

const gradientMap: Record<string, string> = {
  "Prevention / Check-up": "from-teal/30 via-sky to-teal/20",
  "Second Opinion": "from-navy/20 via-sky to-navy/10",
  Rehabilitation: "from-teal/20 via-teal-light to-teal/10",
  "Recovery Support": "from-sky via-white to-sky/50",
  "Medical Wellness": "from-teal/20 via-sky to-teal-light",
  Dental: "from-gray-100 via-white to-gray-50",
  Fertility: "from-sky via-white to-teal-light",
};

export default function PackageCard({ pkg }: PackageCardProps) {
  const gradient = gradientMap[pkg.category] || "from-gray-50 via-white to-gray-50";

  return (
    <article className="bg-white border border-card-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
      <div className={`h-28 bg-gradient-to-br ${gradient} p-4 flex items-start justify-between`}>
        <span className="text-xs font-medium text-navy bg-white/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/50 shadow-sm">
          {pkg.category}
        </span>
        <span className="text-xs font-medium text-slate-muted bg-white/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/50 shadow-sm">
          {pkg.status === "pilot"
            ? "Pilot"
            : pkg.status === "available_demo"
              ? "Demo destination"
              : "Future category"}
        </span>
      </div>
      <div className="p-5 pt-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-navy leading-snug">
          {pkg.title}
        </h3>
        <p className="mt-1.5 text-xs text-slate-muted leading-relaxed line-clamp-2">
          {pkg.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pkg.duration}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {pkg.destination}
          </span>
        </div>
        <p className="mt-2.5 text-sm font-semibold text-teal">
          {pkg.priceLabel}
        </p>
        <div className="mt-auto pt-4">
          <Link
            href={pkg.ctaHref}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-navy rounded-xl hover:bg-navy-light transition-colors"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
