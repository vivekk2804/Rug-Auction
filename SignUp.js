import React, {useState} from "react";
import { useEffect } from "react";
import * as Yup from "yup";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm Password is required"),
  termsChecked: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

const SignUp = ({  onSwitch }) => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsChecked: false,
  });
  const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const {  value, type, checked } = e.target;
    setFormData({ ...formData, [fieldName]: type === "checkbox" ? checked : value });
  setErrors((prevErrors) => ({
    ...prevErrors,
    [fieldName]: "",
  }));
};
const handleSubmit = (e) => {
  e.preventDefault();
  try {
    validationSchema.validateSync(formData, { abortEarly: false });
    alert("Sign up successful!");
  } catch (error) {
    const tempErrors = {};
    error.inner.forEach((err) => {
      tempErrors[err.path] = err.message;
    });
    setErrors(tempErrors);
  }
};
  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "#F3F0EB", minHeight: "45vh", display: "flex", alignItems: "center",  borderRadius:"15px", }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent:"left",
        
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/Signup.png" 
            alt="Signup Image"
            sx={{
              width: {xs:"360px", sm:"675px" , md:"100%"},
              height: { xs: "280px", sm: "400px", md: "100%" },
              borderRadius: "10px",
              objectFit:"cover",
              ml:{xs:-4, sm:-2, md:-3},
              mt:{xs:0, sm:0, md:0},
            
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <Box sx={{mb: 1}}>
        <Typography
          variant="h4"
          color="#361B12"
          sx={{
            fontFamily: "serif",
           ml: {xs: 0, sm:0, md: 2},
           mt:{xs:0, sm:0, md:-5},
           fontWeight: {xs:"none",sm:"bold", md:"bold"},
           fontSize:{xs:"30px", md:"35px"} ,
          }}
        >
            Sign Up to Rug Auction
        </Typography>
        <Divider
          color="#DCD0BA"
          sx={{
            ml: {xs: 0, sm:0, md: 2},
            mr:{xs: 0, sm: 0, md: 1},
            mb:{xs:2, sm:2, md:3}
          }}
        />
      </Box>
      <form onSubmit={handleSubmit}>
          <Grid container spacing={2} 
          sx={{
          }}
          >
            {["firstName", "lastName", "email"].map((field) => (
            <Grid item xs={12}  sm={field === "email" ? 12 : 6} key={field}>
             <TextField
                    fullWidth
                    variant="outlined"
                    label={field === "email" ? "Enter Email address" : field.replace(/([A-Z])/g, " $1").trim()}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    error={!!errors[field]}
                    helperText={errors[field]}
                    InputLabelProps={{
                      style: { fontWeight: "bold", fontFamily: "revert-layer", color: "#000" },
                    }}
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
                      }}
                  />
            </Grid>
            ))}
              {["password", "confirmPassword"].map((field) => (
                <Grid item xs={12} key={field}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={field === "password" ? "Enter your password" : "Re-enter Password"}
                    name={field}
                    type={field === "password" ? (showPassword ? "text" : "password") : (showConfirmPassword ? "text" : "password")}
                    value={formData[field]}
                    onChange={handleChange}
                    error={!!errors[field]}
                    helperText={errors[field]}
                    InputLabelProps={{
                      style: { fontWeight: "bold", fontFamily: "revert-layer", color: "#000" },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              field === "password" ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {field === "password" ? (showPassword ? <VisibilityOff /> : <Visibility />) : showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
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
                      }}
                  />
                </Grid>
              ))}

            <Grid item xs={12}>
              <FormControlLabel sx={{color: "#905A47" ,mt: 2}}
                control={<Checkbox name="termsChecked" checked={formData.termsChecked} onChange={handleChange} sx={{color:"#905A47"}}/>}
                label="By continuing, you agree to our Terms and conditions"
              />
              {errors.termsChecked && <Alert severity="error">{errors.termsChecked}</Alert>}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: "black", color: "white", borderRadius:"25px" }}>
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography color="#905A47">
                Already have an account? <Button  onClick={onSwitch}  sx={{ textTransform: "none", color:"#361B12" }}>Sign in</Button>
              </Typography>
            </Grid>
          </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;