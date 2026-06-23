import { CompareRow } from "@/types/healthstay";

interface CompareTableProps {
  rows: CompareRow[];
}

export default function CompareTable({ rows }: CompareTableProps) {
  const headers = [
    { key: "label", label: "" },
    { key: "prevention", label: "Brain Health Prevention Stay" },
    { key: "secondOpinion", label: "Neuro Second Opinion Journey" },
    { key: "rehabilitation", label: "Neuro-Rehabilitation Stay" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            {headers.map((header) => (
              <th
                key={header.key}
                className={`py-3 px-4 text-left font-semibold text-gray-900 ${
                  header.key === "label" ? "w-1/4" : "w-1/4"
                }`}
              >
                {header.key === "label" ? "" : header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-gray-100 last:border-0">
              <td className="py-3 px-4 text-gray-900 font-medium">
                {row.label}
              </td>
              <td className="py-3 px-4 text-gray-600">{row.prevention}</td>
              <td className="py-3 px-4 text-gray-600">{row.secondOpinion}</td>
              <td className="py-3 px-4 text-gray-600">{row.rehabilitation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
