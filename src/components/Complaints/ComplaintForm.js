import { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Alert,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Chip,
  LinearProgress,
  Card,
  CardMedia,
  Grid,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ImageIcon from '@mui/icons-material/Image';
import { useNavigate } from 'react-router-dom';

const ComplaintForm = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    location: '',
    incidentType: '',
    description: '',
    dateTime: new Date().toISOString().slice(0, 16),
    anonymous: false,
    file: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const steps = ['Basic Info', 'Details', 'Review'];
  const incidentTypes = [
    'Harassment',
    'Theft',
    'Accident',
    'Vandalism',
    'Noise Complaint',
    'Other',
  ];

  // Auto-save to localStorage
  useEffect(() => {
    const savedDraft = localStorage.getItem('complaintDraft');
    if (savedDraft) {
      const draft = JSON.parse(savedDraft);
      setFormData(draft);
      setCharCount(draft.description.length);
    }
  }, []);

  useEffect(() => {
    if (formData.location || formData.description) {
      localStorage.setItem('complaintDraft', JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData({
      ...formData,
      [name]: newValue,
    });

    if (name === 'description') {
      setCharCount(value.length);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        file: file,
      });

      // Create image preview
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData({
        ...formData,
        file: file,
      });

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeFile = () => {
    setFormData({ ...formData, file: null });
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.location || !formData.incidentType || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const complaint = {
        id: 'CMP' + Date.now(),
        ...formData,
        submittedBy: formData.anonymous ? 'Anonymous' : user.email,
        status: 'Pending',
        submittedAt: new Date().toISOString(),
      };

      const existingComplaints = JSON.parse(localStorage.getItem('complaints') || '[]');
      existingComplaints.push(complaint);
      localStorage.setItem('complaints', JSON.stringify(existingComplaints));

      // Clear draft
      localStorage.removeItem('complaintDraft');

      setSuccess('Complaint submitted successfully! Redirecting to dashboard...');
      setLoading(false);

      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 1500);
  };

  const handleNext = () => {
    if (activeStep === 0 && (!formData.location || !formData.incidentType)) {
      setError('Please fill in location and incident type');
      return;
    }
    if (activeStep === 1 && !formData.description) {
      setError('Please provide a description');
      return;
    }
    setError('');
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '2px solid #e2e8f0',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              p: 2,
              borderRadius: 3,
              bgcolor: 'rgba(30, 64, 175, 0.1)',
              mb: 2,
            }}
          >
            <DescriptionIcon sx={{ fontSize: 48, color: '#1e40af' }} />
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: '#0f172a',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Submit a Complaint
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: '1.1rem', lineHeight: 1.6, maxWidth: 600, mx: 'auto' }}
          >
            Help us make the community safer by reporting incidents
          </Typography>
        </Box>

        {/* Stepper */}
        <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            {success}
          </Alert>
        )}

        {loading && <LinearProgress sx={{ mb: 3, borderRadius: 1 }} />}

        <Box component="form" onSubmit={handleSubmit}>
          {/* Step 1: Basic Info */}
          {activeStep === 0 && (
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Main Street, Building A, Room 101"
                    InputProps={{
                      startAdornment: <LocationOnIcon sx={{ mr: 1, color: '#64748b' }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: '#1e40af',
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Incident Type</InputLabel>
                    <Select
                      name="incidentType"
                      value={formData.incidentType}
                      onChange={handleChange}
                      label="Incident Type"
                      sx={{ borderRadius: 2 }}
                    >
                      {incidentTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Date & Time"
                    name="dateTime"
                    type="datetime-local"
                    value={formData.dateTime}
                    onChange={handleChange}
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Step 2: Details */}
          {activeStep === 1 && (
            <Box>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                multiline
                rows={6}
                placeholder="Provide detailed information about the incident..."
                helperText={`${charCount}/1000 characters`}
                inputProps={{ maxLength: 1000 }}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />

              {/* Drag and Drop Upload */}
              <Box
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                sx={{
                  border: '2px dashed',
                  borderColor: dragActive ? '#1e40af' : '#cbd5e1',
                  borderRadius: 3,
                  p: 4,
                  textAlign: 'center',
                  bgcolor: dragActive ? 'rgba(30, 64, 175, 0.05)' : '#f8fafc',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: '#1e40af',
                    bgcolor: 'rgba(30, 64, 175, 0.05)',
                  },
                }}
              >
                {!formData.file ? (
                  <>
                    <CloudUploadIcon sx={{ fontSize: 64, color: '#94a3b8', mb: 2 }} />
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      Drag & Drop or Click to Upload
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Support for images and videos (Max 10MB)
                    </Typography>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<ImageIcon />}
                      sx={{
                        bgcolor: '#1e40af',
                        '&:hover': { bgcolor: '#1e3a8a' },
                      }}
                    >
                      Choose File
                      <input type="file" hidden accept="image/*,video/*" onChange={handleFileChange} />
                    </Button>
                  </>
                ) : (
                  <Box>
                    {imagePreview && (
                      <Card sx={{ maxWidth: 400, mx: 'auto', mb: 2 }}>
                        <CardMedia component="img" height="200" image={imagePreview} alt="Preview" />
                      </Card>
                    )}
                    <Chip
                      label={formData.file.name}
                      onDelete={removeFile}
                      deleteIcon={<DeleteIcon />}
                      sx={{ fontSize: '1rem', py: 2.5 }}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          )}

          {/* Step 3: Review */}
          {activeStep === 2 && (
            <Box>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: '#f8fafc',
                  border: '2px solid #e2e8f0',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0f172a' }}>
                  Review Your Complaint
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Location
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {formData.location}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Incident Type
                    </Typography>
                    <Chip label={formData.incidentType} color="primary" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Date & Time
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {new Date(formData.dateTime).toLocaleString()}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Submitted By
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {formData.anonymous ? 'Anonymous' : user.email}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Description
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {formData.description}
                    </Typography>
                  </Grid>

                  {formData.file && (
                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Attachment
                      </Typography>
                      <Chip label={formData.file.name} icon={<ImageIcon />} />
                    </Grid>
                  )}
                </Grid>

                <Box sx={{ mt: 4 }}>
                  <FormControlLabel
                    control={<Switch checked={formData.anonymous} onChange={handleChange} name="anonymous" />}
                    label="Submit Anonymously"
                  />
                </Box>
              </Paper>
            </Box>
          )}

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                borderRadius: 2,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              Back
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                startIcon={<CheckCircleIcon />}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  bgcolor: '#10b981',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
                  '&:hover': {
                    bgcolor: '#059669',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 32px rgba(16, 185, 129, 0.6)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Submit Complaint
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  bgcolor: '#1e40af',
                  '&:hover': {
                    bgcolor: '#1e3a8a',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 32px rgba(30, 64, 175, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ComplaintForm;
