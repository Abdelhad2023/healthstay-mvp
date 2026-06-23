import { JourneyStep } from "@/types/healthstay";

export const journeySteps: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Explore programmes",
    description:
      "Browse our curated selection of Swiss neuro-health programmes. Each package includes transparent information on what is covered, what is not, and what to expect.",
    humanTouchpoint: false,
  },
  {
    stepNumber: 2,
    title: "Tell us about yourself",
    description:
      "Answer a few non-sensitive questions about your goals, preferences, and availability. No medical documents are required at this stage.",
    humanTouchpoint: false,
  },
  {
    stepNumber: 3,
    title: "Receive suggested options",
    description:
      "Our AI-assisted matching tool suggests potentially suitable programmes based on your preferences. This is not medical advice — it is a starting point for discussion.",
    humanTouchpoint: false,
  },
  {
    stepNumber: 4,
    title: "Coordinator review",
    description:
      "A human coordinator reviews your request, refines the options, and prepares a personalised proposal for clinic submission.",
    humanTouchpoint: true,
  },
  {
    stepNumber: 5,
    title: "Clinic validation",
    description:
      "The selected clinic or centre reviews your request to confirm whether the programme is suitable and available for your specific situation.",
    humanTouchpoint: true,
  },
  {
    stepNumber: 6,
    title: "Receive a transparent proposal",
    description:
      "You receive a clear proposal with the confirmed package, pricing, accommodation, transport, and coordination details — no hidden surprises.",
    humanTouchpoint: true,
  },
  {
    stepNumber: 7,
    title: "Prepare your stay",
    description:
      "Once confirmed, your coordinator helps with travel arrangements, accommodation booking, visa support letters, and any questions before departure.",
    humanTouchpoint: true,
  },
  {
    stepNumber: 8,
    title: "Arrival and welcome",
    description:
      "You are welcomed at the airport and transferred to your accommodation. Your coordinator ensures a smooth check-in and orientation.",
    humanTouchpoint: true,
  },
  {
    stepNumber: 9,
    title: "Programme delivery",
    description:
      "You begin your programme with the clinic or centre team. Your coordinator remains available for any questions or adjustments.",
    humanTouchpoint: true,
  },
  {
    stepNumber: 10,
    title: "Return and follow-up",
    description:
      "After the programme, you return home with a detailed report, post-stay plan, and access to digital follow-up sessions with your coordinator.",
    humanTouchpoint: true,
  },
];
