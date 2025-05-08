import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100vw", // Ensures it doesn't overflow
          height: {xs:"537px" ,sm: "710px", md:"710px"},
          backgroundImage: "url('Layout.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "0",
          overflowX: "hidden", // Prevents horizontal scrolling
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(112,112,112, 0.01)",
          }}
        />
        <Box sx={{ position: "relative", maxWidth: "90vw", px: 1 }}>
          <Typography variant="h6" color="#DCD0BA" gutterBottom sx={{ fontSize: { xs: "14px", sm: "18px" } }}>
            SEPTEMBER 22ND 2024
          </Typography>
          <Typography variant="h2" color="#DCD0BA" sx={{ fontFamily: "initial", fontWeight: "bold", fontSize: { xs: "30px", sm: "40px", md: "50px" } }}>
            Upcoming Auctions
          </Typography>
          <Typography variant="h6" color="#DCD0BA" sx={{ fontSize: { xs: "14px", sm: "18px" }, mb: 2 }}>
            Find & Decorative Antique, Vintage & Modern Rug
          </Typography>
          <Button
           component={Link}
           to="/rdetailspage"
            variant="contained"
            color="error"
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              padding: { xs: "6px 12px", sm: "8px 16px" },
              borderRadius: "20px",
              textTransform: "none",
            }}
          >
            Bid Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
