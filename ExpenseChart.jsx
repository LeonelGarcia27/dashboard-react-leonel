import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Entertainment", value: 30, color: "#343C6A" },
  { name: "Bill Expense", value: 15, color: "#FC7900" },
  { name: "Investment", value: 20, color: "#FA00FF" },
  { name: "Others", value: 35, color: "#1814F3" },
];

export default function ExpenseChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(24,20,243,0.12)]">
      <h3 className="font-semibold text-gray-700 mb-6">
        Estadísticas de Gastos
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={4}
            stroke="#fff"
            strokeWidth={6}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* LEYENDA */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600">
              {item.value}% {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
