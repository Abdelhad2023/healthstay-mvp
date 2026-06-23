"use client";

import { useState, FormEvent } from "react";
import { programs } from "@/data/programs";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  preferredLanguage: string;
  interestedProgram: string;
  preferredDestination: string;
  preferredTiming: string;
  accompanyingPersons: string;
  accommodationPreference: string;
  message: string;
  consent: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  countryOfResidence: "",
  preferredLanguage: "",
  interestedProgram: "",
  preferredDestination: "Switzerland",
  preferredTiming: "",
  accompanyingPersons: "0",
  accommodationPreference: "",
  message: "",
  consent: false,
};

export default function RequestForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
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
    if (!formData.interestedProgram) newErrors.interestedProgram = "Please select a programme";
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
      <div className="bg-white border border-gray-100 rounded-xl p-8 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-gray-900">
          Your request has been prepared
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          In a production version, a human coordinator would review this request before contacting any clinic.
          You would receive a personalised proposal after clinic validation.
        </p>
        <p className="mt-4 text-xs text-gray-400">
          This is a prototype demo. No data has been stored or sent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone / WhatsApp <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="countryOfResidence" className="block text-sm font-medium text-gray-700">
            Country of residence
          </label>
          <input
            type="text"
            id="countryOfResidence"
            name="countryOfResidence"
            value={formData.countryOfResidence}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700">
            Preferred language
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            <option value="">Select a language</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ar">Arabic</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
            <option value="pt">Portuguese</option>
            <option value="tr">Turkish</option>
          </select>
        </div>

        <div>
          <label htmlFor="interestedProgram" className="block text-sm font-medium text-gray-700">
            Interested programme <span className="text-red-400">*</span>
          </label>
          <select
            id="interestedProgram"
            name="interestedProgram"
            value={formData.interestedProgram}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            <option value="">Select a programme</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
          {errors.interestedProgram && <p className="mt-1 text-xs text-red-500">{errors.interestedProgram}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDestination" className="block text-sm font-medium text-gray-700">
            Preferred destination
          </label>
          <input
            type="text"
            id="preferredDestination"
            name="preferredDestination"
            value={formData.preferredDestination}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="preferredTiming" className="block text-sm font-medium text-gray-700">
            Preferred timing
          </label>
          <select
            id="preferredTiming"
            name="preferredTiming"
            value={formData.preferredTiming}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            <option value="">Select timing</option>
            <option value="within-1-month">Within 1 month</option>
            <option value="within-3-months">Within 3 months</option>
            <option value="within-6-months">Within 6 months</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="accompanyingPersons" className="block text-sm font-medium text-gray-700">
            Accompanying persons
          </label>
          <select
            id="accompanyingPersons"
            name="accompanyingPersons"
            value={formData.accompanyingPersons}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            {[0, 1, 2, 3, "4+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="accommodationPreference" className="block text-sm font-medium text-gray-700">
            Accommodation preference
          </label>
          <select
            id="accommodationPreference"
            name="accommodationPreference"
            value={formData.accommodationPreference}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            <option value="">Select preference</option>
            <option value="on-site">On-site clinic accommodation</option>
            <option value="hotel">Partner hotel</option>
            <option value="both">Either is fine</option>
            <option value="not-needed">Not needed</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Short message <span className="text-gray-400">(optional, non-medical)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="E.g. I am looking for a brain health prevention stay for myself in July, with accommodation for two people."
          className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
        />
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
          I understand that this request is not medical advice and must be reviewed by a human coordinator and the selected clinic.
          No medical decisions will be made based on this form. <span className="text-red-400">*</span>
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-500 -mt-4">{errors.consent}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Submit request
      </button>
    </form>
  );
}
