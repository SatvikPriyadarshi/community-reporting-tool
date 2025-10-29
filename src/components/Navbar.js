import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Chip, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ReportIcon from '@mui/icons-material/Report';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        borderBottom: '4px solid #1e40af',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Toolbar sx={{ py: { xs: 1, md: 1.5 }, px: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: { xs: 1, md: 1.5 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              borderRadius: 2,
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              boxShadow: '0 4px 12px rgba(30, 64, 175, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'rotate(360deg) scale(1.1)',
                boxShadow: '0 6px 20px rgba(30, 64, 175, 0.6)',
              },
            }}
          >
            <VerifiedUserIcon sx={{ fontSize: { xs: 24, md: 28 }, color: 'white' }} />
          </Box>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 800,
              letterSpacing: '-0.02em',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.35rem' },
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Community Connect
          </Typography>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 800,
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'block', sm: 'none' },
            }}
          >
            CW
          </Typography>
        </Box>
        
        {isLoggedIn && (
          <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 }, alignItems: 'center' }}>
            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button 
                color="inherit" 
                component={Link} 
                to="/" 
                startIcon={<HomeIcon />}
                sx={{
                  borderRadius: 2,
                  px: 2.5,
                  py: 1,
                  fontWeight: 600,
                  backgroundColor: isActive('/') ? 'rgba(30, 64, 175, 0.4)' : 'transparent',
                  border: isActive('/') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(30, 64, 175, 0.3)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/report" 
                startIcon={<ReportIcon />}
                sx={{
                  borderRadius: 2,
                  px: 2.5,
                  py: 1,
                  fontWeight: 600,
                  backgroundColor: isActive('/report') ? 'rgba(30, 64, 175, 0.4)' : 'transparent',
                  border: isActive('/report') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(30, 64, 175, 0.3)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Report
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/dashboard" 
                startIcon={<DashboardIcon />}
                sx={{
                  borderRadius: 2,
                  px: 2.5,
                  py: 1,
                  fontWeight: 600,
                  backgroundColor: isActive('/dashboard') ? 'rgba(30, 64, 175, 0.4)' : 'transparent',
                  border: isActive('/dashboard') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(30, 64, 175, 0.3)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Dashboard
              </Button>
            </Box>

            {/* Mobile Navigation - Icon Only */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 0.5 }}>
              <IconButton 
                color="inherit" 
                component={Link} 
                to="/"
                sx={{
                  backgroundColor: isActive('/') ? 'rgba(30, 64, 175, 0.4)' : 'transparent',
                  '&:hover': { backgroundColor: 'rgba(30, 64, 175, 0.3)' },
                }}
              >
                <HomeIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                component={Link} 
                to="/report"
                sx={{
                  backgroundColor: isActive('/report') ? 'rgba(30, 64, 175, 0.4)' : 'transparent',
                  '&:hover': { backgroundColor: 'rgba(30, 64, 175, 0.3)' },
                }}
              >
                <ReportIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                component={Link} 
                to="/dashboard"
                sx={{
                  backgroundColor: isActive('/dashboard') ? 'rgba(30, 64, 175, 0.4)' : 'transparent',
                  '&:hover': { backgroundColor: 'rgba(30, 64, 175, 0.3)' },
                }}
              >
                <DashboardIcon />
              </IconButton>
            </Box>
            
            {/* User Avatar - Hidden on small mobile */}
            <Chip
              avatar={
                <Avatar 
                  sx={{ 
                    bgcolor: '#1e40af',
                    color: 'white',
                    fontWeight: 700,
                    border: '2px solid white',
                    width: { xs: 28, md: 32 },
                    height: { xs: 28, md: 32 },
                  }}
                >
                  {user.name?.[0]}
                </Avatar>
              }
              label={user.name}
              sx={{ 
                ml: { xs: 0.5, md: 2 },
                display: { xs: 'none', sm: 'flex' },
                backgroundColor: 'rgba(30, 64, 175, 0.3)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(30, 64, 175, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
            />
            
            {/* Logout Button */}
            <Button 
              color="inherit" 
              onClick={handleLogout} 
              startIcon={<LogoutIcon sx={{ display: { xs: 'none', sm: 'block' } }} />}
              sx={{
                ml: { xs: 0.5, md: 1 },
                borderRadius: 2,
                px: { xs: 1.5, md: 2.5 },
                py: 1,
                minWidth: { xs: 'auto', md: 'auto' },
                fontWeight: 600,
                border: '1px solid rgba(239, 68, 68, 0.5)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  borderColor: 'rgba(239, 68, 68, 0.8)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(239, 68, 68, 0.3)',
                },
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Logout</Box>
              <LogoutIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
