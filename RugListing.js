import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container,Box,InputBase,Divider,Accordion, AccordionDetails, AccordionSummary,List, ListItem,ListItemText, Stack, Pagination, Card, CardMedia, CardContent, Typography, IconButton, Select, MenuItem } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid2'; 
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Vintage from './img/image 4.png';
import  Square  from './img/image 5.png';
import  Antique  from './img/image 6.png';
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SwapVertIcon from "@mui/icons-material/SwapVert";
const products = [
  {
    id: 1,
    title: " 001: Vintage Persian Gabbeh Rug Details",
    img: Vintage, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 2,
    title: " 002: Square Size Antique Irish Donegal Rug",
    img: Square, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 3,
    title: " 003: Antique Ziegler Sultanabad Persian Rug",
    img: Antique, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 4,
    title: "004: Vintage Persian Gabbeh Rug Details",
    img: Vintage, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h > ",
  },
  {
    id: 5,
    title: "005: Antique Ziegler Sultanabad Persian Rug",
    img: Antique,
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 6,
    title: "006: Antique Ziegler Sultanabad Persian Rug",
    img: Antique, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 7,
    title: "001: Vintage Persian Gabbeh Rug Details",
    img: Vintage, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 8,
    title: "002: Square Size Antique Irish Donegal Rug",
    img: Square, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 9,
    title: "003: Antique Ziegler Sultanabad Persian Rug",
    img: Antique, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 10,
    title: "004: Vintage Persian Gabbeh Rug Details",
    img: Vintage, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 11,
    title: "005: Antique Ziegler Sultanabad Persian Rug",
    img: Antique,
    estimatedPrice: "$400-$600",
    currentBid: "~$200",
    timeLeft: "Ends in 1d 18h >",
  },
  {
    id: 12,
    title: " 006: Antique Ziegler Sultanabad Persian Rug",
    img: Antique, 
    estimatedPrice: "$400-$600",
    currentBid: "~$200 ",
    timeLeft: "Ends in 1d 18h >",
  },
];
const collectionsData = [
  { name: "Fine Art", count: 2500 },
  { name: "Traditional", count: 550 },
  { name: "Modern", count: 700 },
  { name: "Moroccan", count: 1000 },
  { name: "Wool & Silk", count: 1250 },
  { name: "Bokhra", count: 1450 },
  { name: "Needle Point & Anbusson", count: 950 },
];
  

const RugListing = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const [sortOption, setsortOption] = useState("relevance");  return (
    <>
    <Box sx={{display: {xs:"flex", sm: "none", md:"none"}}}>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
     
        padding: 2,
        
      }}
    >
      <Typography variant="h4" fontFamily="Serif" color="black">
        Rugs and Carpets
      </Typography>

     
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "500px",
        }}
      >
       
        <Box sx={{ display: "flex", alignItems: "center" ,mt:3 }}>
          <IconButton>
            <FilterAltIcon sx={{ color: "#905A47", }} />
          </IconButton>
          <Typography variant="h6" color="#905A47">
            FILTER(1)
          </Typography>
        </Box>

        
        <Box sx={{ display: "flex", alignItems: "center",ml:"3cm", mt:3 }}>
          <IconButton>
            <SwapVertIcon sx={{ color: "#905A47" ,}} />
          </IconButton>
          <Typography variant="h6" color="#905A47">
            SORT
          </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
    <Box sx={{display: "flex" , border: "1px solid #F3F0EB",}}>
    <Box sx={{display: {xs: "none" , md:"block"}}} maxWidth="450px" maxHeight="700px" style={{ backgroundColor:"#F3F0EB", marginTop: "30px" , marginLeft: "60px" , padding: "20px", borderRadius: "15px"}}>
      <Typography variant='h5' sx={{display:{xs:"none", sm:"none", md:"block"}, fontFamily: "Serif"}}>
        Rugs and Carpets
      </Typography>
      <Divider sx={{marginTop: "10px", color: "#DCD0BA"}}></Divider>
      <Box sx={{ display: "flex", alignItems: "center", borderRadius: "50px", border: "1px solid #905A47", padding: "5px 15px", width: "300px", marginTop: "15px"}}>
            <SearchIcon sx={{ color: "#000000" }} />
            <InputBase placeholder="Search within 12,000 results " sx={{ marginLeft: 1, flex: 1, color: "#000000",  "&::placeholder": { color: "black", opacity: 1} }} />
          </Box>
          <Divider sx={{marginTop: "10px", color: "#DCD0BA"}}></Divider>
          <Box >
          <Accordion defaultExpanded style={{backgroundColor: "#F3F0EB",  boxShadow: "none",}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold"  fontFamily= "Serif" >Collections</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "1px", }}>
          <List>
            {collectionsData.map((item, index) => (
              <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between", py: "0"}}>
                <ListItemText primary={item.name}  />
                <Typography>{item.count}</Typography>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

    
      {["Age", "Color", "Dimensions"].map((filter, index) => (
        <Accordion key={index} style={{backgroundColor: "#F3F0EB", boxShadow: "none"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontWeight="bold" fontFamily="serif">{filter}</Typography>
          </AccordionSummary>
        </Accordion>
      ))}
      </Box>
    </Box>
        <Container maxWidth="xl" sx={{ mt: 4, marginLeft: { xs: 0, sm: "1cm", }}}>
     
      <Box sx={{ display: {xs:"none", sm:"flex", md:"flex"}, justifyContent: "flex-end", marginBottom: "16px" }}>
        <Typography variant="body1" sx={{ marginRight: 2, marginTop: "10px", color:"#905A47" }}>SORT:</Typography>
        <Select value={sortOption} onChange={(e) => setsortOption(e.target.value)} size="small">
          <MenuItem value="relevance" style={{fontWeight: "bold"}}>Relevance</MenuItem>
          <MenuItem value="Newly listed items"> Newly listed items </MenuItem>
          <MenuItem value="endingSoonest">Ending Soonest</MenuItem>
          <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
          <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
          <MenuItem value="number of bids">Number Of Bids: Low to High</MenuItem>
          <MenuItem value="number of bids">Number Of Bids: High to Low</MenuItem>
          
        </Select>
      </Box>

     
      <Grid container spacing={3} sx={{display: "flex",  flexDirection: { xs: "column", sm: "column", md: "row" }, marginLeft: {md: "70px"}, 
          alignItems: { xs: "center", sm: "center", md: "flex-start" }}}>
        {products.map((product) => (
        <Grid item xs={12} sm={12} md={4} key={product.id}>
        <Card
          sx={{
            position: "relative",
            borderRadius: 2,
            boxShadow: 1,
            maxWidth: "600px",
           width: {xs: "400px", md: "400px"},
            padding: {xs: "0px", md: "10px"},
           
          }}
        >
          <Box sx={{ padding: {xs: "0px",sm:"10px", md: "10px"}, bgcolor: "#fff", borderRadius: "8px" }}>
            <CardMedia
              component="img"
              image={product.img}
              alt={product.title}
              sx={{
                width: { xs: "500px", sm: "100%", md: "100%" },
                height: { xs: "280px", sm: "400px", md: "450px" }, // Reduced height for landscape mode on mobile
                objectFit: "cover",
                borderRadius: "8px",
                
                
              }}
            />
          </Box>
      
          <IconButton
            sx={{
              position: "absolute",
              top: {xs: 30, md: 30},
              right: 30,
              color: "#000000",
              backgroundColor: "#E4DDD0",
              borderRadius: "50%",
              boxShadow: 1,
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
      
          <CardContent>
            <Typography variant="caption" color="#905A47">
              {product.timeLeft}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
              {product.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" fontFamily="sans-serif">
              Est. {product.estimatedPrice}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", mt: 1, color: "textSecondary" }}
            >
              {product.currentBid} (04)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
        ))}
      </Grid>
      <Stack spacing={2} sx={{  marginTop: "60px"}}>
      <Pagination
        count={10}
        size="large"

        sx={{
          display: "flex", justifyContent: "center", 
          "& .MuiPaginationItem-root": {
            color: "#905A47", 
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#905A47",
            color: "white", 
          },
        }}
      />
    </Stack>

    </Container>
</Box>
    </>
  );
}

export default RugListing;