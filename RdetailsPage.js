import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Modal, Backdrop, Divider, Card, CardMedia, CardContent, IconButton, Stack, Typography, Table, TableCell, TableBody, TableRow, TableContainer, Paper, Button, TextField, Grid, Rating, useMediaQuery, useTheme } from "@mui/material";
import { FavoriteBorderOutlined } from '@mui/icons-material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Link } from 'react-router-dom';
const images = [
  "/SideRug.png",
  "/SideRug.png",
  "/SideRug.png",
  "/SideRug.png",
  "/SideRug.png",

];
const dataLeft = [
  { label: "Size In Feet:", value: "Width: 8 x Length: 10" },
  { label: "Size In Inches:", value: "Width: 96 in x Length: 120 in" },
  { label: "Rug Type:", value: "Area Rug" },
  { label: "Colors:", value: "Light Green, Ivory, Rose" },
  { label: "Weave:", value: "Hand -Knotted" },
  { label: "Pile:", value: "Flat Weave" },
  { label: "Pattern:", value: "French Aubusson" },
  { label: "Age:", value: "2000’s" },
  { label: "Origin:", value: "Handmade in china" },
  { label: "Life Expectancy:", value: "40-50 Years" },
  { label: "Condition:", value: "Perfect" },
  { label: "Retail value:", value: "$5000" },
  { label: "SKU:", value: "F-6356" },
];
const cards = [
  {
    title: "Ends in 1d 18h >",
    description: "008:Vintage Persian Gabbeh Rug Details",
    image: "Frame1.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "009:Vintage Persian Gabbeh Rug Details",
    image: "Frame1.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "010:Vintage Persian Gabbeh Rug Details",
    image: "Frame1.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "011:Vintage Persian Gabbeh Rug Details",
    image: "Frame1.png",
  },
  {
    title: "Ends in 1d 18h >",
    description: "012:Vintage Persian Gabbeh Rug Details",
    image: "Frame1.png",
  },
]


const RdetailsPage = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.only("sm")); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  
  const imagesToShow = isSmallScreen ? 1 : isMediumScreen ? 2 : 5;

  const handleNext = () => {
    if (currentIndex + imagesToShow < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const [value, setValue] = React.useState(2);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{ p: 2, ml: { xs: 0, md: 5 }, mb: -10 }}>
        <Grid container spacing={2}>

        
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            lg={4}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F3F0EB",
              ml: { xs: 2, sm: 15, md: 10 },
              borderRadius: 3,
              mt: { xs: 1, md: 2 },
              order: { xs: 1, sm: 1, md: 2 },
              padding: "20px 0",
              maxHeight: "800px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src='/Live.png'
              alt='live image'
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "5px 10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                width: { xs: "70px", sm: "90px" },
                height: { xs: "30px", sm: "50px" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "#E4DDD0",
                borderRadius: "50%",
                width: { xs: "20px", sm: "40px", md: "40px" },
                height: { xs: "20px", sm: "40px", md: "40px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                cursor: "pointer",
              }}
            >
              <FavoriteBorderOutlined />
            </Box>

            <Box
              component="img"
              src="/Mrug.png"
              alt="Centered Image"
              sx={{
                width: "80%",
                maxWidth: "400px",
                height: "auto",
                maxHeight: { xs: "300px", md: "700px" },
                objectFit: "contain",
                borderRadius: 3,
                margin: "20px auto",
                display: "block",
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
              gap: { xs: 1, sm: 2, md: 2 },
              order: { xs: 2, sm: 2, md: 1 }, 
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
            <Grid item sx={{ mt: 5, }}>
              <Box
                component="img"
                src='Hrug.png'
                alt="horizontal Rug"
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" }
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" }, // Center on xs, left align on md+
              textAlign: { xs: "center", md: "left" },
              p: { xs: 2, md: 4 },
              order: { xs: 3, sm: 2, md: 2 },
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                backgroundColor: "#F3F0EB",
                borderRadius: 2,
                gap: 1,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#905A47",
                  mt: 3,
                }}
              >
                Bidding close in
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",

                  color: "#361B12",
                  mb: 3,
                }}
              >
                40m 50s Left
              </Typography>
            </Box>

            <Button
              component={Link}
              to="/ruglivedetails"
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                width: "100%",
                mt: 2,
                height: "60px",
                borderRadius: 5,
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Enter Live Auction
            </Button>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="body2" sx={{ mt: 2, color: "#905A47", }}>#123465
              </Typography>

              <Typography variant="h3" sx={{ fontFamily: "serif", mt: 1, fontSize: { xs: "25px", sm: "35px", md: "45px" } }}>
                Fine & Decorative Antique, Vintage & Modern Rugs
              </Typography>

              <Typography variant="body2" color="#905A47" sx={{ mt: 1 }}>
                This product is in very good condition. The pile is mostly full and even
                with minor areas of wear showing. The two ends are complete and secured.
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#361B12", mt: 2 }}>
                Estimate:
              </Typography>
              <Typography variant="h6" color='#905A47'>$4,000 - $6,000</Typography></Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Enter $4500 or More"
                  InputLabelProps={{
                    style: { fontWeight: "bold", fontFamily: "revert-layer", color: "#905A47" }
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 50, // Rounded input like first image
                      border: "1px solid #905A47",
                      fontSize: "0.85rem",
                      p: 0.5,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                 component={Link} to="/myitem"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 50, 
                    fontSize: "0.85rem",
                    boxShadow: "none",
                    height: "50px",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  Place New Bid
                </Button>
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Button component={Link} to="/buy" variant="contained" fullWidth sx={{ backgroundColor: "#000", color: "#fff", borderRadius: "50px", height: "50px" }}>
                  Buy It Now
                </Button>
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Button variant="contained" onClick={handleOpen} fullWidth sx={{ backgroundColor: "#000", color: "#fff", borderRadius: "50px", height: "50px" }}>
                  Make an Offer
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-title"
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{ timeout: 500 }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: { xs: 320, sm: 400, md: 400 },
                      bgcolor: "#F3F0EB",
                      boxShadow: 24,
                      p: 4,
                      borderRadius: 3,
                    }}
                  >
                    <Typography variant='h6' color='#361B12' sx={{ padding: 1, fontFamily: "inherit" }}>
                      Make a Offer
                    </Typography>
                    <Divider color="#905A47" sx={{ marginBottom: 1, ml: 1, }} />
                    <TextField fullWidth variant='outlined' size='small' label='Your Offer Price'
                      sx={{
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 50, // Rounded input like first image
                          border: "1px solid #905A47",
                        }

                      }} />
                    <Button variant='contained' fullWidth sx={{ mt: 1, borderRadius: "50px", backgroundColor: "black" }}>Make a Offer</Button>
                  </Box>
                </Modal>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Button variant="contained" fullWidth sx={{ backgroundColor: "#000", color: "#fff", borderRadius: "50px", height: "50px" }}>
                  Try It in My Room
                </Button>
              </Grid>
              <Grid item xs={12} sm="auto" sx={{ display: { xs: "flex", sm: "block" }, }}>
                <TableContainer component={Paper} sx={{ border: "1px solid #905A47", borderRadius: 2, width: "700px" }}>
                  <Table>
                    <TableBody>
                      {dataLeft.map((item, index) => (
                        <TableRow key={index} sx={{ borderBottom: "1px solid #d8c0b0", backgroundColor: "#F3F0EB" }}>
                          <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d8c0b0", color: "#361B12" }}>
                            {item.label}
                          </TableCell>
                          <TableCell sx={{ color: "#361B12", fontWeight: "bold" }}>{item.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Box sx={{
                textAlign: "left",
                ml: { xs: 2 }
              }}>
                <Typography fontWeight="bold" color="#361B12" mb={1} mt={2}>
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

                  {/* Text Content */}
                  <Box flex={1} minWidth={200} sx={{ mb: 3 }}>
                    <Typography variant='h6' fontWeight="bold" color="#361B12">
                      Sofe Design Auctions
                    </Typography>
                    <Typography variant="body2" color="#905A47" sx={{ mt: "2px" }}>
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
                    <Typography variant="body2" sx={{ mt: "2px" }}> 30,313 Followers</Typography>
                  </Box>

                  
                  <Box
                    display="flex"
                    gap={1}
                    mt={{ xs: 1, sm: 0 }} 
                    flexWrap="wrap"
                    justifyContent={{ xs: "start", sm: "start" }}
                    sx={{
                      mr: { xs: 0, md: 5 },
                      ml: { xs: 15, sm: 5, md: 5, }
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

            </Grid>
          </Grid>
        </Grid>


        <Typography variant="h3" color="#5B2E1E" sx={{ fontFamily: "serif" }}>
          Similar rugs from the same auction
        </Typography>

       
        <Grid
          container
          spacing={3}
          justifyContent="left"
          padding={1}
          sx={{
            flexWrap: "nowrap",
            overflow: "hidden",
          }}
        >
          {cards.slice(currentIndex, currentIndex + imagesToShow).map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={2.3}>
              <Card sx={{ padding: 1 }}>
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

        
        <Stack direction="row" spacing={2} justifyContent={{ xs: "center", sm: "center", md: "left" }} sx={{ mt: 2 }}>
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              border: "2px solid #8B5E3C",
              color: "#8B5E3C",
              width: 50,
              height: 50,
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={currentIndex + imagesToShow >= cards.length}
            sx={{
              border: "2px solid #8B5E3C",
              color: "#8B5E3C",
              width: 50,
              height: 50,
            }}
          >
            <ArrowForward />
          </IconButton>
        </Stack>
        <Typography variant="h3" color="#5B2E1E" sx={{ fontFamily: "serif" }}>
          More Items
        </Typography>

      
        <Grid
          container
          spacing={3}
          justifyContent="left"
          padding={1}
          sx={{
            flexWrap: "nowrap",
            overflow: "hidden",
          }}
        >
          {cards.slice(currentIndex, currentIndex + imagesToShow).map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={2.3}>
              <Card sx={{ padding: 1 }}>
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

       
        <Stack direction="row" spacing={2} justifyContent={{ xs: "center", sm: "center", md: "left" }} sx={{ mt: 2 }}>
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              border: "2px solid #8B5E3C",
              color: "#8B5E3C",
              width: 50,
              height: 50,
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={currentIndex + imagesToShow >= cards.length}
            sx={{
              border: "2px solid #8B5E3C",
              color: "#8B5E3C",
              width: 50,
              height: 50,
            }}
          >
            <ArrowForward />
          </IconButton>
        </Stack>
      </Box>
    </>
  )
}

export default RdetailsPage