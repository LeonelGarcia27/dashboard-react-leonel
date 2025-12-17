export default function TransactionsTable() {
  const rows = [
    { desc: "Spotify Subscription", ref: "#12548796", type: "Shopping", card: "1234 ****", date: "28 Jan, 12:30 AM", amount: "-$2,500" },
    { desc: "Freepik Sales", ref: "#12548796", type: "Transfer", card: "1234 ****", date: "25 Jan, 10:40 PM", amount: "+$750" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-semibold mb-4">Transacciones Recientes</h3>

      <table className="w-full text-sm text-gray-600">
        <thead className="text-gray-400 border-b">
          <tr>
            <th className="text-left py-3">Descripción</th>
            <th>Referencia</th>
            <th>Tipo</th>
            <th>Tarjeta</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Recibo</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="py-4">{r.desc}</td>
              <td>{r.ref}</td>
              <td>{r.type}</td>
              <td>{r.card}</td>
              <td>{r.date}</td>
              <td className={r.amount.startsWith("-") ? "text-red-500" : "text-green-500"}>
                {r.amount}
              </td>
              <td>
                <button className="px-4 py-1 border rounded-full text-blue-600 text-xs">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
