import Link from "next/link";
import { Center } from "@/types/healthstay";
import Badge from "./Badge";

interface CenterCardProps {
  center: Center;
}

export default function CenterCard({ center }: CenterCardProps) {
  return (
    <article className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-900">{center.name}</h3>
        <Badge
          label={center.verificationStatus === "prototype" ? "Prototype Profile" : center.verificationStatus}
          variant={center.verificationStatus === "prototype" ? "warning" : "success"}
        />
      </div>
      <p className="mt-1 text-sm text-gray-500">
        {center.city}, {center.region}, {center.country}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {center.focusAreas.slice(0, 3).map((area) => (
          <span
            key={area}
            className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-full"
          >
            {area}
          </span>
        ))}
        {center.focusAreas.length > 3 && (
          <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-gray-400 bg-gray-50 rounded-full">
            +{center.focusAreas.length - 3}
          </span>
        )}
      </div>
      <div className="mt-3">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Languages</h4>
        <p className="mt-1 text-sm text-gray-600">{center.languages.join(", ")}</p>
      </div>
      <div className="mt-3 flex-1">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Package Types</h4>
        <ul className="mt-1 space-y-0.5">
          {center.packageTypes.map((pkg) => (
            <li key={pkg} className="text-sm text-gray-600">
              • {pkg}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/centers/${center.slug}`}
        className="mt-6 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
      >
        View center
      </Link>
    </article>
  );
}
