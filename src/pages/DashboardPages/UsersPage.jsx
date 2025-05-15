  import React from 'react';
  import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Grid } from '@mui/material';
  import { Edit, Delete } from '@mui/icons-material';

  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', role: 'User', status: 'Active' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Viewer', status: 'Active' },
    { id: 5, name: 'Chris Brown', email: 'chris@example.com', role: 'Admin', status: 'Inactive' },
  ];

  function UsersPage() {
    const totalUsers = userData.length;
    const activeUsers = userData.filter(user => user.status === 'Active').length;
    const inactiveUsers = userData.filter(user => user.status === 'Inactive').length;
    const adminsPercentage = (userData.length > 0) ? (userData.filter(user => user.role === 'Admin').length / userData.length) * 100 : 0;

    const handleEdit = (userId) => {
      console.log('Edit user with id:', userId);
    };

    const handleDelete = (userId) => {
      console.log('Delete user with id:', userId);
    };

    return (
      <Box sx={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: '20px',
        overflow: 'auto',
        backgroundColor: '#121212', // dark background
        color: 'white'
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#ff1744', fontWeight: 'bold' }}>
          JDM Users List
        </Typography>

        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          <Grid item xs={12} md={4}>
            <Box sx={{
              backgroundColor: '#d50000', // Red
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              color: 'white',
              height: '100%',
              boxShadow: '0 4px 10px rgba(255, 23, 68, 0.5)'
            }}>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {totalUsers}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{
              backgroundColor: '#ff1744', // Accent red
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              color: 'white',
              height: '100%',
              boxShadow: '0 4px 10px rgba(255, 23, 68, 0.5)'
            }}>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {activeUsers} / Inactive: {inactiveUsers}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{
              backgroundColor: '#212121', // Dark gray/black
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#ff1744',
              height: '100%',
              border: '2px solid #ff1744',
              boxShadow: '0 4px 10px rgba(255, 23, 68, 0.3)'
            }}>
              <Typography variant="h6">Percentage of Admins</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {adminsPercentage.toFixed(2)}%
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Table Container */}
        <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e' }}>
          <Table aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#ff1744' }}>Name</TableCell>
                <TableCell sx={{ color: '#ff1744' }}>Email</TableCell>
                <TableCell sx={{ color: '#ff1744' }}>Role</TableCell>
                <TableCell sx={{ color: '#ff1744' }}>Status</TableCell>
                <TableCell align="center" sx={{ color: '#ff1744' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user) => (
                <TableRow key={user.id} sx={{ '&:hover': { backgroundColor: '#2c2c2c' } }}>
                  <TableCell sx={{ color: 'white' }}>{user.name}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{user.email}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{user.role}</TableCell>
                  <TableCell sx={{ color: user.status === 'Active' ? '#00e676' : '#ff1744' }}>
                    {user.status}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleEdit(user.id)} sx={{ color: '#29b6f6' }}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(user.id)} sx={{ color: '#ef5350' }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  export default UsersPage;
