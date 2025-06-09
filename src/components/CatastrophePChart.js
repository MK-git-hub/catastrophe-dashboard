import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FF6666'];

const catastropheData = [
  { name: 'Earthquake', value: 12 },
  { name: 'Flood', value: 20 },
  { name: 'Hurricane', value: 8 },
  { name: 'Wildfire', value: 15 },
  { name: 'Tsunami', value: 5 },
  { name: 'Drought', value: 10 },
];

function CatastrophePieChart() {
  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2>Catastrophe Types Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={catastropheData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {catastropheData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CatastrophePieChart;
