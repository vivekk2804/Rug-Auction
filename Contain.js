
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Container, Grid, Card, CardMedia,  CardContent,CardActionArea, Typography, Button, AppBar, Toolbar,  } from '@mui/material';
const customFont = "'Playfair Display', serif";
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
    images: ['rg21.png', 'rg22.png', 'rg23.png']
  },
  {
    title: 'Antique Ziegler Sultanabad Persian Rug',
    date: 'Jul 13, 2024 5:30 PM GMT+5:30',
    images: ['rg31.png', 'rg32.png', 'rg33.png']
  },
];

const MuiCards = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "6px" }}>
        <Typography variant="h3" color='#5B2E1E' sx={{
                fontFamily: customFont, 
                textAlign: "left",
                mb: 2,
                pl: {xs:2, sm:8, md: 8} ,
                fontSize: {xs:"35px", sm:"55px", md:"55px"}
            }}>
                Rug Collections
                </Typography>
                      <Button 
             component={Link} 
            to="/myitem" 
            variant="outlined" 
            sx={{ color: 'black', borderRadius:'20px',borderColor: 'black', right:'6%', textTransform: 'none' }}
            endIcon={<ArrowOutwardIcon sx={{ fontSize: "14px" }} />}  // Replaced CloseIcon with ArrowOutwardIcon
          >
            View All
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="100%" sx={{ py: 2, px: 1 ,}}>
      <Grid container spacing={3} justifyContent="center" padding={2} sx={{
        paddingLeft: {xs:3, sm:10, md:10},
        paddingRight: {xs:3, sm:10, md:10}
      }}>
    {rugs.map((rug, index) => (
      <Grid 
        item 
        xs={12} 
        sm={6} 
        md={4} 
        key={index}
        sx={{
          display: "flex",
          justifyContent: "center", 
        }}
      >
        <Card 
          sx={{ 
            width: "100%", 
            maxWidth: 550, 
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
                 to="/rdetailspage"
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
                    marginTop: "8px"
                  }}
                >
                  Bid Now
                </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>
  </>
  );
};

export default MuiCards;