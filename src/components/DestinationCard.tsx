import Link from "next/link";
import { Destination } from "@/types/healthstay";

interface DestinationCardProps {
  destination: Destination;
}

const statusStyles: Record<string, string> = {
  pilot: "bg-teal-light text-teal-dark border border-teal/20",
  demo: "bg-sky text-navy border border-navy/10",
  coming_soon: "bg-gray-100 text-gray-500 border border-gray-200",
};

const gradientMap: Record<string, string> = {
  "swiss-alps":
    "from-[#06243F] via-[#0E9F9A]/40 to-[#06243F]",
  "istanbul-modern":
    "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  "berlin-modern":
    "from-[#2d3436] via-[#636e72] to-[#2d3436]",
  "dubai-modern":
    "from-[#b8860b] via-[#daa520] to-[#8b6914]",
  mediterranean:
    "from-[#0ea5e9] via-[#06b6d4] to-[#0891b2]",
  marrakech:
    "from-[#9c6644] via-[#b08968] to-[#7f5539]",
  "paris-elegance":
    "from-[#1a1a2e] via-[#4a4a6a] to-[#2d2d44]",
  "mediterranean-coast":
    "from-[#0d9488] via-[#14b8a6] to-[#0f766e]",
};

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  const gradient =
    gradientMap[destination.visualTheme] || gradientMap["swiss-alps"];

  return (
    <article className="bg-white border border-card-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
      <div
        className={`h-44 bg-gradient-to-br ${gradient} flex items-end p-5 relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative">
          <span
            className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-2 ${statusStyles[destination.status]}`}
          >
            {destination.status === "pilot"
              ? "Pilot destination"
              : destination.status === "demo"
                ? "Demo destination"
                : "Coming soon"}
          </span>
          <h3 className="text-xl font-bold text-white">
            {destination.country}
          </h3>
          <p className="text-sm text-white/80 mt-0.5">
            {destination.subtitle}
          </p>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-slate-muted leading-relaxed line-clamp-2">
          {destination.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {destination.packageExamples.slice(0, 2).map((pkg) => (
            <span
              key={pkg}
              className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full"
            >
              {pkg}
            </span>
          ))}
          {destination.packageExamples.length > 2 && (
            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
              +{destination.packageExamples.length - 2}
            </span>
          )}
        </div>
        <div className="mt-auto pt-4">
          <Link
            href={`/destinations/${destination.slug}`}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-navy bg-gray-50 border border-card-border rounded-xl hover:bg-gray-100 transition-colors"
          >
            View destination
          </Link>
        </div>
      </div>
    </article>
  );
}
