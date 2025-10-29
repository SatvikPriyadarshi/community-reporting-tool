import React from 'react';
import { Box } from '@mui/material';
import ComplaintForm from '../components/Complaints/ComplaintForm';
import Footer from '../components/Footer';

const Report = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <ComplaintForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default Report;
