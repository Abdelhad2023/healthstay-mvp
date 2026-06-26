'use client';

import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Explore programs",
    path: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    number: 2,
    title: "Submit a simple request",
    path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    number: 3,
    title: "Coordination team reviews",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    number: 4,
    title: "Clinic validates suitability",
    path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    number: 5,
    title: "You receive a proposal",
    path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    number: 6,
    title: "We prepare your stay",
    path: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    number: 7,
    title: "Post-stay support",
    path: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

const trustFeatures = [
  {
    title: "Human review",
    description: "Every request is reviewed by a real person",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Clinic validation",
    description: "Clinics confirm suitability before confirmation",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Transparent packages",
    description: "Clear inclusions, exclusions, and pricing",
    path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Personal support",
    description: "Dedicated coordinator from start to finish",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Your privacy",
    description: "No sensitive data stored in MVP",
    path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];

export default function HowItWorksStepper() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div>
      {/* Stepper */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-6 left-[calc(7%+24px)] right-[calc(7%+24px)] h-0.5 bg-gray-200" />
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-0 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex items-center w-full lg:w-auto lg:flex-1"
              onMouseEnter={() => setActiveStep(step.number)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex items-center gap-3 lg:flex-col lg:text-center w-full py-2 lg:py-0">
                <div
                  className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                    activeStep === step.number
                      ? "bg-navy border-navy text-white shadow-lg shadow-navy/20 scale-110"
                      : "bg-white border-card-border text-navy hover:border-teal/30 hover:shadow-md"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.path} />
                  </svg>
                </div>
                <div className="lg:mt-2 text-left lg:text-center">
                  <span
                    className={`text-xs font-bold ${
                      activeStep === step.number ? "text-teal" : "text-slate-muted"
                    }`}
                  >
                    Step {step.number}
                  </span>
                  <p className={`text-sm font-semibold leading-snug transition-colors ${
                    activeStep === step.number ? "text-navy" : "text-navy/80"
                  }`}>
                    {step.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center mx-1 flex-shrink-0 relative z-10">
                  <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trust features */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3">
        {trustFeatures.map((feature) => (
          <div
            key={feature.title}
            className="bg-white border border-card-border rounded-xl p-4 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-sky rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-light transition-colors">
              <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={feature.path} />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-navy">
              {feature.title}
            </h4>
            <p className="mt-1 text-xs text-slate-muted leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
