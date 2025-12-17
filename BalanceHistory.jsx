import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area
} from "recharts";

const data = [
  { month: "Jul", value: 100 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 250 },
  { month: "Oct", value: 750 },
  { month: "Nov", value: 200 },
  { month: "Dec", value: 600 },
  { month: "Jan", value: 500 },
];

export default function BalanceHistory() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(79,70,229,0.15)]">
      <h3 className="font-semibold text-gray-700 mb-4">
        Histórico de Balance
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={false}
          />
          <Area fill="url(#colorUv)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
