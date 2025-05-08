import React from 'react';
import { useEffect } from 'react';
import { Box, Typography, Button, TextField,  Grid, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



const images = [
  "/SR1.png",
  "/SR2.png",
  "/SR3.png",
  "/SR4.png",
  "/SR5.png",
];

const UpcomingAuctionDetails = () => {
  useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
  const [value, setValue] = React.useState(2);
  return (
    <Box sx={{ p: 2, ml: {xs:0,md:5} }}>
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F3F0EB",
          ml: { xs: 2, sm:15, md: 10 },
          borderRadius: 3,
          mt: { xs: 1, md: 2 },
          order: { xs: 1, sm: 1,md:2 },
        }}
      >
        <Box
          component="img"
          src="/Mr1.png" 
          alt="Centered Image"
          sx={{
            width: "95%",
            maxHeight: "80vh",
            objectFit: "contain",
            borderRadius: 3,
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
            mb: 1,
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={1}
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: 1,
          order: { xs: 2, sm: 2, md:1 }, 
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Thumbnail ${index + 1}`}
            sx={{
              width: { xs: "14%", md: "100%" },
              maxHeight: "150px",
              height: "auto",
              cursor: "pointer",
              borderRadius: 1,
              ml: { xs: 2, sm: 3, md: 4 },
            }}
          />
        ))}
      </Grid>
      <Grid
          item
          xs={12}
          md
          sx={{
            order: { xs: 3, md: 3 },
            p: { xs: 2, md: 3 },
            
            ml: {xs: 1, md: 5,},
            flexGrow:1,
          }}
        >
          <Box maxWidth="700px">
          <Typography variant="h3" fontWeight="bold" color='#000000' sx={{fontFamily: "serif"}}>
            Antique Ziegler Sultanabad Persian Rug
          </Typography>
          </Box>

          <Typography variant="subtitle1" fontWeight="bold" mt={2} sx={{color: "#361B12"}}>
            Auctions Date:
          </Typography>
          <Typography variant="body2">
            Starts from: Jul 20, 2024 8:30 PM GMT+5:30 <br />
            Ends from: Jul 20, 2024 8:30 PM GMT+5:30
          </Typography>

          <Box maxWidth="700px">
          <Typography variant="body2" mt={2}>
          Hundreds of easy to ship smalls-Fountain Pens, Desk Sets, Toys & Salt & Pepper Shakers!   Selling fun collections from 2 collector estates.  Hundreds of antique & collectible pens & desk sets from a Kansas estate.  Most are new old stock and in excellent condition.  Many Parker & Sheaffer examples, some in Sterling Silver and some w/14K gold nibs.   Also hundreds of sets of collectible salt & pepper shakers from an Iowa collector.  A large and fun collection.  Many selling in lots of 12 sets per lot.  Keep what grabs you and sell the rest in your shop! Or... make a special gift to collector friends. Don't miss the one. Surely lots of easy to ship bargains!! the one. Surely lots of easy-to-ship bargains!
          </Typography>
          </Box>

          <Box>
      <Typography fontWeight="bold" color="#361B12" mb={1}>
        About Seller
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        mt={1}
        flexDirection={{ xs: "row", sm: "row" }}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
      >
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
            mr: 2, 
          }}
        >
          <Box
            component="img"
            src="/SOFE.png"
            alt="Sofe Design Auctions"
            sx={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </Box>
        <Box flex={1} minWidth={200} sx={{mb:3}}>
          <Typography variant='h6' fontWeight="bold" color="#361B12">
            Sofe Design Auctions
          </Typography>
          <Typography variant="body2" color="#905A47"  sx={{mt:"2px"}}>
            Carrollton, TX, United States
          </Typography>
          <Box display="flex" alignItems="center">
      <Rating
        name="custom-rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#361B12", 
          },
          "& .MuiRating-iconEmpty": {
            color: "#C6A99F", 
          },
        }}
      />
      <Typography
        sx={{
          marginLeft: "8px",
          color: "#7D4E3E", 
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        580 Reviews
      </Typography>
    </Box>
          <Typography variant="body2" sx={{mt:"2px"}}> 30,313 Followers</Typography>
        </Box>

        <Box
          display="flex"
          gap={1}
          mt={{ xs: 1, sm: 0 }} 
          flexWrap="wrap"
          justifyContent={{ xs: "start", sm: "start" }}
          sx={{
            mr: {xs:0, md: 20},
            ml: {xs:15, sm: 0, md: 0}
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "20px",
              textTransform: "none",
              fontSize: "14px",
            
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Ask  a Question
          </Button>

          <Button
            variant="outlined"
            startIcon={<FavoriteBorderIcon />}
            sx={{
              color: "#5C3A2E",
              borderColor: "#5C3A2E",
              borderRadius: "20px",
              textTransform: "none",
              fontSize: "14px",
              padding: "6px 16px",
              "&:hover": {
                borderColor: "#5C3A2E",
                backgroundColor: "rgba(92, 58, 46, 0.1)",
              },
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>

         
          <Box
  display="flex"
  flexDirection={{ xs: "column", sm: "row" }} 
  alignItems="center"
  gap={1}
  mt={3}
  width="100%"
>
  <TextField
    fullWidth
    label="Enter Email"
    variant="outlined"
    size="small"
    margin="dense"
    InputLabelProps={{
      style: { fontWeight: "bold", fontFamily: "revert-layer", color: "#905A47" },
    }}
    sx={{
      width: { xs: "100%", sm: "450px" },
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#8B5D46",
      },
      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#8B5D46",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#8B5D46",
      },
    }}
  />

  <Button
    variant="contained"
    fullWidth
    sx={{
      backgroundColor: "black",
      color: "white",
      borderRadius: "25px", 
      textTransform: "none",
      fontSize: "14px",
      padding: "12px 0",
      width: { xs: "100%", sm: "150px" },
      "&:hover": {
        backgroundColor: "#333",
      },
    }}
  >
    Notify Me
  </Button>
</Box>
        </Grid>
    </Grid>
  </Box>
  );
};

export default UpcomingAuctionDetails