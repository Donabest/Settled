import { Bell } from "lucide-react";

function CardTwo() {
  return (
    <div className="bg-white  rounded-xl p-3 shadow-2xl border border-gray-100 w-full">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">
          <Bell size={15} />
        </div>
        <div className="font-sans">
          <p className="text-xs font-medium text-gray-800">Reminder sent</p>
          <p className="text-xs text-gray-400">Invoice due in 2 days</p>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
