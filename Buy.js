import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  CardMedia
} from "@mui/material";

const states = ["New York", "California", "Texas", "Florida"];

const CheckoutPage = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 20,
      bgcolor: "white",
      "& fieldset": { borderColor: "#800000" },
      "&:hover fieldset": { borderColor: "#660000" },
      "&.Mui-focused fieldset": { borderColor: "#800000" },
    },
  };

  return (
    <>
     <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
                
                <Typography variant="body1" color="textSecondary" marginLeft="30px">
                  <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt; 
                  <span style={{ color: "#5B2E1E" }}> Rug Details</span>
                </Typography>
                
              </Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ fontFamily: 'serif', color: "#5C2E1E" }} gutterBottom>
              Buyer Information
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth placeholder="First Name" variant="outlined" sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth placeholder="Last Name" variant="outlined" sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth placeholder="Email Address" variant="outlined" sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth placeholder="Mobile Number" variant="outlined" sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth placeholder="Address" variant="outlined" sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <Select
                    defaultValue=""
                    displayEmpty
                    sx={{
                      borderRadius: 20,
                      border: '1px solid rgb(125,45,45)',
                      '&.Mui-focused': {
                        borderColor: 'rgb(125,45,45)',
                      },
                    }}
                  >
                    <MenuItem value="">Select State</MenuItem>
                    {states.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>

                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth placeholder="Zip Code" variant="outlined" sx={textFieldStyle} />
              </Grid>
            </Grid>

            {/* Payment Method */}
            <Typography variant="h4" sx={{ mt: 3, fontFamily: 'serif', color: "#5C2E1E" }}>
              Payment Method
            </Typography>
            <Divider sx={{ mt: 2, mb: 2 }} />

            <FormControl component="fieldset">
              <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <Box sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 2,
                  mt: 2
                }}>
                  {[
                    { value: "paypal", img: "Ppal.png", alt: "PayPal" },
                    { value: "apple_pay", img: "Ipay.png", alt: "Apple Pay" },
                    { value: "google_pay", img: "Gpay.png", alt: "Google Pay" },
                    { value: "amazon_pay", img: "Amazonpay.png", alt: "Amazon Pay" },
                    { value: "crypto", img: "Crypto.png", alt: "Crypto" },
                    { value: "bank_transfer", img: "Pt.png", alt: "Bank Transfer" },
                    { value: "wire", img: "wire.png", alt: "Wire Transfer" },
                    { value: "us_card", img: "Usbank.png", alt: "US Card" },
                  ].map((method) => (
                    <FormControlLabel
                      key={method.value}
                      value={method.value}
                      control={<Radio />}
                      label={<img src={method.img} alt={method.alt} width="100%" height="70%" />}
                    />
                  ))}
                </Box>
              </RadioGroup>
            </FormControl>

            <Divider sx={{ mt: 2, mb: 2 }} />
            <FormControlLabel
              value="credit_card"
              control={<Radio />}
              label={"Debit/Credit Card"}
            />

            {/* Credit Card Fields */}
            {paymentMethod === "credit_card" && (
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <TextField fullWidth placeholder="Cardholder Name" variant="outlined" sx={textFieldStyle} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth placeholder="Card Number" variant="outlined" sx={textFieldStyle} />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth placeholder="CVC" variant="outlined" sx={textFieldStyle} />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth placeholder="MM" variant="outlined" sx={textFieldStyle} />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth placeholder="YYYY" variant="outlined" sx={textFieldStyle} />
                </Grid>
              </Grid>
            )}

            
            <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "black", color: "white", p: 1.5, borderRadius: 20 }}>
              Pay Now
            </Button>
          </Grid>

          
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 3, bgcolor: '#f9f9f9', borderRadius: 3, boxShadow: 0 }}>
              <Typography variant="h5" sx={{ fontFamily: 'serif', color: "#5B2E1E", mb: 2 }}>Rug Details</Typography>
              <Divider sx={{ mb: 3 }} />
              <Box display="flex" alignItems="center" gap={2}>
                <CardMedia component="img" image="/PaymentRug.png" alt="Rug Sample" sx={{ width: "50%", height: 110, borderRadius: 2 }} />
                <CardContent sx={{ padding: 0 }}>
                  <Typography variant="h6" sx={{ fontFamily: 'serif', color: '#5B2E1E', }}>
                    Fine & Decorative Antique, Vintage & Modern Rugs
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#5B2E1E', mt: 1,  }}>
                    9 ft 2 in x 5 ft 10 in (2.79 m x 1.78 m)
                  </Typography>
                </CardContent>

              </Box>
            </Card>
            <Card sx={{ bgcolor: "#f9f9f9", mt: 3 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" mt={2} sx={{ color: "#905A47" }}>
                  <Typography>Sub Total</Typography>
                  <Typography>$5000</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2} sx={{ color: "#905A47" }}>
                  <Typography>Tax</Typography>
                  <Typography>$10</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2} sx={{ color: "#905A47" }}>
                  <Typography>Shipping</Typography>
                  <Typography>$50</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2} sx={{ color: "#905A47" }}>
                  <Typography>Buyer Premium</Typography>
                  <Typography>$50</Typography>
                </Box>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box display="flex" justifyContent="space-between" mt={1}  >
                  <Typography variant="h5" fontWeight="bold">Total</Typography>
                  <Typography variant="h5" fontWeight="bold">$5110</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

    </>
  );
};
export default CheckoutPage;