import { Zap, Bell } from "lucide-react";

export default function JobAlert() {
  return (
    <div className="mb-6">
      <div className="alert-banner mt-5 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <Zap size={24} color="#3b82f6" fill="#3b82f6" />
          <div>
            <div className="text-sm font-bold text-blue-800">New jobs are added daily!</div>
            <div className="text-[13px] text-blue-600">Don&apos;t miss your dream opportunity.</div>
          </div>
        </div>
        <button className="alert-banner-btn flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-semibold text-white">
          <Bell size={16} /> Create Job Alert
        </button>
      </div>
    </div>
  );
}
