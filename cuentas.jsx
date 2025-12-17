import Sidebar from "../components/Sidebar";
import CardBalance from "../components/CardBalance";
import ActividadSemanal from "../components/ActividadSemanal";
import ExpenseChart from "../components/ExpenseChart";
import BalanceHistory from "../components/BalanceHistory";
import RecentTransactions from "../components/RecentTransactions";
import Topbar from "../components/Topbar";
import QuickTransfers from "../components/QuickTransfers";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-x-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        
        <div className="px-8 py-6 space-y-8">
          
          <Topbar />

          <main className="p-8 space-y-8">

            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Mis Tarjetas
              </h2>
              <span className="text-sm text-blue-600 cursor-pointer">
                Ver Todas
              </span>
            </div>

            <div className="grid grid-cols-[4fr_2fr] gap-6">
              <CardBalance />
              <RecentTransactions />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <ActividadSemanal />
              <ExpenseChart />
            </div>

            <div className="grid grid-cols-[1fr_2fr] gap-6">
              <QuickTransfers />
              <BalanceHistory />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
