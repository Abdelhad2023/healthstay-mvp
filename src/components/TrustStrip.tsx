const trustItems = [
  { icon: "🇨🇭", label: "Swiss-based" },
  { icon: "👤", label: "Human validation" },
  { icon: "📋", label: "Transparent packages" },
  { icon: "🤝", label: "Post-stay support" },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">{item.icon}</span>
              <span className="text-sm font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
