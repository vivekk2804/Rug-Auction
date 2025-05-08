import React, { useState } from "react";
import { DialogTitle, DialogContent, DialogActions, TextField, Button, Divider, IconButton, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ForgotPassword = ({ onClose }) => {
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotEmailError, setForgotEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForgotEmailBlur = () => {
    if (!forgotEmail.includes("@")) {
      setForgotEmailError("Invalid email address");
    } else {
      setForgotEmailError("");
    }
  };

   const [email, setEmail] = useState("");                                 // to store user's email
    const [emailError, setEmailError] = useState("");    
    const [password, setPassword] = useState("");                    // error for email
    const [openForgotPassword, setOpenForgotPassword] = useState(false);     // trigger forgot psw
    const [openForgotModal, setOpenForgotModal] = useState(false);           // show forgot psw modal
    const [openResetModal, setOpenResetModal] = useState(false);             // show reset psw modal
    const [newPassword, setNewPassword] = useState("");                      // store new psw input
    const [confirmPassword, setConfirmPassword] = useState("");              // store confirm psw input
    const [passwordError, setPasswordError] = useState("");                  // error for new psw
    const [confirmPasswordError, setConfirmPasswordError] = useState("");    // error for confirm psw 
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to validate email format
      return emailRegex.test(email);
    };
    const handleEmailBlur = () => {
      if (!email) {
        setEmailError("Email is required.");
      } else if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    };
    const handlePasswordBlur = () => {
      if (!password) {
        setPasswordError("Password is required.");
      } else if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters.");
      } else {
        setPasswordError("");
      }
    };
    const validatePasswords = () => {
      let isValid = true;
      if (!newPassword) {
        setPasswordError("Password is required.");
        isValid = false;
      } else if (newPassword.length < 8) {
        setPasswordError("Password must be at least 8 characters.");
        isValid = false;
      } else {
        setPasswordError("");
      }
      if (!confirmPassword) {
        setConfirmPasswordError("Confirm Password is required.");
        isValid = false;
      } else if (confirmPassword !== newPassword) {
        setConfirmPasswordError("Passwords do not match.");
        isValid = false;
      } else {
        setConfirmPasswordError("");
      }
      return isValid;
    };
    const handleResetClick = () => {
      if (!validateEmail( forgotEmail)) {
        setForgotEmailError("Please enter a valid email address.");
        return;
      }
      setForgotEmailError("");
      handleOpenResetModal(); // if valid, clear error and open reset modal
    };
    const handleOpenResetModal = () => {
      setOpenForgotModal(false); // close forgot password modal
      setOpenResetModal(true);   // open reset password modal
    };
    const handleCloseResetModal = () => setOpenResetModal(false);
    const handleSignUpClick = () => {
      const isEmailValid = validateEmail(email);
      const isPasswordValid = password.length >= 8;
      if (!email) {
        setEmailError("Email is required.");
      } else if (!isEmailValid) {
        setEmailError("Please enter a valid email address.");
      }
      if (!password) {
        setPasswordError("Password is required.");
      } else if (!isPasswordValid) {
        setPasswordError("Password must be at least 8 characters.");
      }
      if (isEmailValid && isPasswordValid) {
        alert("Sign up successful!");
      }
    };
    const handleResetSubmit = () => {
      if (validatePasswords()) {
        alert("Password successfully reset!");
        handleCloseResetModal();
      }
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailError(""); 
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordError(""); 
    }; 
    const handleNewPasswordChange = (e) => {
      setNewPassword(e.target.value);
      setPasswordError(""); 
    };
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      setConfirmPasswordError(""); 
    };
  return (
    <DialogContent>
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
    
       <TextField
         fullWidth
         variant="outlined"
         placeholder="Enter your email"
         value={forgotEmail}
         onChange={(e) => setForgotEmail(e.target.value)}
         onBlur={handleForgotEmailBlur}
         error={!!forgotEmailError}
         helperText={forgotEmailError}
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
         sx={{
           mt:-1,
           backgroundColor: "black",
           color: "white",
           borderRadius: "25px",
           height: 50,
           mr:4,
         }}
         onClick={handleResetClick}
       >
         Reset
       </Button>
     </DialogActions>
     </DialogContent>
  );
};

export default ForgotPassword;
