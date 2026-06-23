interface DisclaimerBoxProps {
  variant?: "medical" | "prototype" | "partnership" | "pilot";
}

const disclaimers: Record<string, { title: string; text: string }> = {
  medical: {
    title: "Not medical advice",
    text: "The information on this platform is for informational and orientation purposes only. It does not constitute medical advice, diagnosis, treatment recommendation, or prognosis. Always consult a qualified medical professional for medical decisions.",
  },
  prototype: {
    title: "Prototype disclaimer",
    text: "This is a concept prototype for demonstration purposes. No real medical services are offered through this platform. Clinic profiles shown are fictional or generic representations unless explicitly marked as verified.",
  },
  partnership: {
    title: "No partnership claim",
    text: "This platform does not claim official partnership, endorsement, or affiliation with any clinic or centre unless explicitly stated and verified. Prototype profiles are for concept demonstration only.",
  },
  pilot: {
    title: "Pilot concept disclaimer",
    text: "This is an independent prototype for concept demonstration. It is not affiliated with, endorsed by, or operated by any specific clinic, hospital, or health center. Any real partner profile, package, or patient workflow would require direct validation by the relevant medical organization.",
  },
};

export default function DisclaimerBox({ variant = "medical" }: DisclaimerBoxProps) {
  const disclaimer = disclaimers[variant];
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
      <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
        {disclaimer.title}
      </p>
      <p className="mt-1 text-xs text-amber-700 leading-relaxed">
        {disclaimer.text}
      </p>
    </div>
  );
}
