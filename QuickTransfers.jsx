import { Send } from "lucide-react";

const users = [
  { name: "Livia Bator", role: "CEO" },
  { name: "Randy Press", role: "Director" },
  { name: "Workman", role: "Designer" },
];

export default function QuickTransfers() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-semibold text-gray-700 mb-4">
        Transferencias Rápidas
      </h3>

      <div className="flex gap-6 mb-6">
        {users.map((u) => (
          <div key={u.name} className="text-center">
            <img
              src={`https://i.pravatar.cc/50?u=${u.name}`}
              className="w-12 h-12 rounded-full mx-auto mb-2"
            />
            <p className="text-sm font-medium text-gray-600">{u.name}</p>
            <p className="text-xs text-gray-400">{u.role}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center text-gray-600 gap-4">
        <input
          type="text"
          placeholder="Write Amount"
          className="flex-1 px-4 py-2 rounded-full bg-gray-100 text-sm outline-none"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2">
          Send <Send size={16} />
        </button>
      </div>
    </div>
  );
}
