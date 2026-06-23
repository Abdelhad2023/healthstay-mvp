export default function HumanValidationBanner() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">!</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Human validation required
          </h3>
          <p className="mt-1 text-sm text-gray-600 leading-relaxed">
            This programme cannot be booked instantly. A human coordinator reviews your request, and the selected clinic must validate your suitability before any confirmation. This ensures your safety and the appropriateness of the programme.
          </p>
        </div>
      </div>
    </div>
  );
}
