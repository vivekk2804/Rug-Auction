import React from 'react'
import { useEffect } from 'react';
import {  Box, InputBase, Typography,  Divider , Accordion, AccordionSummary, AccordionDetails , List, ListItem, ListItemText} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from "@mui/icons-material/Search";

const collectionsData = [
    { name: "Fine Art", count: 2500 },
    { name: "Traditional", count: 550 },
    { name: "Modern", count: 700 },
    { name: "Moroccan", count: 1000 },
    { name: "Wool & Silk", count: 1250 },
    { name: "Bokhra", count: 1450 },
    { name: "Needle Point & Anbusson", count: 950 },
  ];
export const Filter = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  return (
    <>
     <Box sx={{display: {xs: "none" , md:"block"}}} maxWidth="450px" maxHeight="700px" style={{ backgroundColor:"#F3F0EB", marginTop: "30px" , marginLeft: "60px" , padding: "20px", borderRadius: "15px"}}>
      <Typography variant='h5' sx={{ fontFamily: "Serif"}}>
        Rugs and Carpets
      </Typography>
      <Divider sx={{marginTop: "10px", color: "#DCD0BA"}}></Divider>
      <Box sx={{ display: "flex", alignItems: "center", borderRadius: "50px", border: "1px solid #905A47", padding: "5px 15px", width: "300px", marginTop: "15px"}}>
            <SearchIcon sx={{ color: "#000000" }} />
            <InputBase placeholder="Search within 12,000 results " sx={{ marginLeft: 1, flex: 1, color: "#000000",  "&::placeholder": { color: "black", opacity: 1} }} />
          </Box>
          <Divider sx={{marginTop: "10px", color: "#DCD0BA"}}></Divider>
          <Box >
          <Accordion defaultExpanded style={{backgroundColor: "#F3F0EB",  boxShadow: "none",}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold"  fontFamily= "Serif" >Collections</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "1px", }}>
          <List>
            {collectionsData.map((item, index) => (
              <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between", py: "0"}}>
                <ListItemText primary={item.name}  />
                <Typography>{item.count}</Typography>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Other Filters */}
      {["Age", "Color", "Dimensions"].map((filter, index) => (
        <Accordion key={index} style={{backgroundColor: "#F3F0EB", boxShadow: "none"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontWeight="bold" fontFamily="serif">{filter}</Typography>
          </AccordionSummary>
        </Accordion>
      ))}
      </Box>
    </Box>
    </>
  )
}
