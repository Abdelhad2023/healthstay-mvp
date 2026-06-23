import Link from "next/link";
import { Program } from "@/types/healthstay";
import Badge from "./Badge";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge label={program.category} variant="category" />
          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            {program.title}
          </h3>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {program.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-full">
          {program.duration}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-full">
          {program.location}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-gray-500">
        {program.priceLabel}
      </p>
      <div className="mt-4 flex-1">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Includes</h4>
        <ul className="mt-2 space-y-1">
          {program.includes.slice(0, 3).map((item) => (
            <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              {item}
            </li>
          ))}
          {program.includes.length > 3 && (
            <li className="text-sm text-gray-400">+{program.includes.length - 3} more</li>
          )}
        </ul>
      </div>
      <Link
        href={`/programs/${program.slug}`}
        className="mt-6 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {program.ctaLabel}
      </Link>
    </article>
  );
}
