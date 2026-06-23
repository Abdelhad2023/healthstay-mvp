"use client";

import { useState, FormEvent } from "react";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBox from "@/components/DisclaimerBox";

const contactIntents = [
  {
    title: "I am exploring a health stay",
    description:
      "Looking for a Swiss neuro-health programme? Submit a request and a human coordinator will review your preferences.",
    icon: "👤",
  },
  {
    title: "I represent a clinic or health center",
    description:
      "Interested in listing your programmes on HealthStay? Get in touch to discuss our pilot partnership model.",
    icon: "🏥",
  },
  {
    title: "I want to discuss a pilot",
    description:
      "Want to explore a Swiss neuro-health pilot for your organisation? Let's talk about a structured engagement.",
    icon: "🤝",
  },
];

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  contactAs: string;
  message: string;
  consent: boolean;
}

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  organization: "",
  contactAs: "",
  message: "",
  consent: false,
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.contactAs) newErrors.contactAs = "Please select an option";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent) newErrors.consent = "You must confirm before submitting";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-xl p-8 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-gray-900">
              Your message has been prepared
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              In a production version, the HealthStay team would review it before responding.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              This is a prototype. No data has been stored or sent.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact HealthStay"
          subtitle="For pilot discussions, clinic partnerships, or international health journey requests."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactIntents.map((intent) => (
            <div
              key={intent.title}
              className="bg-white border border-gray-100 rounded-xl p-5 text-center"
            >
              <span className="text-2xl" aria-hidden="true">{intent.icon}</span>
              <h3 className="mt-3 text-sm font-semibold text-gray-900">{intent.title}</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">{intent.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="contactAs" className="block text-sm font-medium text-gray-700">
                I am contacting as <span className="text-red-400">*</span>
              </label>
              <select
                id="contactAs"
                name="contactAs"
                value={formData.contactAs}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
              >
                <option value="">Select an option</option>
                <option value="patient">Patient or family member</option>
                <option value="clinic">Clinic or health center</option>
                <option value="partner">Partner or investor</option>
                <option value="other">Other</option>
              </select>
              {errors.contactAs && <p className="mt-1 text-xs text-red-500">{errors.contactAs}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
                I understand this prototype does not provide medical advice and does not create a confirmed booking. <span className="text-red-400">*</span>
              </label>
            </div>
            {errors.consent && <p className="text-xs text-red-500 -mt-3">{errors.consent}</p>}

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="mt-10 space-y-4">
          <DisclaimerBox variant="prototype" />
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
              Emergency disclaimer
            </p>
            <p className="mt-1 text-xs text-amber-700 leading-relaxed">
              This prototype does not provide emergency support, diagnosis, treatment decisions, or confirmed medical booking. If you are experiencing a medical emergency, contact your local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
