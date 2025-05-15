import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const barData = [
  { name: 'RX-7', Horsepower: 255, Torque: 217, Weight: 2800 },
  { name: 'Supra', Horsepower: 326, Torque: 325, Weight: 3450 },
  { name: 'GT-R', Horsepower: 276, Torque: 293, Weight: 3380 },
  { name: 'NSX', Horsepower: 290, Torque: 224, Weight: 3010 },
  { name: 'S2000', Horsepower: 240, Torque: 153, Weight: 2800 },
];

const pieData = [
  { name: 'Nissan', value: 3 },
  { name: 'Toyota', value: 2 },
  { name: 'Honda', value: 2 },
  { name: 'Mazda', value: 1 },
];

const COLORS = ['#ff1e1e', '#111111', '#4f4f4f', '#d4af37']; // red, black, gray, gold

function ReportsPage() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#ff1e1e', fontWeight: 'bold' }}>
        JDM Performance Reports
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: '20px', color: '#ffffff' }}>
        Horsepower / Torque / Weight Breakdown
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ff1e1e', color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#fff' }} />
          <Bar dataKey="Horsepower" fill="#ff1e1e" stackId="a" />
          <Bar dataKey="Torque" fill="#4f4f4f" stackId="a" />
          <Bar dataKey="Weight" fill="#d4af37" stackId="a" />
        </BarChart>
      </ResponsiveContainer>

      <Typography variant="h6" gutterBottom sx={{ marginTop: '40px', color: '#ffffff' }}>
        Brand Distribution (JDM Legends)
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#ff1e1e"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend wrapperStyle={{ color: '#fff' }} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ReportsPage;
  