import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Apple } from "@mui/icons-material";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required."),
});
    const forgotPasswordSchema = yup.object().shape({
      forgotEmail: yup.string().email("Please enter a valid email address.").required("Email is required."),
    });
    const resetPasswordSchema = yup.object().shape({
      newPassword: yup
        .string()
        .min(8, "Password must be at least 8 characters.")
        .required("New password is required."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Passwords do not match.")
        .required("Confirm password is required."),
    });
const Login = ({  onSwitch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register: registerForgot,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors },
    reset: resetForgot,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const {
    register: registerReset,
    handleSubmit: handleResetSubmit,
    formState: { errors: resetErrors },
    reset: resetResetForm,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openResetModal, setOpenResetModal] = useState(false);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: data.email,
        password: data.password,
      });
  
      if (response.status === 200) {
        alert("Sign in successful!");
        console.log("API Response:", response.data); // Log response
        localStorage.setItem("token", response.data.token); // Store token (optional)
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error || "Login failed");
        console.error("Error Response:", error.response.data);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  
    reset();
  };
  const onForgotSubmit = async (data) => {
    console.log("Forgot Password Email:", data.forgotEmail);
    setOpenForgotPassword(false);
    setOpenResetModal(true);
  console.log("Reset Password Modal should open now");
  };
  const onResetSubmit = async (data) => {
    console.log("New Password Data:", data);
    alert("Password has been reset successfully!");
    resetResetForm();
    setOpenResetModal(false);
  };
  const handleResetClick = () => setOpenResetModal(true);
  const handleCloseResetModal = () => setOpenResetModal(false);
  useEffect(() => {
    console.log("Reset Modal State Changed:", openResetModal);
  }, [openResetModal]);
  return (    
    <Container maxWidth="lg">
       <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} md={6} sx={{p:0}}>
              <Box
                component="img"
                src="/Login.png"
                alt="Login"
                sx={{  
                  width: {xs:"350px", sm:"675px" , md:"100%"},
                  height: { xs: "280px", sm: "400px", md: "100%" },
                  ml: { xs: -4, sm: -5, md: -5 },
                  mt: { xs: -1,sm:-1, md: -2 },
                  mb:-2,
                  objectFit: "cover",
                 borderRadius:"20px",
                 display: "block",   
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 0, py: 3,}}>
              <Typography
                variant="h4"
                color="#361B12"
                sx={{ fontFamily: "serif", fontWeight: {xs:"none",sm:"bold", md:"bold"}, textAlign: "left",ml:{xs:0,sm:0, md:0}, fontSize:{xs:"30px", md:"35px"} }}
              >
                Sign in to Rug Auction
              </Typography>
              <Divider sx={{ my: 1, mb:2,backgroundColor: "#DCD0BA" }} />
              <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
                sx={{
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
                }}          />
             <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              
                sx={{mt:1,
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
           <Typography
  variant="body2"
  color="#905A47"
  sx={{ cursor: "pointer", textAlign: "right", mb: 3 }}
  onClick={() => {
    resetForgot(); 
    setOpenForgotPassword(true);  // Open the Forgot Password dialog
  }}
>
  Forgot Password?
</Typography>
 <Dialog
  open={openForgotPassword}
  onClose={() => setOpenForgotPassword(false)}
  maxWidth="xs"
  fullWidth
  sx={{
    "& .MuiDialog-paper": {
      bgcolor: "#F3F0EB",
      p: 1,
      borderRadius: "15px",
    },
  }}
>
  <DialogTitle
    sx={{
      fontFamily: "serif",
      color: "#361B12",
      textAlign: "left",
      fontSize:"25px"
    }}
  >
    Forgot Password
  </DialogTitle>
  <Divider color="#905A47" sx={{ mb: 2, mt: -1, ml:2,mr:5 }} />
  <DialogContent>
  <form onSubmit={handleForgotSubmit(onForgotSubmit)}>
  <TextField
        fullWidth
        label="Enter your email"
        {...registerForgot("forgotEmail")}
        error={!!forgotErrors.forgotEmail}
        helperText={forgotErrors.forgotEmail?.message}
      sx={{ml:-2,
        "& .MuiOutlinedInput-root": { borderRadius: "25px" },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#8B5D46" },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8B5D46",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8B5D46",
        },
      }}
    />
  
  <DialogActions>
    <Button
      fullWidth
      variant="contained"
     type="submit"
      sx={{
        mt:1,
        backgroundColor: "black",
        color: "white",
        borderRadius: "25px",
        height: 50,
        mr:0,
      }}
    >
      Reset
    </Button>
  </DialogActions>
  </form>
  </DialogContent>
</Dialog>
<Dialog
  open={openResetModal}
  onClose={() => setOpenResetModal(false)}
  maxWidth="xs"
  fullWidth
  sx={{
    "& .MuiDialog-paper": {
      bgcolor: "#F3F0EB",
      p: 1,
      borderRadius: "15px",
      textAlign: "left",
    },
  }}
>
  <DialogTitle sx={{ fontFamily: "serif", color: "#361B12", fontSize:"25px" }}>
    Reset Password
  </DialogTitle>
  <Divider color="#905A47"sx={{mt:-2, ml:2,mr:4}} />
  <DialogContent>
  <form onSubmit={handleResetSubmit(onResetSubmit)}>
  <TextField
            fullWidth
            label="New Password"
            {...registerReset("newPassword")}
            error={!!resetErrors.newPassword}
            helperText={resetErrors.newPassword?.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        mb: 2,
        mt: 2,
        "& .MuiOutlinedInput-root": { borderRadius: "25px" },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#8B5D46" },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8B5D46",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8B5D46",
        },
      }}
    />
     <TextField
            fullWidth
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            {...registerReset("confirmPassword")}
            error={!!resetErrors.confirmPassword}
            helperText={resetErrors.confirmPassword?.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        mb: 2,
        "& .MuiOutlinedInput-root": { borderRadius: "25px" },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#8B5D46" },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8B5D46",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8B5D46",
        },
      }}
    />
  <DialogActions>
    <Button
      fullWidth
      variant="contained"
      type="submit"
      sx={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "25px",
        height: 45,
        mt: 2,
      }}
    >
      Submit
    </Button>
  </DialogActions>
  </form>
  </DialogContent>
</Dialog>
  <Button
      fullWidth
       variant="contained"
       type="submit"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "30px",
                  py: 1.5
                }}
              >
                Sign In
              </Button>
              <Typography textAlign="center" mt={2}>
                <span style={{ color: "#905A47" }}>Don't have an account?</span>{" "}
                <Link onClick={onSwitch}   style={{ color: "#361B12", textDecoration: "none", fontWeight: "bold" }}>
                  Sign up for free
                </Link>
              </Typography>

              <Divider sx={{ my: 2 }}>OR</Divider>
              <Button
                fullWidth
                variant="outlined" color="#000"
                sx={{ borderRadius: "50px", mb: 1, textTransform: "none", border:"1px solid #905A47" }}
              >
                <img src="/google.png" alt="Google" style={{ width: 20, marginRight: 8 }} />
                Log in with Google
              </Button>
              <Button
                fullWidth
                color="#000"
                variant="outlined"
                sx={{ borderRadius: "50px", mb: 1, textTransform: "none", border:"1px solid #905A47" }}
              >
                <img src="/facebook.png" alt="Facebook" style={{ width: 20, marginRight: 8 }} />
                Log in with Facebook
              </Button>
              <Button
                fullWidth
                color="#000"
                variant="outlined"
                sx={{ borderRadius: "50px", textTransform: "none",  border:"1px solid #905A47" }}
                startIcon={<Apple />}
              >
                Log in with Apple
              </Button>
            </Grid>
          </Grid>
          </form>
        </Container>
  );
};
export default Login;
