import React, { useState } from 'react';
import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, Box, CardContent,CardActionArea, Typography, Button, AppBar, Toolbar,  } from '@mui/material';

const rugs = [
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg11.png', 'rg12.png', 'rg13.png'],
    link: "/upcomingauctiondetails"
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg21.png', 'rg22.png', 'rg23.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg31.png', 'rg32.png', 'rg33.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg41.png','rg42.png','rg43.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg41.png','rg42.png','rg43.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg31.png', 'rg32.png', 'rg33.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg21.png', 'rg22.png', 'rg23.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg11.png', 'rg12.png', 'rg13.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg11.png', 'rg12.png', 'rg13.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg21.png', 'rg22.png', 'rg23.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg31.png', 'rg32.png', 'rg33.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg41.png','rg42.png','rg43.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg41.png','rg42.png','rg43.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg31.png', 'rg32.png', 'rg33.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg21.png', 'rg22.png', 'rg23.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg11.png', 'rg12.png', 'rg13.png']
  },

];

const AuctionPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
                    
                    <Typography variant="body1" color="textSecondary" marginLeft="30px">
                      <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt; 
                      <span style={{ color: "#5B2E1E" }}> Upcoming Auction</span>
                    </Typography>
                    
                  </Box>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "6px" }}>
          <Typography
                        variant="h3"
                        sx={{
                          fontFamily: 'serif',
                          color: 'rgb(128,0,0)',
                          textAlign: 'left',
                          pl:7,
                          mb: 2
                        }}
                      >Upcoming Auctions
                        
                      </Typography>
          <Button
            variant="outlined"
            sx={{ color: 'rgb(128,0,0)', borderRadius: '20px', borderColor: 'rgb(128,0,0)', right: '3%', textTransform: 'none' }}
          >
            Trending
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="100%" sx={{ py: 2, px: 3 ,}}>
  <Grid 
    container 
    spacing={3} 
    sx={{ 
      justifyContent: "space-between", 
      alignItems: "stretch", 
    }}
  >
    {rugs.map((rug, index) => (
      <Grid 
        item 
        xs={12} 
        sm={6} 
        md={3} 
        key={index}
        sx={{
          display: "flex",
          justifyContent: "center", 
        }}
      >
        <Card 
          sx={{ 
            width: "100%", 
            maxWidth: 400, 
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", 
            borderRadius: "12px",
            paddingLeft: 2,
             paddingRight: 2,
             paddingTop: 2,
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <CardActionArea component={rug.link ? Link : "div"} to={rug.link || "#"}>
              <CardMedia component="img" image={rug.images[0]} alt="Rug Image" />
              </CardActionArea>
            </Grid>
            <Grid item xs={6}>
              <CardMedia component="img" image={rug.images[1]} alt="Rug Image" />
            </Grid>
            <Grid item xs={6}>
              <CardMedia component="img" image={rug.images[2]} alt="Rug Image" />
            </Grid>
          </Grid>
          <CardContent>
            <Typography variant="h6">{rug.title}</Typography>
            <Typography variant="body2" color="error">
              Started: {rug.date}
            </Typography>
            <Button
            component={Link}
            to="/upcomingauctiondetails"
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                fontSize: "12px",
                padding: "4px 10px",
                borderRadius: "20px",
                border: "1px solid black",
                minWidth: "80px",
                textTransform: "none",
                marginTop: "8px",
              }}
            >
              Notify Me
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  <Stack 
    spacing={2} 
    sx={{ mt: 4, justifyContent: "center", alignItems: "center" }}
  >
    <Pagination count={10} page={page} onChange={handleChange} />
  </Stack>
</Container>


    </>
  );
};

export default AuctionPage;