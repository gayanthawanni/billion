import { Monitor, FileText, Send, Puzzle, UserCheck, Pencil } from "lucide-react";

const browseCategories = [
  { name: "IT & Software", count: "542", icon: <Monitor size={22} />, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Accounting", count: "328", icon: <FileText size={22} />, color: "text-green-600", bg: "bg-green-50" },
  { name: "Sales & Marketing", count: "410", icon: <Send size={20} className="-rotate-[15deg]" />, color: "text-orange-600", bg: "bg-orange-50" },
  { name: "Engineering", count: "276", icon: <Puzzle size={22} />, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "HR & Admin", count: "198", icon: <UserCheck size={22} />, color: "text-rose-600", bg: "bg-rose-50" },
  { name: "Design & Creative", count: "74", icon: <Pencil size={22} />, color: "text-teal-600", bg: "bg-teal-50" },
];

export const Browse_jobs_categories = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-extrabold text-[#1a1a2e]">Browse Jobs by Category</h2>
        {/* Simple text label instead of a link/dropdown trigger */}
        <span className="text-sm font-semibold text-slate-400">
          Total Categories
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {browseCategories.map((cat) => (
          <div 
            key={cat.name} 
            className={`${cat.bg} p-5 rounded-2xl flex flex-col gap-2 border border-black/5`}
          >
            <div className={cat.color}>
              {cat.icon}
            </div>
            <div className="font-bold text-sm text-slate-800">
              {cat.name}
            </div>
            {/* Simple count text, no icon/chevron */}
            <div className="text-xs font-medium text-slate-500">
              {cat.count} Jobs
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};