import React from 'react';
import { useEffect } from 'react';
import Design from './img/Design.png';
import { Container, Typography, Box } from '@mui/material';

const WhoWeAre = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  return (
    <Box sx={{ backgroundColor: "#F8F6F3", py: 5 }}>
      <Container maxWidth="md">
     
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily: 'serif', 
            color: '#361B12', 
            textAlign: 'center',
            marginBottom: '20px' 
          }}
        >
          Who we are?
        </Typography>
        
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center',
            marginBottom: '20px' 
          }}
        >
          We are a main leader in the online rug marketplace, with operations in the United States and many other countries. 
          Our strength is primarily drawn from our trusting relationship with the master weavers, suppliers, and our loyal clients. 
          This will allow us to obtain our products at reduced final cost and provide our customers with quality Products and services at unbeatable prices.
        </Typography>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center',
            marginBottom: '20px' 
          }}
        >
          We are the Best Rug Place, best source, for oriental rug dealers and designers, we strive to be the BestRugPlace for everyone. 
          We are confident that we have a rug for anyone who needs one with any specifics but if not we would be happy to put in order to have it made by one of our master-weavers.
        </Typography>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center' 
          }}
        >
          We are proud of our 45 years of experience earning a 5-star reputation and we strive to keep it that way by making our customers 100% comfortable with maintaining the trust built and offering authentic handmade rugs with 100% satisfaction guarantee policy. 
          At our family-owned and operated handmade rug business, we are proud to offer the largest inventory of high-quality handmade rugs in the United States. 
          We specialize in providing our customers with the finest handmade rugs that are crafted using traditional techniques passed down for generations. 
          Our rugs are sourced from all over the world, including countries such as Iran, India, Turkey, and Afghanistan.
        </Typography>
      </Container>

      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '70px' }}>
        <img src={Design} alt='line' style={{ maxWidth: '100%' }} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
        <img src='RugCarpet.png' alt='line' style={{ maxWidth: '100%' }} />
      </Box>

      <Container maxWidth="md">
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center',
            marginBottom: '20px', 
            paddingX: '20px'
          }}
        >
         We understand that a rug can be a significant investment, which is why we take pride in offering our customers the highest-quality rugs that are built to last a lifetime. 
         Our rugs are made using only the finest materials, including wool, silk, and cotton, ensuring that they are not only beautiful but also durable and long-lasting.
        </Typography>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center',
            marginBottom: '20px', 
            paddingX: '20px'
          }}
        >
         We believe that exceptional customer service is paramount, and we are dedicated to providing our customers with an enjoyable and stress-free shopping experience.
         Our website is designed to make browsing and selecting the perfect rug easy, with detailed descriptions and high-resolution images that showcase the quality and beauty of our rugs.
        </Typography>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center',
            marginBottom: '20px', 
            paddingX: '20px'
          }}
        >
         We are confident that our customers will love their handmade rug, which is why we offer a hassle-free return policy with a 30-day money-back guarantee.
         If for any reason you are not satisfied with your purchase, 
         we will cover the shipping cost for the return, and our partnership with FedEx ensures a seamless and efficient return process.
        </Typography>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center',
            marginBottom: '20px', 
            paddingX: '20px'
          }}
        >
          At our handmade rug business, we offer a wide range of rug sizes, designs, colors, and patterns, ensuring that our customers can find the perfect rug to complement their home decor. 
          Whether you're looking for a classic or contemporary design, our inventory has something for everyone.
        </Typography>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: 'initial', 
            color: 'black', 
            textAlign: 'center', 
            paddingX: '20px'
          }}
        >
          In summary, we are the best and most trusted handmade rug business in the United States, offering the largest inventory of high-quality handmade rugs. 
          Our commitment to exceptional customer service, combined with our hassle-free return policy and partnership with FedEx, makes us the perfect choice for your rug needs. 
          Contact us today to learn more about our extensive inventory and how we can help you find the perfect handmade rug for your home.
        </Typography>
      </Container>
    </Box>
  );
};

export default WhoWeAre;