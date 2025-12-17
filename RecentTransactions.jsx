export default function RecentTransactions() {
  const transactions = [
    {
      name: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      color: "text-red-500",
      bg: "bg-yellow-100",
    },
    {
      name: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      color: "text-green-500",
      bg: "bg-blue-100",
    },
    {
      name: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      color: "text-green-500",
      bg: "bg-cyan-100",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow col-span-1">
      <h3 className="font-semibold text-gray-700 mb-4">
        Transacciones Recientes
      </h3>

      <ul className="space-y-4">
        {transactions.map((tx, i) => (
          <li key={i} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full ${tx.bg}`} />
              <div>
                <p className="text-sm font-medium">{tx.name}</p>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>
            <span className={`font-semibold ${tx.color}`}>
              {tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
