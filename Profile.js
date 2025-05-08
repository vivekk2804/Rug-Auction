import React, { useState } from 'react'
import { useEffect } from 'react';
import {Box,Avatar,Modal, Backdrop,  Typography,TextField, Divider,Button, Grid,Paper,useMediaQuery,  Container} from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from '@mui/material/styles';
 

const Profile = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    address:"",
    city:"",
    state:"",
    pincode:"",
    oldPassword:"",
    newPassword:"",
    confirmPassword:"",
  });
   const [errors, setErrors] = useState({});
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const validateField = (name, value) => {
    let message = "";

    if (name === "firstName") {
      if (!value) message = "First Name is required";
    } else if (name === "lastName") {
      if (!value) message = "Last Name is required";
    } else if (name === "email") {
      if (!value) message = "Email is required";
      else if (!emailPattern.test(value)) message = "Invalid Email";
    } else if (name === "password") {
      if (!value) message = "Password is required";
      else if (value.length < 8) message = "Password must be at least 8 characters";
    } else if (name === "address") {
      if (!value) message = "Address is required";
    } else if (name === "city") {
      if (!value) message = "City name is required";
    } else if (name === "state") {
      if (!value) message = "State name is required";
    } else if (name === "pincode") {
      if (!value) message = "Pincode number is required";
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: message,
    }));
  };
  const validate = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));
    return Object.values(tempErrors).every((error) => !error);
  };
   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  validateField(name, value);
};
   const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Data Saved Successfully");
    }
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formData.oldPassword) newErrors.oldPassword = "Old Password is required";
    if (!formData.newPassword) {
      newErrors.newPassword = "New Password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "New Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      alert("Password changed successfully!");
      handleClose();
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   <>
   <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
        <Typography variant="body1" color="textSecondary" marginLeft="30px">
          <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt;
          <span style={{ color: "#5B2E1E" }}> Profile</span>
        </Typography>
      </Box>

     
      <Box mt={5}>
        <Typography
          variant="h4"
          color="#6C3C2B"
          sx={{
            fontFamily: "serif",
            paddingLeft: { xs: 2, sm: 8, md: 8 },
            paddingRight: { xs: 4, sm: 8, md: 8 },
          }}
        >
            Account Profile
        </Typography>
        <Divider
          color="#DCD0BA"
          sx={{
            marginLeft: { xs: 2, sm: 8, md: 8 },
            marginRight: { xs: 4, sm: 8, md: 8 },
          }}
        />
      </Box>
      <Container maxwidth="md" sx={{mt: 4}}>
        <Paper elevation={1} sx={{p:3, borderRadius: 4}}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "space-between" },
                flexDirection: { xs: "column", sm: "row" },
                backgroundColor: {xs:"none", sm:"#5B2E1E", md: "#5B2E1E"},
                color: "white",
                borderRadius: 4,
                border: "1px solid #905A47",
                p: 2,
                width: { xs: "90%", sm: "auto" },
                textAlign: { xs: "center", sm: "left" },
            }}>
                <Box sx={{display: "flex", flexDirection: {xs:"column", sm:"row", md:"row"}, alignItems: "center", }}>
                    <Avatar src="\Avatar.png" sx={{width: 80, height: 80, mr: 2}}/>
                <Box>
                    <Typography variant='h6'>Mark Johnson</Typography>
                    <Typography variant='body2' sx={{display:{xs: 'none', sm: "block", md: "block"}}}>mark@gmail.com</Typography>
                </Box>
            </Box>
            <Box>
            <Button variant="outlined" onClick={handleOpen} sx={{ color: {xs:"#000", sm:"white", md:"white"}, borderColor: {xs:"#000", sm:"white", md:"white"}, mr: 1 , borderRadius: 4}}>
              Change Password
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
                        width: {xs:320, sm:400, md:400},
                        bgcolor: "#F3F0EB",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 3,
                      }}
                    >
                      <Typography variant='h6'color='#361B12' sx={{padding:1,fontFamily:"inherit" }}>
                            Change Password
                        </Typography>
                        <Divider color="#905A47" sx={{ marginBottom: 1, ml:1,  }}/>
                     <TextField fullWidth variant='outlined' size='small' label='Old Password' 
                      type="password"
                      name="oldPassword"
                      value={formData.oldPassword}
                      onChange={handleChange}
                      error={!!errors.oldPassword}
                      helperText={errors.oldPassword}
                                  sx={{mt:2,
                                     "& .MuiOutlinedInput-root": {
                                         borderRadius: 50, 
                                         border: "1px solid #905A47",
                                     }
                     
                                 }}/>
                                 <TextField fullWidth variant='outlined' size='small' label='New Password' 
                                   type="password"
                                   name="newPassword"
                                   value={formData.newPassword}
                                   onChange={handleChange}
                                   error={!!errors.newPassword}
                                   helperText={errors.newPassword}
                                  sx={{mt:2,
                                     "& .MuiOutlinedInput-root": {
                                         borderRadius: 50, 
                                         border: "1px solid #905A47",
                                     }
                     
                                 }}/>
                                 <TextField fullWidth variant='outlined' size='small' label='Confirm New Password'
                                  type="password"
                                  name="confirmPassword"
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  error={!!errors.confirmPassword}
                                  helperText={errors.confirmPassword} 
                                  sx={{mt:2,
                                     "& .MuiOutlinedInput-root": {
                                         borderRadius: 50, 
                                         border: "1px solid #905A47",
                                     }
                     
                                 }}/>
                                 <Box sx={{display: "flex", gap:2, mt:2}}>
                                 <Button onClick={handleClose} variant='outlined'   sx={{mt:1, borderRadius:"50px", color:"#000", width: "48%", border:"1px solid #905A47"}}>Cancel</Button>
                                 <Button  onClick={handleSave}variant='contained' sx={{mt:1, borderRadius:"50px", backgroundColor:"black", width:"48%"}}>Save</Button>
                                 </Box>
                    </Box>
                  </Modal>
            <Button component={Link} to="/contactus" variant="contained" sx={{ backgroundColor: {xs:"#F4F6F7", sm: "#e8d8c2", md: "#e8d8c2"}, color: "black" , borderRadius: 4,}}>
              Logout
            </Button>
          </Box>
        </Box>
        <form onSubmit={handleSubmit}>
        <Box sx={{mt:3}}>
            <Typography variant='subtitle1' sx={{fontWeight:"bold" , fontFamily: "inherit"}}>Personal Information</Typography>
            <Grid container spacing={2} sx={{mt:1}}>
                <Grid item xs={12} sm={6} >
                <TextField  fullWidth  variant="outlined"  label={isMobile ? "First Name" : "Mark"} 
                name="firstName"
               value={formData.firstName}
               onChange={handleChange} 
               onBlur={(e) => validateField(e.target.name, e.target.value)}
               error={!!errors.firstName} helperText={errors.firstName}
              InputLabelProps={{
                
                style: {
                  color: "black", 
                  fontWeight: "bold",
                },
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
                }} />
                </Grid>
                
                <Grid item xs={12} sm={6}>
              <TextField fullWidth  variant="outlined" label={isMobile ? "Last Name" : "Johnson"}
               name="lastName"
               value={formData.lastName}
               onChange={handleChange}
               onBlur={(e) => validateField(e.target.name, e.target.value)}
               error={!!errors.lastName}
               helperText={errors.lastName}
              InputLabelProps={{
                 
                style: {
                  color: "black", 
                  fontWeight: "bold",
                },
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
              }}  />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth  variant="outlined"  label={isMobile ? "Email Address" : "mark@gmail.com"}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              
              InputLabelProps={{
               
                style: {
                  color: "black", 
                  fontWeight: "bold",
                },
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
              }}   />
            </Grid>
            <Grid item xs={12} sx={{display: {sm: "none", md: "none"}}}>
              <TextField fullWidth  variant="outlined"  label="Password" 
               name="password"
               type="password"
               value={formData.password}
               onChange={handleChange}
               onBlur={(e) => validateField(e.target.name, e.target.value)}
               error={!!errors.password}
               helperText={errors.password}
              
            InputLabelProps={{
             
              style: {
                color: "black", 
                fontWeight: "bold",
              },
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
              }}   />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth  variant="outlined"  label="Address" 
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              error={!!errors.address}
              helperText={errors.address}
               
             InputLabelProps={{
              
              style: {
                color: "black", 
                fontWeight: "bold",
              },
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
              }}   />
            </Grid>
            </Grid>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth  variant="outlined"  label={isMobile ? "City" : "Bhuj"}
             name="city"
             value={formData.city}
             onChange={handleChange}
             onBlur={(e) => validateField(e.target.name, e.target.value)}
             error={!!errors.city}
             helperText={errors.city}
              InputLabelProps={{
                
                style: {
                  color: "black", 
                  fontWeight: "bold",
                },
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
              }}  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth variant="outlined"  label={isMobile ? "State" : "Gujarat"} 
               name="state"
               value={formData.state}
               onChange={handleChange}
               onBlur={(e) => validateField(e.target.name, e.target.value)}
               error={!!errors.state}
              InputLabelProps={{
                style: {
                  color: "black", 
                  fontWeight: "bold",
                },
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
              }}  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth  variant="outlined"  label={isMobile ? "Pincode" : "121233"}
               name="pincode"
               value={formData.pincode}
               onChange={handleChange}
               onBlur={(e) => validateField(e.target.name, e.target.value)}
               error={!!errors.pincode}
               helperText={errors.pincode}
            
              InputLabelProps={{
                
                style: {
                  color: "black", 
                  fontWeight: "bold",
                },
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
          </Grid>
       
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sx={{display: {xs: 'none', sm:"flex", md: "flex"}}} >
              <TextField fullWidth label="Card Number" variant="outlined"
               InputLabelProps={{
                style: {fontWeight: "bold", fontFamily:"revert-layer",color: "#000"}
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
          </Grid>
        </Box>
        <Box sx={{ mt: 3, }}>
     
      <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, display: {xs: 'none'} }}>
        Saved card
      </Typography>

      <Box sx={{ display: {xs: 'none', sm: 'flex', md: "flex"}, justifyContent: "space-between", alignItems: "center", }}>
      
        <Paper
          sx={{
            p: 2,
            borderRadius: 5,
            border: "1px solid #905A47",
            width: "40%",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            John Markel Deo
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            **** **** **** 8963
          </Typography>
        </Paper>

        
        <Button variant="outlined" sx={{ borderRadius: 5, color: "#000" , border: "1px solid #000", mb: 3 }}>
          Add New Card <AddIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

    
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 , mr: 2}}>
        <Button
        type='submit'
        onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            px: 8,
            borderRadius: "50px",
            width: {xs: "100%", sm: "20%", md: "20%",  }
            
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
    </form>
    </Paper>
    </Container>
   </>
  );
};

export default Profile
