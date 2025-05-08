import React, { useState } from "react";
import { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RugAuction from "./img/Rug Auction.png";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from './LoginPage';
import SignUp from "./SignUp";
import rlogo from './img/rlogo.png'
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
 const Navbar = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);
  const {
    reset,  // This resets the form values and errors
    setError,  // Used to manually set form errors if needed
    clearErrors, // Clears errors if needed
    formState: { errors }
  } = useForm();
  const [dialogOpen, setDialogOpen] = useState(false);
const [dialogType, setDialogType] = useState("login");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  
  const toggleDrawer = (open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate(); // For navigation

 
  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleDialogOpen = (type) => {
    setDialogType(type);
    setDialogOpen(true);
  };
  
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDialogSwitch = (type) => {
    handleDialogOpen(type);
    if (type === "login") {
      reset(); 
    }
  };
  useEffect(() => {
    if (!dialogOpen) {
      reset(); // Reset form when closing the dialog
    }
  }, [dialogOpen, reset]);

  <Box sx={{ width: 250, padding: 2 }}>
  <List>
    {["Home", "Collections", "Upcoming Auctions", "About Us", "Contact Us"].map((text) => (
      <ListItem button key={text} component={Link} to={`/${text.toLowerCase().replace(/\s/g, "")}`}>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Box>
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#F8F6F3", boxShadow: 0, paddingY: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
            <img src={RugAuction} alt="Rug Auction Logo" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 5, color: "#000000", fontSize: "18px" }}>
            <Button component={Link} to="/" sx={{ color: "black", textTransform: "none" }}>Home</Button>
            <Button component={Link} to="/collections" sx={{ color: "black", textTransform: "none" }}>Collections</Button>
            <Button component={Link} to="/upcomingAuction" sx={{ color: "black", textTransform: "none" }}>Upcoming Auctions</Button>
            <Button component={Link} to="/aboutus1" sx={{ color: "black", textTransform: "none" }}>About Us</Button>
            <Button component={Link} to="/contactus" sx={{ color: "black", textTransform: "none" }}>Contact Us</Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, alignItems: "center", gap: 2, marginRight: "30px" }}>
            <Box sx={{ display: "flex", alignItems: "center", borderRadius: "50px", border: "1px solid #905A47", padding: "5px 15px", width: "200px" }}>
              <SearchIcon sx={{ color: "#000000" }} />
              <InputBase placeholder="Search" sx={{ marginLeft: 1, flex: 1, color: "#000000", "&::placeholder": { color: "black", opacity: 1 } }} />
            </Box>
            <IconButton  component={Link} to="/myitem" sx={{ border: "1px solid #905A47", borderRadius: "50%", color: "#6B3E2E" }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton onClick={handleMenuOpen} sx={{ border: "1px solid #905A47", borderRadius: "50%", color: "#6B3E2E" }}>
              <PersonOutlineIcon />
            </IconButton>
            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
              <MenuItem onClick={() => handleNavigation("/profile")}>Profile</MenuItem>
              <MenuItem onClick={() => handleDialogOpen("login")}>Log In</MenuItem>
              <MenuItem onClick={() => handleNavigation("/signup")}>Sign Up</MenuItem> 
            </Menu>
          </Box>

        
          <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" }, alignItems: "center", gap: 1, marginRight: "10px" }}>
            
            <IconButton  sx={{ border: "1px solid #905A47", borderRadius: "50%", color: "#6B3E2E" }}>
              <FavoriteBorderIcon />
            </IconButton>

            
            <IconButton onClick={handleMenuOpen} sx={{ border: "1px solid #905A47", borderRadius: "50%", color: "#6B3E2E" }}>
              <PersonOutlineIcon />
            </IconButton>

            {/* Mobile Drawer Menu Button */}
        
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: "#6B3E2E" }} />
            </IconButton>
            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleNavigation("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => handleDialogOpen("login")}>Log In</MenuItem>
        <MenuItem onClick={() => handleDialogOpen("signup")}>Sign Up</MenuItem>
      </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog 
        open={dialogOpen} 
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDialogClose();
            reset();
          }
        }}
        disableEscapeKeyDown 
        maxWidth="xl" 
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "90%",
            maxWidth: "1100px",
            borderRadius: "20px",
            backgroundColor: "#F3F0EB",
          }
        }}
      >
          <IconButton
        aria-label="close"
        onClick={handleDialogClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "black",
        }}
      >
        <CloseIcon />
      </IconButton>

         <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  {dialogType === "login" ? (
    <LoginPage 
      onClose={handleDialogClose} 
      onSwitch={() =>handleDialogSwitch("signup")} 
    />
  ) : dialogType === "signup" ? (
    <SignUp 
      onClose={handleDialogClose} 
      onSwitch={() => handleDialogSwitch("login")} 
    />
  ) 
 : null }
</DialogContent>
</Dialog>
      <Drawer 
        anchor='left' 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { width: 160 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
          <img src={rlogo} alt='logo' width={100} />
        </Box>
        <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/" sx={{ color: 'black', textTransform: "none" }}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/collections" sx={{ color: 'black', textTransform: "none" }}>
              <ListItemText primary="Collections" />
            </ListItem>
            <ListItem button component={Link} to="/upcomingauction" sx={{ color: 'black', textTransform: "none" }}>
              <ListItemText primary="Upcoming Auctions" />
            </ListItem>
            <ListItem button component={Link} to="/aboutus1" sx={{ color: 'black', textTransform: "none" }}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/contactus" sx={{ color: 'black', textTransform: "none" }}>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button onClick={() => handleDialogOpen("login")}>
  <ListItemText primary="Log In" />
</ListItem>
<ListItem button onClick={() => handleDialogOpen("signup")}>
  <ListItemText primary="Sign Up" />
</ListItem>
          </List>
        </Box>
      </Drawer>  
   </>
  );
};

export default Navbar;


    