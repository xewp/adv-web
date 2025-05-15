import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#121212', // Match JDM theme
  color: '#ff0000', // Match JDM theme
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      backgroundColor: '#1a1a1a', // Match JDM theme
      color: 'white',
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      backgroundColor: '#1a1a1a', // Match JDM theme
      color: 'white',
    },
  }),
}));

function DashLayout() {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ 
      display: 'flex', 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      bgcolor: '#121212' // Match JDM theme
    }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: '#ff0000' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ bgcolor: '#ff0000' }} />
        <List>
          <ListItem 
            button 
            component={Link} 
            to="."
            selected={location.pathname === '/dashboard'}
            sx={{ 
              '&.Mui-selected': {
                bgcolor: 'rgba(255, 0, 0, 0.1)', 
                '&:hover': {
                  bgcolor: 'rgba(255, 0, 0, 0.2)',
                },
              },
              '&:hover': {
                bgcolor: 'rgba(255, 0, 0, 0.05)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#ff0000' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem 
            button 
            component={Link} 
            to="reports"
            selected={location.pathname.includes('/dashboard/reports')}
            sx={{ 
              '&.Mui-selected': {
                bgcolor: 'rgba(255, 0, 0, 0.1)', 
                '&:hover': {
                  bgcolor: 'rgba(255, 0, 0, 0.2)',
                },
              },
              '&:hover': {
                bgcolor: 'rgba(255, 0, 0, 0.05)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#ff0000' }}>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem 
            button 
            component={Link} 
            to="users"
            selected={location.pathname.includes('/dashboard/users')}
            sx={{ 
              '&.Mui-selected': {
                bgcolor: 'rgba(255, 0, 0, 0.1)', 
                '&:hover': {
                  bgcolor: 'rgba(255, 0, 0, 0.2)',
                },
              },
              '&:hover': {
                bgcolor: 'rgba(255, 0, 0, 0.05)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#ff0000' }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </List>
        <Divider sx={{ bgcolor: '#ff0000' }} />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${open ? drawerWidth : theme.spacing(7)})` },
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#121212', // Match JDM theme
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DrawerHeader />
        <Box sx={{ 
          flexGrow: 1, 
          width: '100%',
          height: 'calc(100vh - 64px)', // Subtract app bar height
          overflow: 'auto',
          padding: 0
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default DashLayout;