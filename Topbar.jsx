import { Search, Bell, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="relative w-96 text-gray-600">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
        <input
          type="text"
          placeholder="Buscar"
          className="w-full pl-12 pr-4 py-2 rounded-full bg-white shadow text-sm focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 rounded-full shadow cursor-pointer">
          <Settings size={18} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 rounded-full shadow cursor-pointer">
          <Bell size={18} />
        </div>
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
