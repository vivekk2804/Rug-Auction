import React from "react";
import { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, AppBar, Toolbar, Button,} from "@mui/material";
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
  }
];

const MuiCards = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "6px" }}>
 <Typography
              variant="h3"
              color="#5B2E1E"
              sx={{
                fontFamily: 'serif',
               
                
                textAlign: 'left',
                mb: 2,
                pl: 8,
              }}
            >
              Featured Rugs
            </Typography>
          <Button 
            component={Link} 
            to="/collections" 
            variant="outlined" 
            sx={{ color: 'black', borderRadius:'20px',borderColor: 'black', right:'6%', textTransform: 'none' }}
            endIcon={<ArrowOutwardIcon sx={{ fontSize: "14px" }} />}  // Replaced CloseIcon with ArrowOutwardIcon
          >
            View All
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} justifyContent="center" padding={2} sx={{paddingLeft: 10, paddingRight: 10}}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
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
    </>
  );
};

export default MuiCards;