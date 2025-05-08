import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Design from './img/Design.png';
import { Container, Typography, Box,  Grid, Card, CardMedia } from '@mui/material';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  return (
  <>
    <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
           
             <Typography variant="body1" color="textSecondary" marginLeft="30px">
               <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt; 
               <span style={{ color: "#5B2E1E" }}> About us</span>
             </Typography>
             
           </Box>
           <Box
  sx={{
    backgroundImage: 'url(aboutus.png)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: '100vw', // Ensures it takes full width of the viewport
    height: '252px',
    color: 'white',
    backgroundRepeat: "no-repeat",
  }}
>
  <Typography 
    variant="h2" 
    paddingTop={10} 
    paddingLeft={10} 
    color="rgb(244, 245, 246)" 
    sx={{ fontFamily: 'initial', fontWeight: 'bold' }}
  >
    About us
  </Typography>
</Box>

           
    <Container maxWidth="lg">
    

     
      <Box mt={4} maxWidth="100%">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           <Typography 
                     variant="h3" 
                     sx={{ 
                       fontFamily: 'serif', 
                       
                       color: "#361B12" ,
                       marginBottom: '20px' 
                     }}
                   >
                     About Rug Auctions
                   </Typography>
            <Typography variant='subtitle1' paragraph>
              BestRugPlace is associated with Harooni Rugs, the top Oriental Rug importer who carries an amazing inventory of all kinds of imported handmade rugs. Varieties of new, antique and pre-owned including hard to find sizes, different qualities.
            </Typography>
            <Typography variant='subtitle1' paragraph>
              Working directly with master weavers and merchants from all over the world. We offer you an exceptional selection of genuine handmade rugs at unbeatable prices for everyone.
            </Typography>
            <Typography variant='subtitle1' paragraph>
              Our mission is to integrate an old fashion rug commerce with the latest techniques in online commerce to provide our customers with more choices and the lowest prices possible.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: '8px' }}>
              <CardMedia
                component="img"
                image="aboutusframe.png"
                alt="Rug Collection"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '70px' }}>
  <img src={Design} alt='line' style={{ maxWidth: '100%' }} />
</Box>
    </>
  );
};

export default AboutUs;