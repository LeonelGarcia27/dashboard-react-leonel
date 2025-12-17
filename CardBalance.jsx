export default function CardBalance() {
  return (
    <div className="flex gap-6">
      
      {/* CARD AZUL */}
      <div className="flex-1 min-h-[220px] rounded-2xl p-6 text-white bg-gradient-to-b from-blue-500 to-indigo-600 shadow">
        <p className="text-sm opacity-80">Balance</p>
        <h2 className="text-2xl font-bold">$5,756</h2>

        <div className="mt-6 flex justify-between text-sm">
          <div>
            <p className="opacity-70">CARD HOLDER</p>
            <p className="font-semibold">Eddy Cusuma</p>
          </div>
          <div>
            <p className="opacity-70">VALID THRU</p>
            <p className="font-semibold">12/22</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="tracking-widest">3778 **** **** 1234</span>
          <div className="w-10 h-6 bg-white/30 rounded-full" />
        </div>
      </div>

      {/* CARD BLANCA */}
      <div className="flex-1 min-h-[220px] rounded-2xl p-6 bg-white border shadow-sm">
        <p className="text-sm text-gray-500">Balance</p>
        <h2 className="text-xl font-bold text-gray-800">$5,756</h2>

        <div className="mt-6 flex justify-between text-sm">
          <div>
            <p className="text-gray-400">CARD HOLDER</p>
            <p className="font-semibold">Eddy Cusuma</p>
          </div>
          <div>
            <p className="text-gray-400">VALID THRU</p>
            <p className="font-semibold">12/22</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center text-gray-600">
          <span className="tracking-widest">3778 **** **** 1234</span>
          <div className="w-10 h-6 bg-gray-200 rounded-full" />
        </div>
      </div>

    </div>
  );
}
