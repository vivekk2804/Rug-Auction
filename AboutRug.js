import React from 'react'
import { useEffect } from 'react';
import { Typography, Box , Button} from '@mui/material'
import {Container} from '@mui/material'
import Grid from '@mui/material/Grid2';
import line1 from './img/Lines.png';
import carpets from './img/carpets.png';
import { Link } from 'react-router-dom';
const customFont = "'Playfair Display', serif";
 const AboutRug = () => {
  useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
  return (
   

    <Container maxWidth="100%" sx={{ backgroundColor: "#E4DDD0", py: { xs: 4, sm: 6, md: 8 } }}>
    <Grid 
      container 
      alignItems="center" 
      justifyContent="space-between"
      sx={{ width: "100%", mx: "auto" }} 
    >
      
      
      <Grid item xs={1} sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "flex-start" }}>
        <Box component="img" src={line1} alt="" sx={{ height: "100%", maxHeight: "400px" }} />
      </Grid>

      
      <Grid item xs={10} md={5} sx={{ textAlign: { xs: "center", md: "left" }, px: { xs: 2, sm: 4 }, marginBottom: {md: "80px"} }}>
        <Typography 
          variant="h4" 
          color="#5B2E1E" 
          sx={{ 
            fontFamily: customFont, 
            mb: 3, 
            textAlign: { xs: "center", md: "left" } 
          }}
        >
          About Rug Auctions
        </Typography>

       
        <Box sx={{ maxWidth: "450px", mx: "auto" }}>
          <Typography variant="body2" sx={{ mb: 3, textAlign: "justify" }}>
            Rug Auctions has been offering fine and rare Vintage and Antique rugs and new decorative carpets to discerning customers and collectors from all over the world. Rug Auctions has one of the most comprehensive collections of antique and vintage rugs in the industry.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            Our experience in the field of antique and vintage rugs spans over four decades and we can utilize that to assist you in buying or selling your property in our auctions by providing a neutral and secure platform.
          </Typography>
        </Box>

        
        <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 3 }}>
          <Button 
          component={Link}
          to="/aboutus1"
            variant="contained" 
            sx={{ 
              backgroundColor: "black", 
              borderRadius: "30px", 
              width: { xs: "100%", sm: "200px", md: "180px" } 
            }}
          >
            View More
          </Button>
        </Box>
      </Grid>

     
      <Grid item xs={10} md={5} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
        <Box
          component="img"
          src={carpets}
          alt=""
          sx={{
            width: { xs: "90%", sm: "500px", md: "500px", lg: "600px", xl: "650px" },
            maxWidth: "100%",
            height: "auto",
            mb: { xs: 2, sm: 0 },
            ml: { md: 4, lg: 6 },
            borderRadius: "20px", 
            marginTop: {xs: "20px"}
          }}
        />
      </Grid>

     
      <Grid item xs={1} sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "flex-end" }}>
        <Box component="img" src={line1} alt="" sx={{ height: "100%", maxHeight: "400px" }} />
      </Grid>

    </Grid>
  </Container>

    
  );
};
export default AboutRug;
