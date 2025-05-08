import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Card, CardContent,CardActionArea, Typography, IconButton, Tabs, Tab } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Sellers from "./Sellers"; // Import Sellers Component

const items = [
  {
    id: 1,
    title: '001: Vintage Persian Gabbeh Rug Details',
    image: '/image 4.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
    link: "/ruglisting"
  },
  {
    id: 2,
    title: '002: Square Size Antique Irish Donegal Rug',
    image: '/image 5.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
    link: "/ruglisting"
  },
  {
    id: 3,
    title: '003: Antique Ziegler Sultanabad Persian Rug',
    image: '/image 6.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 4,
    title: '001: Vintage Persian Gabbeh Rug Details',
    image: '/image 5.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 1,
    title: '001: Vintage Persian Gabbeh Rug Details',
    image: '/image 4.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 2,
    title: '002:Square Size Antique Irish Donegal Rug',
    image: '/image 5.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 3,
    title: '003: Antique Ziegler Sultanabad Persian Rug',
    image: '/image 6.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 4,
    title: '001: Vintage Persian Gabbeh Rug Details',
    image: '/image 4.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 1,
    title: '001: Vintage Persian Gabbeh Rug Details',
    image: '/image 4.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 2,
    title: '002: Square Size Antique Irish Donegal Rug',
    image: '/image 5.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 3,
    title: '003: Antique Ziegler Sultanabad Persian Rug',
    image: '/image 6.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  },
  {
    id: 4,
    title: '002: Vintage Persian Gabbeh Rug Details',
    image: '/image 5.png',
    endTime: 'Ends in 1d 18h >',
    estimate: '$400-$600',
    currentBid: '$200',
  }
];

const MyItems = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);
  const [tabIndex, setTabIndex] = useState(0); // 0 for Rugs, 1 for Sellers

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
        <Typography variant="body1" color="textSecondary" marginLeft="30px">
          <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt;
          <span style={{ color: "#5B2E1E" }}> My Items</span>
        </Typography>
      </Box>

      <Container maxWidth="100%" sx={{ paddingX: 2, paddingTop: 2 }}>
        <Typography
          variant="h4"
          color='#5B2E1E'
          sx={{
            fontFamily: 'serif',
            fontWeight: 'bold',
            textAlign: 'left',
            ml: 3,
            mb: 4,
          }}
        >
          My Items
        </Typography>

        {/* Tabs for Rugs & Sellers */}
        <Box sx={{ display: "flex", justifyContent: "left" }}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            textColor="black"
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              "& .MuiTab-root": { 
                textTransform: "none",
                fontSize: "1rem", 
                fontWeight: "bold", 
                padding: "12px 20px",
                minWidth: "100px",
              },
              "& .Mui-selected": { 
                backgroundColor: "#B8A79C",
                borderRadius: "8px 8px 0 0", 
              },
              "& .MuiTabs-flexContainer": {
                borderBottom: "2px solid #5B2E1E",
                display: "inline-flex"
              }
            }}
          >
            <Tab label="Rugs" />
            <Tab label="Sellers" />
          </Tabs>
        </Box>

        {/* Content Switching Based on Selected Tab */}
        <Box sx={{ mt: 3 }}>
          {tabIndex === 0 ? (
            // Rugs Content
            <Grid container spacing={2} sx={{ width: "100%", margin: 0 }}>
              {items.map((item) => (
                <Grid item xs={12} sm={6} md={3} lg={3} key={item.id}>
                  <Card sx={{ position: "relative", width: "90%", p: 2, mb: 2 }}>
                  <CardActionArea component={item.link ? Link : "div"} to={item.link || "#"}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ 
                        width: "100%", 
                        height: "auto", 
                        borderRadius: "8px 8px 0 0",
                        objectFit: "cover"
                      }} 
                    />
                    </CardActionArea>
                    <CardContent>
                      <Typography variant="body2" color="error">{item.endTime}</Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Est. {item.estimate}
                      </Typography>
                      <Typography variant="h6" color="black" sx={{ fontWeight: 'bold' }}>
                        ~{item.currentBid}(04)
                      </Typography>

                      {/* Favorite Icon */}
                      <IconButton 
                        sx={{ 
                          position: "absolute", 
                          top: 18, 
                          right: 20, 
                          zIndex: 10, 
                          backgroundColor: "rgba(228, 221, 208, 1)",
                          borderRadius: "50%", 
                          p: 1, 
                          color: 'rgba(0,0,0,1)' 
                        }}
                      >
                        <FavoriteRoundedIcon sx={{ color: "black" }} />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            // Sellers Content (Renders Sellers Component)
            <Sellers />
          )}
        </Box>
      </Container>
    </>
  );
};

export default MyItems;
