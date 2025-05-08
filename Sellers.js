import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Typography, Button, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const auctionData = Array(7).fill({
  name: "Sofe Design Auctions",
  location: "Carrollton, TX, United States",
  reviews: 580,
  followers: 30313,
  rating: 3,
  imgSrc: "/SOFE.png",
});

const AuctionCard = ({ data }) => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const [value, setValue] = useState(data.rating);

  return (
    <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    flexDirection="row" // Always in row for image & typography
    width="100%"
    maxWidth="90%"
    p={2}
    borderRadius={3}
    mb={2}
    flexWrap={{ xs: "wrap", sm: "nowrap" }} // Wrap only on xs to move buttons down
  >
    {/* Left Section: Image */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 90,
        borderRadius: 3,
        border: "1px solid #905A47",
        padding: 1.5,
        flexShrink: 0, // Prevent shrinking
      }}
    >
      <Box component="img" src={data.imgSrc} alt={data.name} sx={{ width: "100%", height: "auto", objectFit: "contain" }} />
    </Box>
  
    {/* Middle Section: Content */}
    <Box flex={1} minWidth={200} textAlign="left" ml={4}>
      <Typography variant="h6" fontWeight="bold" color="#361B12">
        {data.name}
      </Typography>
      <Typography variant="body2" color="#905A47" sx={{ mt: "2px" }}>
        {data.location}
      </Typography>
  
      {/* Rating & Reviews */}
      <Box display="flex" alignItems="center">
        <Rating
          name="custom-rating"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            "& .MuiRating-iconFilled": { color: "#361B12" },
            "& .MuiRating-iconEmpty": { color: "#905A47" },
          }}
        />
        <Typography sx={{ ml: "8px", color: "#905A47", fontSize: "16px", fontWeight: "500" }}>
          {data.reviews} Reviews
        </Typography>
      </Box>
      <Typography variant="body2" color="#905A47" sx={{ mt: "2px" }}>
        {data.followers} Followers
      </Typography>
    </Box>
  
    {/* Right Section: Buttons */}
    <Box
      display="flex"
      gap={1}
      flexShrink={0}
      ml="auto"
      mt={{ xs: 2, sm: 0 }} // Moves buttons below only for xs
      flexDirection="row" // Buttons always stay in row
      width={{ xs: "100%", sm: "auto" }} // Full width for xs
      justifyContent={{ xs: "right", sm: "start" }} // Centered buttons on xs
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
          textTransform: "none",
          fontSize: "14px",
          "&:hover": { backgroundColor: "#333" },
        }}
      >
        Ask a Question
      </Button>
  
      <Button
        variant="outlined"
        startIcon={<FavoriteIcon />}
        sx={{
          color: "#5C3A2E",
          borderColor: "#5C3A2E",
          borderRadius: "20px",
          textTransform: "none",
          fontSize: "14px",
          padding: "6px 16px",
          "&:hover": { borderColor: "#5C3A2E", backgroundColor: "rgba(92, 58, 46, 0.1)" },
        }}
      >
        UnFollow
      </Button>
    </Box>
  </Box>
  );
};  
const AuctionList = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      {auctionData.map((data, index) => (
        <AuctionCard key={index} data={data} />
      ))}
    </Box>
  );
};

export default AuctionList;
