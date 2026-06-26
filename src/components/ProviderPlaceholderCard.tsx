const providers = [
  {
    name: "Example Hospital",
    location: "Switzerland",
    gradient: "from-teal/20 via-teal-light to-teal/10",
    path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    name: "Neuro Center",
    location: "Switzerland",
    gradient: "from-navy/10 via-sky to-navy/5",
    path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Wellness Clinic",
    location: "Turkey",
    gradient: "from-teal/20 via-teal-light to-sky/30",
    path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Recovery Institute",
    location: "Germany",
    gradient: "from-sky via-white to-sky/50",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    name: "Global expansion",
    location: "Coming to more countries",
    gradient: "from-gray-50 via-white to-gray-50",
    path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function ProviderPlaceholderCard() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-5">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="bg-white border border-card-border rounded-2xl p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div
              className={`w-14 h-14 bg-gradient-to-br ${provider.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300 shadow-sm`}
            >
              <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={provider.path} />
              </svg>
            </div>
            <p className="text-sm font-bold text-navy">{provider.name}</p>
            <p className="text-xs text-slate-muted mt-1">
              {provider.location}
            </p>
            {provider.name === "Global expansion" && (
              <span className="inline-block mt-2 text-[10px] font-semibold text-teal bg-teal-light px-2 py-0.5 rounded-full">
                Future phase
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-xs text-slate-muted leading-relaxed max-w-xl mx-auto">
          Provider profiles shown are examples for concept demonstration.
          Real partner profiles, verified packages and confirmed availability
          require direct validation by each provider.
        </p>
      </div>
    </div>
  );
}
