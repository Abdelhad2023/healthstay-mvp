interface BadgeProps {
  label: string;
  variant?: "default" | "success" | "warning" | "category";
}

const variants: Record<string, string> = {
  default: "bg-gray-100 text-gray-700",
  success: "bg-green-50 text-green-700 border border-green-200",
  warning: "bg-amber-50 text-amber-700 border border-amber-200",
  category: "bg-gray-50 text-gray-500 border border-gray-200",
};

export default function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
