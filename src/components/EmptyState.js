import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import ReportIcon from '@mui/icons-material/Report';

const EmptyState = ({ type = 'default', onAction, actionText }) => {
  const configs = {
    default: {
      icon: <InboxIcon sx={{ fontSize: 120, color: '#cbd5e1' }} />,
      title: 'No Data Available',
      description: 'There is nothing to display at the moment.',
    },
    complaints: {
      icon: <ReportIcon sx={{ fontSize: 120, color: '#cbd5e1' }} />,
      title: 'No Complaints Yet',
      description: 'Start by submitting your first complaint to help make the community safer.',
    },
    search: {
      icon: <SearchOffIcon sx={{ fontSize: 120, color: '#cbd5e1' }} />,
      title: 'No Results Found',
      description: 'Try adjusting your search or filter criteria.',
    },
  };

  const config = configs[type] || configs.default;

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        px: 3,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          p: 4,
          borderRadius: 4,
          bgcolor: '#f1f5f9',
          mb: 3,
        }}
      >
        {config.icon}
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#0f172a',
          mb: 2,
        }}
      >
        {config.title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: 4,
          maxWidth: 500,
          mx: 'auto',
        }}
      >
        {config.description}
      </Typography>
      {onAction && actionText && (
        <Button
          variant="contained"
          size="large"
          onClick={onAction}
          sx={{
            bgcolor: '#1e40af',
            '&:hover': {
              bgcolor: '#1e3a8a',
            },
          }}
        >
          {actionText}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;
