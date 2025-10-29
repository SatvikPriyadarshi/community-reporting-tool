import React from 'react';
import { Box, Grid, Paper, Typography, LinearProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const Analytics = ({ complaints }) => {
  const stats = {
    total: complaints.length,
    pending: complaints.filter((c) => c.status === 'Pending').length,
    inReview: complaints.filter((c) => c.status === 'In Review').length,
    resolved: complaints.filter((c) => c.status === 'Resolved').length,
  };

  const types = complaints.reduce((acc, complaint) => {
    acc[complaint.incidentType] = (acc[complaint.incidentType] || 0) + 1;
    return acc;
  }, {});

  const StatCard = ({ title, value, icon, color, percentage }) => (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: '2px solid #e2e8f0',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
          borderColor: color,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, color }}>
            {value}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: `${color}15`,
            color: color,
          }}
        >
          {icon}
        </Box>
      </Box>
      {percentage !== undefined && (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="caption" color="text.secondary">
              Progress
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {percentage}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: '#e2e8f0',
              '& .MuiLinearProgress-bar': {
                bgcolor: color,
                borderRadius: 3,
              },
            }}
          />
        </Box>
      )}
    </Paper>
  );

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0f172a' }}>
        Analytics Overview
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Complaints"
            value={stats.total}
            icon={<TrendingUpIcon sx={{ fontSize: 32 }} />}
            color="#1e40af"
            percentage={100}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pending"
            value={stats.pending}
            icon={<PendingIcon sx={{ fontSize: 32 }} />}
            color="#f59e0b"
            percentage={stats.total ? Math.round((stats.pending / stats.total) * 100) : 0}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="In Review"
            value={stats.inReview}
            icon={<WarningIcon sx={{ fontSize: 32 }} />}
            color="#3b82f6"
            percentage={stats.total ? Math.round((stats.inReview / stats.total) * 100) : 0}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Resolved"
            value={stats.resolved}
            icon={<CheckCircleIcon sx={{ fontSize: 32 }} />}
            color="#10b981"
            percentage={stats.total ? Math.round((stats.resolved / stats.total) * 100) : 0}
          />
        </Grid>
      </Grid>

      {/* Incident Types */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          border: '2px solid #e2e8f0',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#0f172a' }}>
          Complaints by Type
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {Object.entries(types).map(([type, count]) => {
            const percentage = stats.total ? Math.round((count / stats.total) * 100) : 0;
            return (
              <Box key={type}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {count} ({percentage}%)
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={percentage}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: '#e2e8f0',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#1e40af',
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default Analytics;
