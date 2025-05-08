import React, { useState } from "react"; 
import { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography,Button, Grid, AppBar, Toolbar, Box, Pagination } from "@mui/material";
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const cards = [
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame1.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame2.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame3.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame4.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame5.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame6.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame1.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame2.png",
  },
];
const customFont = "'Playfair Display', serif";
const MuiCards = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const [page, setPage] = useState(1);  
  const cardsPerPage = 6; 
  const totalPages = Math.ceil(cards.length / cardsPerPage); 

  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  return (
    <>
     
      <Box sx={{bgcolor:"#E4DDD0"}}>
             <Typography variant='body1' color='#5B2E1E' ml="40px" alignItems="center">
                 <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E",}}>Home</Link> &gt;
                 <span style={{ color: "#5B2E1E" }}> Collections</span>
             </Typography>
         </Box>
         <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "6px" }}>
            <Typography variant="h3" color='#5B2E1E' sx={{
                fontFamily: customFont,
               
                textAlign: "left",
                mb: 2,
                pl: {xs:2, sm:8, md: 8} ,
                fontSize: {xs:"35px", sm:"55px", md:"55px"}
            }}>
                Featured Rugs
                </Typography>
          <Button 
            component={Link} 
            to="/myitem" 
            variant="outlined" 
            sx={{ color: 'black', borderRadius:'20px',borderColor: 'black', right:'6%', textTransform: 'none' }}
            endIcon={<ArrowOutwardIcon sx={{ fontSize: "14px" }} />}  
          >
            View All
          </Button>
        </Toolbar>
      </AppBar>


     
      <Grid container spacing={2} justifyContent="center" padding={5}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia component="img" height="auto" image={card.image} alt={card.title} />
              <CardContent>
                <Typography variant="body2" color="error">
                  {card.title}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  {card.description}
                </Typography>
                <Typography variant="body2">Est.$400-$600</Typography>
                <Typography variant="h6">~$400</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

     
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={totalPages}  
          page={page} 
          onChange={handlePageChange}  
          color="black"
        />
      </Box>
    </>
  );
};

export default MuiCards;