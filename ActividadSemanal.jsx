import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

  const data = [
    { day: 'Sat', deposit: 450, withdraw: 220 },
    { day: 'Sun', deposit: 350, withdraw: 120 },
    { day: 'Mon', deposit: 300, withdraw: 260 },
    { day: 'Tue', deposit: 480, withdraw: 340 },
    { day: 'Wed', deposit: 150, withdraw: 240 },
    { day: 'Thu', deposit: 400, withdraw: 260 },
    { day: 'Fri', deposit: 420, withdraw: 320 },
  ];

export default function ActividadSemanal() {
return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-600 font-semibold mb-4">Actividad Semanal</h3>
        <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} barCategoryGap={24}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            className="text-xs"
          />
          <YAxis  />
          <Bar
            dataKey="deposit"
            fill="#4FD1C5"
            radius={[10, 10, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="withdraw"
            fill="#4F46E5"
            radius={[10, 10, 0, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
