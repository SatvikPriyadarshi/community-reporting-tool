import React from 'react';
import { Box } from '@mui/material';
import ComplaintDashboard from '../components/Complaints/ComplaintDashboard';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <ComplaintDashboard />
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
