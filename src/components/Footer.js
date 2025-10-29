import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "white",
        pt: 6,
        pb: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Community Connect
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                lineHeight: 1.8,
                color: "#94a3b8",
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              Building safer communities through transparent reporting and
              monitoring. Together, we can make a difference.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "#1e40af",
                  "&:hover": { bgcolor: "#1e3a8a" },
                }}
                size="small"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "#1e40af",
                  "&:hover": { bgcolor: "#1e3a8a" },
                }}
                size="small"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "#1e40af",
                  "&:hover": { bgcolor: "#1e3a8a" },
                }}
                size="small"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "#1e40af",
                  "&:hover": { bgcolor: "#1e3a8a" },
                }}
                size="small"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Home
              </Link>
              <Link
                href="/report"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Report
              </Link>
              <Link
                href="/dashboard"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Dashboard
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                About
              </Link>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Help
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Privacy
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Terms
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  "&:hover": { color: "white" },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                FAQ
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon
                  sx={{ fontSize: { xs: 18, md: 20 }, color: "#1e40af" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#94a3b8",
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  support@communitywatch.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon
                  sx={{ fontSize: { xs: 18, md: 20 }, color: "#1e40af" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#94a3b8",
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <LocationOnIcon
                  sx={{
                    fontSize: { xs: 18, md: 20 },
                    color: "#1e40af",
                    mt: 0.3,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#94a3b8",
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  123 Community Street
                  <br />
                  City, State 12345
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid #334155",
            mt: { xs: 4, md: 5 },
            pt: { xs: 2, md: 3 },
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 1, md: 2 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#94a3b8",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            © {new Date().getFullYear()} Community Connect. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#94a3b8",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            Made with ❤️ for safer communities
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
