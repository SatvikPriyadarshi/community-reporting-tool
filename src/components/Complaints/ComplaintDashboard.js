import { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Tooltip,
  Card,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import RefreshIcon from '@mui/icons-material/Refresh';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Analytics from '../Analytics';
import EmptyState from '../EmptyState';
import { TableSkeleton } from '../LoadingSkeleton';
import { useNavigate } from 'react-router-dom';

const ComplaintDashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      const storedComplaints = JSON.parse(localStorage.getItem('complaints') || '[]');
      
      if (storedComplaints.length === 0) {
        const mockComplaints = [
          {
            id: 'CMP001',
            location: 'Main Street',
            incidentType: 'Harassment',
            description: 'Verbal harassment incident',
            dateTime: '2025-10-28T14:30',
            status: 'Pending',
            submittedBy: 'user@example.com',
            submittedAt: '2025-10-28T14:35:00',
          },
          {
            id: 'CMP002',
            location: 'Park Avenue',
            incidentType: 'Theft',
            description: 'Bicycle stolen from parking area',
            dateTime: '2025-10-27T10:15',
            status: 'In Review',
            submittedBy: 'Anonymous',
            submittedAt: '2025-10-27T11:00:00',
          },
          {
            id: 'CMP003',
            location: 'Community Center',
            incidentType: 'Vandalism',
            description: 'Graffiti on building wall',
            dateTime: '2025-10-26T18:45',
            status: 'Resolved',
            submittedBy: 'admin@example.com',
            submittedAt: '2025-10-26T19:00:00',
          },
          {
            id: 'CMP004',
            location: 'Downtown Plaza',
            incidentType: 'Noise Complaint',
            description: 'Loud music late at night',
            dateTime: '2025-10-25T22:30',
            status: 'Pending',
            submittedBy: 'resident@example.com',
            submittedAt: '2025-10-25T23:00:00',
          },
          {
            id: 'CMP005',
            location: 'City Park',
            incidentType: 'Accident',
            description: 'Minor vehicle accident',
            dateTime: '2025-10-24T16:20',
            status: 'Resolved',
            submittedBy: 'witness@example.com',
            submittedAt: '2025-10-24T16:45:00',
          },
        ];
        setComplaints(mockComplaints);
      } else {
        setComplaints(storedComplaints);
      }
      setLoading(false);
    }, 800);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'In Review':
        return 'info';
      case 'Resolved':
        return 'success';
      default:
        return 'default';
    }
  };

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesStatus = filter === 'All' || complaint.status === filter;
    const matchesType = typeFilter === 'All' || complaint.incidentType === typeFilter;
    const matchesSearch =
      searchQuery === '' ||
      complaint.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.incidentType.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

  const incidentTypes = ['All', ...new Set(complaints.map((c) => c.incidentType))];

  const handleExport = () => {
    const csvContent = [
      ['ID', 'Type', 'Location', 'Date', 'Status', 'Submitted By'],
      ...filteredComplaints.map((c) => [
        c.id,
        c.incidentType,
        c.location,
        new Date(c.dateTime).toLocaleDateString(),
        c.status,
        c.submittedBy,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `complaints_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
      {/* Analytics Section */}
      {!loading && complaints.length > 0 && <Analytics complaints={complaints} />}

      {/* Main Dashboard */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)',
          border: '2px solid #e2e8f0',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: '#0f172a',
                  fontSize: { xs: '1.75rem', md: '2.125rem' },
                  mb: 1,
                }}
              >
                Complaint Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Track and monitor all reported incidents
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Tooltip title="Refresh Data">
                <IconButton
                  onClick={loadComplaints}
                  sx={{
                    bgcolor: '#f1f5f9',
                    '&:hover': { bgcolor: '#e2e8f0' },
                  }}
                >
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Export to CSV">
                <IconButton
                  onClick={handleExport}
                  disabled={filteredComplaints.length === 0}
                  sx={{
                    bgcolor: '#1e40af',
                    color: 'white',
                    '&:hover': { bgcolor: '#1e3a8a' },
                    '&:disabled': { bgcolor: '#e2e8f0' },
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Search and Filters */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <TextField
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ flex: { xs: '1 1 100%', md: 1 }, minWidth: { xs: '100%', md: 250 } }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl sx={{ minWidth: { xs: '48%', md: 180 }, flex: { xs: 1, md: 'none' } }} size="small">
              <InputLabel>Status</InputLabel>
              <Select value={filter} onChange={(e) => setFilter(e.target.value)} label="Status">
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Pending">🟡 Pending</MenuItem>
                <MenuItem value="In Review">🔵 In Review</MenuItem>
                <MenuItem value="Resolved">🟢 Resolved</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: { xs: '48%', md: 180 }, flex: { xs: 1, md: 'none' } }} size="small">
              <InputLabel>Type</InputLabel>
              <Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} label="Type">
                {incidentTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Table */}
        {loading ? (
          <TableSkeleton />
        ) : filteredComplaints.length === 0 ? (
          <EmptyState
            type={searchQuery || filter !== 'All' || typeFilter !== 'All' ? 'search' : 'complaints'}
            onAction={() => navigate('/report')}
            actionText="Submit First Complaint"
          />
        ) : (
          <>
            {/* Desktop Table View */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <TableContainer sx={{ borderRadius: 2, border: '2px solid', borderColor: '#e2e8f0' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: '#0f172a' }}>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>ID</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Type</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Location</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Date</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Submitted By</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredComplaints.map((complaint) => (
                      <TableRow
                        key={complaint.id}
                        hover
                        sx={{
                          '&:hover': {
                            bgcolor: 'action.hover',
                          },
                        }}
                      >
                        <TableCell sx={{ fontWeight: 600, color: '#1e40af' }}>{complaint.id}</TableCell>
                        <TableCell>{complaint.incidentType}</TableCell>
                        <TableCell>{complaint.location}</TableCell>
                        <TableCell>{new Date(complaint.dateTime).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Chip label={complaint.status} color={getStatusColor(complaint.status)} size="small" sx={{ fontWeight: 600 }} />
                        </TableCell>
                        <TableCell>{complaint.submittedBy}</TableCell>
                        <TableCell>
                          <Tooltip title="View Details">
                            <IconButton size="small" sx={{ color: '#1e40af' }}>
                              <VisibilityIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Mobile Card View */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              {filteredComplaints.map((complaint) => (
                <Paper
                  key={complaint.id}
                  elevation={2}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 3,
                    border: '2px solid #e2e8f0',
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e40af', fontSize: '1rem' }}>
                      {complaint.id}
                    </Typography>
                    <Chip label={complaint.status} color={getStatusColor(complaint.status)} size="small" sx={{ fontWeight: 600 }} />
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">Type</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{complaint.incidentType}</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">Location</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{complaint.location}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(complaint.dateTime).toLocaleDateString()}
                    </Typography>
                    <IconButton size="small" sx={{ color: '#1e40af' }}>
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>
              ))}
            </Box>

            <Box
              sx={{
                mt: 4,
                p: 2,
                borderRadius: 2,
                bgcolor: '#0f172a',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Showing {filteredComplaints.length} of {complaints.length} complaints
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  setFilter('All');
                  setTypeFilter('All');
                  setSearchQuery('');
                }}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Clear Filters
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default ComplaintDashboard;
