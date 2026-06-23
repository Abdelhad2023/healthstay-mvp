import { JourneyStep } from "@/types/healthstay";

interface JourneyTimelineProps {
  steps: JourneyStep[];
}

export default function JourneyTimeline({ steps }: JourneyTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
      <div className="space-y-8 sm:space-y-12">
        {steps.map((step) => (
          <div key={step.stepNumber} className="relative flex gap-6 sm:gap-8">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
                  step.humanTouchpoint
                    ? "bg-gray-900 border-gray-900 text-white"
                    : "bg-white border-gray-300 text-gray-500"
                }`}
              >
                {step.stepNumber}
              </div>
              {step.humanTouchpoint && (
                <span className="mt-1 text-[10px] font-medium text-gray-400 uppercase tracking-wider hidden sm:block">
                  Human
                </span>
              )}
            </div>
            <div className="flex-1 pb-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
