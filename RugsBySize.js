import React from "react";
import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid2'; 
import SmallRugs from "./img/SmallRUgs.png";
import MediumRug from "./img/MediumRug.png";
import LargeRug from "./img/LargeRug.png";
import OverSizedRug from "./img/OverSizedRug.png";
import KitchenRug from "./img/KitchenRug.png";
import RunnersRug from "./img/RunnersRugs.png";
import SquareRug from "./img/SquareRugs.png";

const RugsBySize = () => {
      useEffect(() => {
            window.scrollTo(0, 0); 
        }, []);
  return (
    <>
    <Typography variant="h4" color="#5B2E1E" marginTop="50px" marginBottom="50px" textAlign="center" sx={{
        fontFamily: "serif",
        fontWeight: "bold",
       
    }}>
      Shop By Size
    </Typography>
    <Grid container spacing={2}
    justifyContent="center"
    sx={{
       borderRadius: "30px",
       width: { xs: "95%", sm: "85%", md: "75%", lg: "60%" },
       margin: "auto",
     }} 
>
    <Grid item xs={12}>
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "wrap", lg: "nowrap" },  
            justifyContent: "center",
            alignItems: "flex-end",  // Aligns text at the bottom
            gap: { xs: 2, sm: 4, md: 6 },
            width: { xs: "100%", sm: "80%", md: "90%", lg: "100%" } 
        }}>
            
            {[ 
                { src: SmallRugs, label: "Small Rug" },
                { src: MediumRug, label: "Medium Rug" },
                { src: LargeRug, label: "Large Rug" },
                { src: OverSizedRug, label: "Oversized Rug" }
            ].map((item, index) => (
                <Box 
                    key={index} 
                    sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        justifyContent: "flex-end",  // Ensures text is aligned properly
                        width: { xs: "100%", md: "auto" },
                        minWidth: "120px", 
                        minHeight: "180px",  // Ensures same height for all items
                        textAlign: "center"
                    }}
                >
                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        height: "100px" // Controls image height for uniformity
                    }}>
                        <img src={item.src} alt={item.label}  />
                    </Box>
                    <Typography variant="h6" marginTop="25px">{item.label}</Typography>
                </Box>
            ))}
        </Box>
    </Grid>

    <Grid item xs={12}>
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap:{ xs: "wrap", lg: "nowrap" }, 
            justifyContent: "center",
            alignItems: "flex-end",  // Aligns text at the bottom
            gap: { xs: 2, sm: 4, md: "5rem" }, 
            marginTop: "20px",
            width:  { xs: "100%", sm: "80%", md: "90%", lg: "100%" } 
        }}>
            {[ 
                { src: KitchenRug, label: "Kitchen Rug" },
                { src: RunnersRug, label: "Runner Rug" },
                { src: SquareRug, label: "Square Rug" }
            ].map((item, index) => (
                <Box 
                    key={index} 
                    sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        justifyContent: "flex-end",  // Ensures text aligns
                        width: { xs: "100%", md: "auto" },
                        minWidth: "120px",
                        minHeight: "180px", // Ensures uniform height
                        textAlign: "center"
                    }}
                >
                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        height: "100px"  // Consistent image height
                    }}>
                        <img src={item.src} alt={item.label} />
                    </Box>
                    <Typography variant="h6" marginTop="35px">{item.label}</Typography>
                </Box>
            ))}
        </Box>
    </Grid>
</Grid>


    </>
  );
};

export default RugsBySize;


      
      
        
       
