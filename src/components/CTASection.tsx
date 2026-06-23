import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href={primaryCta.href}
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {primaryCta.label}
        </Link>
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
