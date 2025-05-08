import React from 'react'
import { useEffect } from 'react';
import { Box, Typography, Button } from "@mui/material";
import Grid from '@mui/material/Grid2'; 
import Craftons from './img/Craftons.png';
import { Link } from 'react-router-dom';
const customFont = "'Playfair Display', serif";
 const TandC = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  return (
   <>
    <Grid 
  container 
  display="flex"
  flexDirection={{ xs: "column", md: "row" }} 
  justifyContent="center"
  flexWrap="nowrap" 
  sx={{
    borderRadius: "30px",
    width: { xs: "95%", sm: "85%", md: "75%", lg: "60%" },
    height: "auto",
    margin: "auto",
    gap: "0px", 
    overflow: "hidden",
    marginTop: "50px",
  }}
>
  
  <Grid
    item
    xs={12}  
    sm={6}
    md={6}
    sx={{
      height: { xs: "auto", sm: "400px" },  
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img className="img"
      src={Craftons}
      alt="Rug-image"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px 0 0 10px", 
      }}
    />
  </Grid>

  
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    sx={{
      minHeight: { xs: "auto", sm: "400px" }, 
      color: "#F3F0EB",
      backgroundColor: "#5B2E1E",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", 
      alignItems: "flex-start", 
      padding: { xs: "20px", sm: "30px" },
      textAlign: "left",
      borderRadius: { xs: "0px", sm: "0 20px 20px 0" },
    }}
  >
    <Box sx={{ maxWidth: { xs: "500px", sm: "450px", md: "310px" }, marginLeft: "30px" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "36px", sm: "38px", md: "45px" },
          textAlign: "left",
          fontFamily: customFont,
          lineHeight: "1.2",
        }}
      >
        Auction Terms & Conditions
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "15px", sm: "20px", md: "20px" },
          marginTop: "10px",
          textAlign: "left",
          lineHeight: "1.5",
          fontWeight: "400",
        }}
      >
        For buyers and sellers at the auction
      </Typography>
    </Box>

    <Button
    component ={Link}
    to="/termsandconditions"
      variant="contained"
      sx={{
        mt: 3,
        bgcolor: "#FAF8F6",
        color: "#5B2E1E",
        borderRadius: "30px",
        maxWidth: { xs: "500px", sm: "400px", md: "310px" },
        fontWeight: "bold",
        fontSize: { xs: "14px", sm: "17px" },
        width: { xs: "75%", sm: "100%", md: "70%" },
        padding: "12px 20px",
        marginLeft: "30px",
        textTransform: "none", 
        "&:hover": {
          bgcolor: "#f0e6e0",
        },
      }}
    >
      Terms & Conditions
    </Button>
  </Grid>
</Grid>
   </>
  )
}

export default TandC;