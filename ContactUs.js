import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  feedback: yup.string().required("Feedback is required"),
});

const ContactUs = () => {
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
    <>
      <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
        <Typography variant="body1" color="textSecondary" marginLeft="30px">
          <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>
            Home
          </Link>{" "}
          &gt; <span style={{ color: "#5B2E1E" }}> Contact Us</span>
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#faf7f5", py: 8 }}>
        <Container maxWidth="lg" sx={{ marginBottom: "-150px" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "serif",
              color: "#6C3C2B",
              textAlign: "left",
              mb: 4,
            }}
          >
            Let's Connect
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your full name*"
                    {...register("fullName")}
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B5D46",
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email*"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B5D46",
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your phone number*"
                    {...register("phoneNumber")}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B5D46",
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your message*"
                    multiline
                    rows={4}
                    {...register("feedback")}
                    error={!!errors.feedback}
                    helperText={errors.feedback?.message}
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B5D46",
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#8B5D46",
                        },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "30px",
                      color: "#fff",
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.8)",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: "#f9f5f0",
                    padding: "20px",
                    border: "1px solid #d4b9b3",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#905A47",
                      mb: 2,
                    }}
                  >
                    Visit Us
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <LocationOn sx={{ color: "#905A47", mr: 1 }} />
                    <Typography variant="body1">
                      Exceedingly Rare Miniature Painted Bunting A. Elmer
                      Crowell (1862-1952) East Harwich, MA, c. 1910 2 3/4 in.
                      long
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#905A47",
                      mt: 3,
                      mb: 2,
                    }}
                  >
                    Contact Us
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Phone sx={{ color: "#905A47", mr: 1 }} />
                    <Typography variant="body1">(702) 899-4205</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Email sx={{ color: "#905A47", mr: 1 }} />
                    <Typography variant="body1">cs@rugauctions.com</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
