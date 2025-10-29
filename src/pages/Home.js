import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Fade,
  Zoom,
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupsIcon from "@mui/icons-material/Groups";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <ReportIcon sx={{ fontSize: 56 }} />,
      title: "Easy Reporting",
      description:
        "Submit complaints quickly with detailed information and media attachments",
      color: "#1e40af",
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 56 }} />,
      title: "Track Progress",
      description:
        "Monitor the status of your complaints in real-time through our dashboard",
      color: "#1e40af",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 56 }} />,
      title: "Anonymous Option",
      description:
        "Report incidents anonymously to protect your privacy and safety",
      color: "#1e40af",
    },
  ];

  const stats = [
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 64 }} />,
      value: "100%",
      label: "Secure",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 64 }} />,
      value: "24/7",
      label: "Available",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 64 }} />,
      value: "1000+",
      label: "Community Members",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          py: { xs: 10, md: 16 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%231e40af\\" fill-opacity=\\"0.1\\"%3E%3Cpath d=\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={isVisible} timeout={1000}>
            <Box>
              {/* Hero Title */}
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                    mb: 4,
                    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Community Based
                  <br />
                  Reporting Tool
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 6,
                    opacity: 0.95,
                    fontWeight: 400,
                    maxWidth: "800px",
                    mx: "auto",
                    fontSize: { xs: "1.1rem", md: "1.5rem" },
                    lineHeight: 1.7,
                    px: 2,
                  }}
                >
                  Report incidents, track complaints, and build a safer
                  community together
                </Typography>

                {/* CTA Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    justifyContent: "center",
                    flexWrap: "wrap",
                    px: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/report")}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: "#1e40af",
                      color: "white",
                      px: 6,
                      py: 2.5,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 3,
                      boxShadow: "0 8px 24px rgba(30, 64, 175, 0.4)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        transition: "left 0.5s ease",
                      },
                      "&:hover": {
                        bgcolor: "#1e3a8a",
                        transform: "translateY(-6px) scale(1.05)",
                        boxShadow: "0 16px 40px rgba(30, 64, 175, 0.6)",
                        "&::before": {
                          left: "100%",
                        },
                      },
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    Report an Incident
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate("/dashboard")}
                    sx={{
                      borderColor: "white",
                      borderWidth: 2,
                      color: "white",
                      px: 6,
                      py: 2.5,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 3,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "0%",
                        height: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        transition: "width 0.4s ease",
                        zIndex: 0,
                      },
                      "& .MuiButton-endIcon": {
                        position: "relative",
                        zIndex: 1,
                      },
                      "&:hover": {
                        borderColor: "white",
                        borderWidth: 2,
                        bgcolor: "transparent",
                        transform: "translateY(-6px) scale(1.05)",
                        boxShadow: "0 12px 32px rgba(255, 255, 255, 0.3)",
                        "&::before": {
                          width: "100%",
                        },
                      },
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    View Dashboard
                  </Button>
                </Box>
              </Box>

              {/* Stats Section - Equal Size Boxes */}
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  mt: 8,
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  justifyContent: "center",
                }}
              >
                {stats.map((stat, index) => (
                  <Zoom in={isVisible} timeout={1200 + index * 200} key={index}>
                    <Box
                      sx={{
                        flex: {
                          xs: "1 1 100%",
                          sm: "1 1 calc(33.333% - 32px)",
                          md: "1 1 0",
                        },
                        textAlign: "center",
                        p: 5,
                        borderRadius: 4,
                        bgcolor: "rgba(30, 64, 175, 0.25)",
                        backdropFilter: "blur(10px)",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        minHeight: "260px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        animation: `float ${
                          3 + index * 0.5
                        }s ease-in-out infinite`,
                        "@keyframes float": {
                          "0%, 100%": { transform: "translateY(0px)" },
                          "50%": { transform: "translateY(-10px)" },
                        },
                        "&:hover": {
                          transform: "translateY(-16px) scale(1.05)",
                          bgcolor: "rgba(30, 64, 175, 0.4)",
                          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
                          borderColor: "rgba(255, 255, 255, 0.6)",
                          animation: "none",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mb: 3,
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "rotate(360deg) scale(1.2)",
                          },
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 900,
                          mb: 2,
                          fontSize: "3.5rem",
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.25rem",
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Zoom>
                ))}
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Features Section - Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Fade in={isVisible} timeout={1500}>
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#0f172a",
                letterSpacing: "-0.02em",
              }}
            >
              Why Choose Us?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "1.1rem", md: "1.35rem" },
                lineHeight: 1.7,
                px: 2,
              }}
            >
              Our platform provides everything you need to report and track
              community incidents effectively
            </Typography>
          </Box>
        </Fade>

        {/* Feature Cards - Equal Width in Row */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "center",
          }}
        >
          {features.map((feature, index) => (
            <Zoom in={isVisible} timeout={1400 + index * 200} key={index}>
              <Card
                sx={{
                  flex: { xs: "1 1 100%", md: "1 1 0" },
                  minHeight: "450px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  border: "3px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    bgcolor: "#1e40af",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.5s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-20px) scale(1.03)",
                    boxShadow: "0 30px 60px rgba(30, 64, 175, 0.25)",
                    borderColor: "#1e40af",
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                    "& .feature-icon-box": {
                      transform: "scale(1.2) rotate(360deg)",
                      bgcolor: "#1e40af",
                      color: "white",
                      boxShadow: "0 8px 24px rgba(30, 64, 175, 0.4)",
                    },
                    "& .feature-title": {
                      color: "#1e40af",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                  }}
                >
                  {/* Icon */}
                  <Box
                    className="feature-icon-box"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 120,
                      height: 120,
                      borderRadius: 4,
                      bgcolor: "rgba(30, 64, 175, 0.1)",
                      color: "#1e40af",
                      mb: 4,
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {feature.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    className="feature-title"
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      color: "#0f172a",
                      fontSize: "1.75rem",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {feature.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: "#0f172a",
          color: "white",
          py: { xs: 10, md: 14 },
          textAlign: "center",
          borderTop: "4px solid #1e40af",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={isVisible} timeout={2000}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 4,
                  letterSpacing: "-0.02em",
                }}
              >
                Ready to Make a Difference?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 6,
                  opacity: 0.95,
                  fontSize: { xs: "1.1rem", md: "1.35rem" },
                  lineHeight: 1.7,
                  maxWidth: "700px",
                  mx: "auto",
                  px: 2,
                }}
              >
                Join our community and help create a safer environment for
                everyone
              </Typography>
              <Zoom in={isVisible} timeout={2200}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/report")}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "#1e40af",
                    color: "white",
                    px: 7,
                    py: 3,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(30, 64, 175, 0.5)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "0",
                      height: "0",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.3)",
                      transform: "translate(-50%, -50%)",
                      transition: "width 0.6s ease, height 0.6s ease",
                    },
                    "&:hover": {
                      bgcolor: "#1e3a8a",
                      transform: "translateY(-8px) scale(1.08)",
                      boxShadow: "0 20px 50px rgba(30, 64, 175, 0.8)",
                      "&::before": {
                        width: "300px",
                        height: "300px",
                      },
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Get Started Now
                </Button>
              </Zoom>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
