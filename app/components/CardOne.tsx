import { CircleCheck } from "lucide-react";

function CardOne() {
  return (
    <div className="bg-white font-sans rounded-xl p-3 shadow-2xl border border-gray-100 w-full space-y-1">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-gray-800">
          Payment Received
        </span>
      </div>
      <p className="flex items-center justify-start gap-4 text-sm font-bold text-gray-900">
        ₦150,000 <CircleCheck size={15} color="green" />
      </p>
      <p className="text-xs text-gray-400">Logo Design • Adaeze Co.</p>
    </div>
  );
}

export default CardOne;
