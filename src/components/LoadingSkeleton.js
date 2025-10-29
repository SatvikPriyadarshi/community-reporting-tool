import React from 'react';
import { Box, Skeleton, Card, CardContent } from '@mui/material';

export const TableSkeleton = () => {
  return (
    <Box>
      {[1, 2, 3, 4, 5].map((item) => (
        <Box key={item} sx={{ mb: 2 }}>
          <Skeleton variant="rectangular" height={60} sx={{ borderRadius: 2 }} />
        </Box>
      ))}
    </Box>
  );
};

export const CardSkeleton = () => {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent sx={{ p: 4 }}>
        <Skeleton variant="circular" width={80} height={80} sx={{ mx: 'auto', mb: 2 }} />
        <Skeleton variant="text" height={40} sx={{ mb: 1 }} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
      </CardContent>
    </Card>
  );
};

export const FormSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="text" height={60} sx={{ mb: 3 }} />
      <Skeleton variant="rectangular" height={56} sx={{ mb: 2, borderRadius: 2 }} />
      <Skeleton variant="rectangular" height={56} sx={{ mb: 2, borderRadius: 2 }} />
      <Skeleton variant="rectangular" height={120} sx={{ mb: 2, borderRadius: 2 }} />
      <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 2 }} />
    </Box>
  );
};
