import React from 'react';
import { useEffect } from 'react';
import { Typography, Box, Grid, Button,Card, CardContent,TextField, Avatar, Divider ,Rating,Table,TableContainer, TableBody,TableCell,TableRow,Paper} from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const users = [
  { name: "Mark Warner", amount: "$5000"  , Avatar: "Avatar5.png"},
  { name: "Bailey Bailiff", amount: "$5000", Avatar: "Avatar1.png" },
  { name: "Carver Woodcarver", amount: "$5000", Avatar: "Avatar3.png" },
  { name: "Jarvis Spear", amount: "$5000",Avatar: "Avatar6.png" },
  { name: "Elwood Cuthbert", amount: "$5000", Avatar: "Avatar5.png" },
  { name: "Hamilton Edwin", amount: "$5000", Avatar: "Avatar4.png" },
  { name: "Stanley Bridge", amount: "$5000", Avatar: "Avatar8.png" },
];
const dataLeft = [
  { label: "Size In Feet:", value: "Width: 8 x Length: 10" },
  { label: "Size In Inches:", value: "Width: 96 in x Length: 120 in" },
  { label: "Rug Type:", value: "Area Rug" },
  { label: "Colors:", value: "Light Green, Ivory, Rose" },
  { label: "Weave:", value: "Hand -Knotted" },
  { label: "Pile:", value: "Flat Weave" },
];
const dataRight = [
  { label: "Pattern:", value: "French Aubusson" },
  { label: "Age:", value: "2000’s" },
  { label: "Origin:", value: "Handmade in china" },
  { label: "Life Expectancy:", value: "40-50 Years" },
  { label: "Condition:", value: "Perfect" },
  { label: "Retail value:", value: "$5000" },
  { label: "SKU:", value: "F-6356" },
];
const RugLiveDetails = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const [value, setValue] = React.useState(2);
  return (
   <>
    <Box sx={{bgcolor:"#E4DDD0"}}>
        <Typography variant='body1' color='#5B2E1E' ml="40px">
            <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt;
            <span style={{ color: "#5B2E1E" }}> Rug Details</span>
        </Typography>
    </Box>
   <Box  sx={{ display: "flex", ml: {xs:0, md: 8}}}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
       <Box 
       component="img"
       src='liveRug.png'
       alt='Live Rug' 
       sx={{
        maxWidth: "100%",
        width:{xs: "95%", sm: "95%", md: "100%"},
        height: "auto",
        mt: 5,
        ml: {xs: 1.5, sm: 3, md: 5},
        objectFit: "contain",
       }} />
      </Grid> 
      <Grid item xs={12} sm={12} md={6}>
      <Card
        sx={{
          maxWidth: {xs: 540, sm: 650, md: 600}, 
          borderRadius: 4,
          border: "1px solid #905A47",
          p: 1,
          mt: 5, 
          ml: { xs: 1, sm: 3, md: 5 }, 
          mr: {xs:1, sm: 0, md: 0},
          boxShadow: "none", 
        }}
      >
        <CardContent sx={{ p: 2 }}>
         
          <Typography variant="h5" color='#000000' sx={{ fontWeight: "bold", mb: 1 , fontFamily: "initial" }}>
            Live Chat
          </Typography>
          <Divider sx={{ mx: -3, borderBottomWidth: "1px", borderColor: "#d8c0b0" }} />


          
          <Box sx={{ minHeight: "340px", overflowY: "hidden", pr: 1 }}>
 
            {users.map((user, index) => (
              <Grid container key={index} alignItems="center" justifyContent="space-between" sx={{ py: 1 }}>
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar  src={user.Avatar}  
                           alt={user.name}
                   sx={{ width: 26, height: 26, mr: 1 , mt: 1}} /> 
                  <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>{user.name}</Typography>
                </Grid>
                <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                  {user.amount}
                </Typography>
              </Grid>
            ))}
          </Box>

          <Divider sx={{ mx: -3, borderBottomWidth: "1px", borderColor: "#d8c0b0" }} />

          
          <Grid container spacing={1} alignItems="center" sx={{mt:1}}>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Enter $4500 or More"
                InputLabelProps={{
                  style: {fontWeight: "bold", fontFamily:"revert-layer",color: "#905A47"}
                  }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 50, 
                    border: "1px solid #905A47",
                    fontSize: "0.85rem",
                    p: 0.5,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: 50,
                  fontSize: "0.85rem",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                Place New Bid
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
    </Grid>
   </Box>
   <Typography variant='body1' color='#905A47' sx={{mt: 3, ml: {xs: 1.5, sm: 3, md: "3cm"}, }}>
    #123465
   </Typography>
   <Typography variant='h3' color='#000000' sx={{mt: 1, ml: {xs: 1.5, sm: 3, md: "3cm"}, fontFamily: "serif" }} >
   Fine & Decorative Antique, Vintage & Modern Rugs
   </Typography>
   <Typography variant='body1' color='#905A47' sx={{mt: 1, ml: {xs: 1.5, sm: 3, md: "3cm"}, fontFamily: "revert-layer" }}>
   This product is in a very good condition. The pile is mostly full and even with minor areas of wear showing. The two ends are complete and secured.
   </Typography>
   <Typography variant='h6' color='#361B12' sx={{mt:2,ml: {xs: 1.5, sm: 3, md: "3cm"}, fontFamily: "serif", fontWeight: "bold"  }}>
    Estimate:
   </Typography>
   <Typography variant='body1' color='#905A47' sx={{mt:1,ml: {xs: 1.5, sm: 3, md: "3cm"}, fontFamily: "serif", fontWeight: "bold"  }}>
   $4,000 - $6,000
   </Typography>
   <Box sx={{ display: "flex", justifyContent: "center", mt: 3, px: 2 }}>
      <Grid container spacing={2} sx={{ ml: { sm: "0cm",md: "2cm", xs: "0" }, maxWidth: { sm: "calc(100% - cm)", xs: "100%" } }}>
       
        <Grid item xs={12} sm="auto" sx={{ display: { xs: "none", sm: "block" }, }}>
          <TableContainer component={Paper} sx={{ border: "1px solid #905A47", borderRadius: 2 , width: "700px"}}>
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

        <Grid item xs={12} sm="auto" sx={{ display: { xs: "none", sm: "block" } }}>
          <TableContainer component={Paper} sx={{ border: "1px solid #905A47", borderRadius: 2 , width: "700px"}}>
            <Table>
              <TableBody>
                {dataRight.map((item, index) => (
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

      
        <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
          <TableContainer component={Paper} sx={{ border: "1px solid #d8c0b0", borderRadius: 2 }}>
            <Table>
              <TableBody>
                {[...dataLeft, ...dataRight].map((item, index) => (
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
      </Grid>
</Box>
 <Box
        display="flex"
        alignItems="center"
        mt={1}
        flexDirection={{ xs: "row", sm: "row" }}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
        sx={{
          mt: 3,
          ml:{xs:3 , sm: "1cm", md:"3cm"},
        }}
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
          mt={{ xs: 1, sm: 1, md: 1 }} 
          flexWrap="wrap"
          justifyContent={{ xs: "start", sm: "start" }}
          sx={{
            mr: {xs:0, sm:3, md: "10cm"},
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
   </>
  )
}

export default RugLiveDetails