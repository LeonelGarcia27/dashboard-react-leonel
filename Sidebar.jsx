import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  User,
  TrendingUp,
  CreditCard,
  Banknote,
  Wrench,
  Gift,
  Settings
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { label: "Transacciones", path: "/transacciones", icon: ArrowLeftRight },
    { label: "Cuentas", path: "/cuentas", icon: User },
    { label: "Inversiones", path: "/inversiones", icon: TrendingUp },
    { label: "Tarjetas", path: "/tarjetas", icon: CreditCard },
    { label: "Préstamos", path: "/prestamos", icon: Banknote },
    { label: "Servicios", path: "/servicios", icon: Wrench },
    { label: "Lealtad", path: "/lealtad", icon: Gift },
    { label: "Ajustes", path: "/ajustes", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white min-h-screen border-r px-6 py-8">
      
      <div className="mb-12 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <LayoutDashboard className="text-white" size={20} />
        </div>
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>

      <ul className="space-y-2">
        {items.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `relative flex items-center gap-4 px-4 py-3 rounded-xl text-sm transition
              ${
                isActive
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
              }`
            }
          >
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r
              ${window.location.pathname === path ? "bg-blue-600" : "bg-transparent"}`}
            />

            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </ul>
    </aside>
  );
}
