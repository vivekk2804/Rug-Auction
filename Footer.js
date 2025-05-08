import React, { useEffect} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Typography,  TextField, Button, IconButton } from "@mui/material";
import { Facebook, Instagram, Pinterest, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import {Container} from "@mui/material";
import Grid from '@mui/material/Grid2'; 
import Group from './img/Group.png';
import Design from './img/Design.png';
import { Link } from "react-router-dom";
const customFont = "'Playfair Display', serif";
const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  feedback: yup.string().required("Feedback is required"),
});

const Footer = () => {
   useEffect(() => {
         window.scrollTo(0, 0); 
     }, []);
     const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(validationSchema),
    });
  
    const onSubmit = (data) => {
      alert("Your data Received Successfully");
      console.log(data);
    };                                                                                                                                             
  return (
    <Container maxWidth="100%" >
    <Box sx={{ bgcolor: "#F5F1EA", color: "#361B12", p: 2, mt: 20 }}>
      
      <Grid container spacing={4} justifyContent="space-evenly" textAlign="justify" marginTop="30px" >
        <Grid item xs={12} md={3}>
        <Grid >
          <Box display="flex" alignItems="center"
          sx={{
            marginRight: {xs: "4.5cm"}
          }}>
          <img src={Group} alt="" width="50px"/>
          <Box sx={{lineHeight: "1", display: "inline-block",}}>
          <Typography variant="h4" fontWeight="bold" color="#905A47" sx={{marginBottom:"-5px", fontFamily: customFont}} >
            Rug  
          </Typography> 
          <Typography variant="h4" fontWeight="bold" color="#5B2E1E" sx={{fontFamily: customFont}}>
             Auction
          </Typography>
          </Box>
          </Box>
          <Box  sx={{maxWidth: {xs: "350px", md: "250px"},
        }}>
          <Typography variant="body2" xs={1} textAlign="justify" justifyContent={{xs: "left"}}
          sx={{
            marginTop: {xs: "20px"},
            fontSize: {xs: "14px"},
            fontWeight: {xs: "500"},
            
          }} >
            Since 2010, Rug Auctions has been offering fine, rare, vintage, antique, and modern decorative rugs to discerning customers and collectors worldwide.
          </Typography></Box>
        
          <Typography variant="h5"   padding="5px" marginTop="10px" sx={{color: {xs: "#5B2E1E",  md: "#905A47"},fontFamily: customFont}}>
            Socials
          </Typography>
          <Box mt={2}>
            <IconButton color="inherit" ><Facebook sx={{fontSize: 30}} /></IconButton>
            <IconButton color="inherit"><Instagram sx={{fontSize: 30}}/></IconButton>
            <IconButton color="inherit"><Pinterest sx={{fontSize: 30}}/></IconButton>
            <IconButton color="inherit"><LinkedIn sx={{fontSize: 30}}/></IconButton>
            <IconButton color="inherit"><YouTube sx={{fontSize: 30}}/></IconButton>
          </Box>
          </Grid>
        </Grid>
        
        <Grid item xs={6}  md={2}>
         <Typography variant="h6" sx={{
          color: {xs: "#5B2E1E",  md: "#905A47"},
          fontFamily: customFont , 
           fontSize: "25px",
         }}>Quick links
         </Typography>
         <Box sx={{mt: 2, display: "flex", flexDirection: "column" , gap: 1}}>
          <Link component={Link}  to="/aboutus1" style={{textDecoration: "none", color: "#4E3627"}}>About Us </Link>
          <Link  to="/upcomingauction" style={{textDecoration: "none", color: "#4E3627"}}> Upcoming Events</Link>
          <Link  to="/myitem" style={{textDecoration: "none", color: "#4E3627"}}>My items </Link>
          <Link  to="/auctionblog" style={{textDecoration: "none", color: "#4E3627"}}>Auction Blog </Link>
          <Link  to="/faqs" style={{textDecoration: "none", color: "#4E3627"}}>FAQs </Link>
          <Link  to="/contactus" style={{textDecoration: "none", color: "#4E3627"}}>Contact Us </Link>
         </Box>
        </Grid>
        
        <Grid item xs={6}  md={2}>
        <Typography variant="h6" sx={{
          color: {xs: "#5B2E1E",  md: "#905A47"},
          fontFamily: customFont , 
           fontSize: "25px",
         }}>Category
         </Typography>
         <Box sx={{mt: 2, display: "flex", flexDirection: "column" , gap: 1}}>
          <Link  to="/traditional" style={{textDecoration: "none", color: "#4E3627"}}>Traditional </Link>
          <Link  to="/modern" style={{textDecoration: "none", color: "#4E3627"}}> Modern</Link>
          <Link  to="/wool-silk" style={{textDecoration: "none", color: "#4E3627"}}>Wool-silk </Link>
          <Link  to="/bokhra" style={{textDecoration: "none", color: "#4E3627"}}>Bukhra </Link>
          <Link  to="/needlepoint-anbusson" style={{textDecoration: "none", color: "#4E3627"}}>Needle Point & Anbusson</Link>
          <Link  to="/moroccan" style={{textDecoration: "none", color: "#4E3627"}}>Moroccan </Link>
         </Box>
         
        </Grid>

       
        <Grid item xs={12} md={4}>
          <Typography variant="h6"  sx={{color:{xs: "#5B2E1E",  md: "#905A47"}, fontFamily: customFont,  fontSize: "25px"}}>Get Styling Assistance</Typography>
          <Box 
  component="form" 
  mt={2} 
  noValidate 
  autoComplete="off" 
  onSubmit={handleSubmit(onSubmit)}
  display="flex" 
  flexDirection="column" 
  width="100%"  
  maxWidth="550px"  
  mx="auto" 
> 
<TextField
                fullWidth
                label="Enter your name*"
                variant="outlined"
                size="small"
                margin="dense"
                {...register("fullName")}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
    sx={{
      width: "350px",
      '& .MuiOutlinedInput-root': {
        borderRadius: '25px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      }
    }}
  /> 
  <TextField
                fullWidth
                label="Enter your email*"
                variant="outlined"
                size="small"
                margin="dense"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
    sx={{
      width: "350px",
      '& .MuiOutlinedInput-root': {
        borderRadius: '25px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      }
    }}
  />
    <TextField
                fullWidth
                label="Enter your phone number*"
                variant="outlined"
                size="small"
                margin="dense"
                {...register("phoneNumber")}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
    sx={{
      width: "350px",
      '& .MuiOutlinedInput-root': {
        borderRadius: '25px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      }
    }}
  /> 
   <TextField
                fullWidth
                label="Enter your message*"
                variant="outlined"
                size="small"
                margin="dense"
                multiline
                rows={3}
                {...register("feedback")}
                error={!!errors.feedback}
                helperText={errors.feedback?.message}
    sx={{
      width: "350px",
      '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8B5D46',
      }
    }}
  /> 
  <Button 
   type='submit'
    variant="contained" 
    sx={{ 
      mt: 2, 
      bgcolor: "#000",  
      color: "#fff",
      borderRadius: "25px",
      width: "120px",
      textTransform: "none",
      fontWeight: "bold",
      boxShadow: "3px 3px 5px rgba(0,0,0,0.2)",
      '&:hover': {
        bgcolor: "#333",  
      }
    }}
  >
    Submit
  </Button>
</Box>
        </Grid>
      
      </Grid>  
      <Box mt={4} textAlign="center">
      <IconButton sx={{ bgcolor: "#905A47", color: "white", float: "right", mb: "15px", height: {xs: "60px", md: "80px"}, width: {xs: "60px", md: "80px"} }}>
        <WhatsApp style={{ height:"40px", width: "40px"}} />
        </IconButton>
<Box 
  sx={{ 
    width: "100%", 
    height: { xs: "90px", sm: "110px", md: "110px" } 
  }}
>
  <img 
    src={Design} 
    alt="" 
    style={{ 
      width: "100%", 
      height: "24px", 
      objectFit: "cover" 
    }} 
  />
</Box>
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" }, 
    justifyContent: { xs: "center", sm: "space-between" }, 
    alignItems: "center",
    gap: { xs: 1, sm: 0 }, 
    p: 2,
  }}
>
  <Typography variant="body2">© 2024 Rug Auctions All Rights Reserved.</Typography> 
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: "20px",
    }}
  >  
    <Link  to="/termsandconditions" style={{textDecoration: "none", color: "#4E3627"}}>Terms & Conditions</Link>
    <Link  to="/privacypolicy" style={{textDecoration: "none", color: "#4E3627"}}>Privacy Policy </Link>
  </Box>
</Box>
  </Box>
    </Box>
    </Container>
  );
};

export default Footer;