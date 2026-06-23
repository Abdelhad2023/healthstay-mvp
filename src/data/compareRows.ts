import { CompareRow } from "@/types/healthstay";

export const compareRows: CompareRow[] = [
  {
    label: "Main goal",
    prevention: "Early detection and lifestyle optimisation",
    secondOpinion: "Expert review of existing medical information",
    rehabilitation: "Structured recovery after a neurological event",
  },
  {
    label: "Best for",
    prevention: "Proactive individuals, no current diagnosis needed",
    secondOpinion: "Patients with existing medical records or diagnosis",
    rehabilitation: "Recovery after stroke, brain injury, or neuro-condition",
  },
  {
    label: "Typical duration",
    prevention: "3–5 days",
    secondOpinion: "Remote or 1–2 days on-site",
    rehabilitation: "7–14 days (extendable)",
  },
  {
    label: "Remote possible",
    prevention: "No — on-site only",
    secondOpinion: "Yes — remote or on-site",
    rehabilitation: "No — on-site only",
  },
  {
    label: "Accommodation",
    prevention: "Premium on-site or partner hotel",
    secondOpinion: "Optional (if travelling)",
    rehabilitation: "Private room + accompanying person option",
  },
  {
    label: "Coordinator support",
    prevention: "Dedicated coordinator",
    secondOpinion: "Scheduling and logistics support",
    rehabilitation: "Full-time dedicated coordinator",
  },
  {
    label: "Post-stay follow-up",
    prevention: "Digital report and follow-up",
    secondOpinion: "Medical summary only",
    rehabilitation: "4-week digital follow-up included",
  },
  {
    label: "Human validation required",
    prevention: "Yes — coordinator + clinic review",
    secondOpinion: "Yes — medical document review required",
    rehabilitation: "Yes — clinical suitability assessment",
  },
  {
    label: "Price visibility",
    prevention: "Indicative price, confirmed after validation",
    secondOpinion: "Indicative price, confirmed after review",
    rehabilitation: "On request — depends on clinical needs",
  },
  {
    label: "Medical documents required",
    prevention: "Not required at request stage",
    secondOpinion: "Required later for specialist review",
    rehabilitation: "Required later for suitability assessment",
  },
  {
    label: "Booking type",
    prevention: "Request-based confirmation",
    secondOpinion: "Request-based confirmation",
    rehabilitation: "Request-based confirmation",
  },
];
