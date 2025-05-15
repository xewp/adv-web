import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

// JDM car data
const carData = [
  { id: 1, name: 'Nissan GT-R', horsepower: 565, torque: 467, topSpeed: 205, price: 115000 },
  { id: 2, name: 'Toyota Supra', horsepower: 382, torque: 368, topSpeed: 155, price: 55000 },
  { id: 3, name: 'Honda NSX', horsepower: 573, torque: 476, topSpeed: 191, price: 169500 },
  { id: 4, name: 'Mazda RX-7', horsepower: 280, torque: 231, topSpeed: 158, price: 35000 },
  { id: 5, name: 'Subaru WRX STI', horsepower: 310, torque: 290, topSpeed: 160, price: 42000 },
];

const speedData = [
  { name: 'Jan', 'GT-R': 165, 'Supra': 142, 'NSX': 160 },
  { name: 'Feb', 'GT-R': 178, 'Supra': 146, 'NSX': 172 },
  { name: 'Mar', 'GT-R': 185, 'Supra': 151, 'NSX': 178 },
  { name: 'Apr', 'GT-R': 195, 'Supra': 153, 'NSX': 182 },
  { name: 'May', 'GT-R': 201, 'Supra': 155, 'NSX': 188 },
  { name: 'Jun', 'GT-R': 205, 'Supra': 155, 'NSX': 191 },
];

const radarData = [
  { subject: 'Horsepower', GT_R: 565, Supra: 382, fullMark: 600 },
  { subject: 'Torque', GT_R: 467, Supra: 368, fullMark: 600 },
  { subject: 'Top Speed', GT_R: 205, Supra: 155, fullMark: 250 },
  { subject: 'Price', GT_R: 115000, Supra: 55000, fullMark: 200000 },
];

function DashboardPage() {
  const totalCars = carData.length;
  const averageHorsepower = Math.round(carData.reduce((acc, car) => acc + car.horsepower, 0) / totalCars);
  const topPerformer = carData.reduce((prev, current) => (prev.horsepower > current.horsepower) ? prev : current);

  const theme = useTheme();

  const statCardStyle = {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    color: 'white',
    border: '1px solid #333',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(255, 0, 0, 0.2)',
      borderColor: '#ff0000'
    }
  };

  const chartContainerStyle = {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '12px',
    color: 'white',
    border: '1px solid #333',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(255, 0, 0, 0.2)',
      borderColor: '#ff0000'
    }
  };

  return (
    <Box sx={{
      width: '100%',
      backgroundColor: '#121212',
      color: '#ffffff',
      padding: 3,
      minHeight: '100vh',
    }}>
      <Typography variant="h4" sx={{ 
        color: '#ff0000', 
        fontWeight: 'bold', 
        mb: 4,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        JDM Performance Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Stat Cards */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={statCardStyle}>
            <DirectionsCarIcon sx={{ fontSize: 50, color: '#ff0000', mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 1 }}>Total JDM Models</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ff0000' }}>
              {totalCars}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={statCardStyle}>
            <SpeedIcon sx={{ fontSize: 50, color: '#ff0000', mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 1 }}>Average Horsepower</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ff0000' }}>
              {averageHorsepower} HP
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={statCardStyle}>
            <LocalGasStationIcon sx={{ fontSize: 50, color: '#ff0000', mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 1 }}>Top Performer</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ff0000' }}>
              {topPerformer.name}
            </Typography>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...chartContainerStyle, height: 400 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Horsepower Comparison</Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={carData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    borderColor: '#ff0000',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Legend />
                <Bar dataKey="horsepower" fill="#ff0000" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...chartContainerStyle, height: 400 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Top Speed Evolution</Typography>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={speedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    borderColor: '#ff0000',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="GT-R" stroke="#ff0000" strokeWidth={2} dot={{ fill: '#ff0000' }} />
                <Line type="monotone" dataKey="Supra" stroke="#00ffcc" strokeWidth={2} dot={{ fill: '#00ffcc' }} />
                <Line type="monotone" dataKey="NSX" stroke="#ffcc00" strokeWidth={2} dot={{ fill: '#ffcc00' }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Radar Charts */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...chartContainerStyle, height: 400 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>GT-R vs Supra Comparison</Typography>
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" stroke="#fff" />
                <PolarRadiusAxis stroke="#fff" />
                <Radar name="GT-R" dataKey="GT_R" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
                <Radar name="Supra" dataKey="Supra" stroke="#00ffcc" fill="#00ffcc" fillOpacity={0.4} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...chartContainerStyle, height: 400 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Radar Performance Overview</Typography>
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" stroke="#fff" />
                <PolarRadiusAxis stroke="#fff" />
                <Radar name="Supra" dataKey="Supra" stroke="#ffcc00" fill="#ffcc00" fillOpacity={0.4} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardPage;