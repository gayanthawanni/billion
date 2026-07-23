import { ArrowRight } from "lucide-react";
import Link from "next/link";

const topCompanies = [
  { name: "Dialog Axiata", logo: "D", color: "#c62828" },
  { name: "MAS Holdings", logo: "M", color: "#880e4f" },
  { name: "Virtusa", logo: "V", color: "#283593" },
  { name: "WSO2", logo: "W", color: "#1a6eb5" },
  { name: "Hatton National Bank", logo: "H", color: "#e65100" },
  { name: "Sampath Bank", logo: "S", color: "#00695c" },
  { name: "SoftLogic", logo: "SL", color: "#4527a0" },
  { name: "Unilever SriLanka", logo: "U", color: "#1565c0" },
];

export const Top_companies = () => {
  return (
    <div className="mt-12">
      <div className="section-header mb-5 flex items-center justify-between">
        <h2 style={{ fontWeight: 800, fontSize: 18, color: "#1a1a2e" }}>Top Companies Hiring</h2>
        <Link href="/companies" className="flex items-center gap-1 text-[13px] font-semibold text-blue-600 no-underline">
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {topCompanies.map(co => (
          <div 
            key={co.name} 
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-5 shadow-sm"
          >
            <div 
              className="flex h-[52px] w-[52px] items-center justify-center rounded-xl text-base font-extrabold text-white"
              style={{ background: co.color }}
            >
              {co.logo}
            </div>
            <div className="text-center text-[11px] leading-tight text-slate-700">{co.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};