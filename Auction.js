import React from 'react'
import { useEffect } from 'react'
import { Typography,Box} from '@mui/material'
import Container from '@mui/material/Container' 
import Frame from  "./img/woman-wearing-blue-denim-jacket-across-plates 1.png"



const  Auction = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  return (
    
    <Container maxWidth="lg">
  <Typography variant='h4' align='center' color='#5B2E1E' style={{ marginTop: "10px" , fontFamily: "serif", fontWeight: "bold"}}>
    How It Works
  </Typography>
  <Box
    display="flex"
    flexDirection={{ xs: "column", md: "row" }} 
    justifyContent="center"
    alignItems= "stretch"
    sx={{
      width: "100%",
      height: "100%",
       
      gap:"0px",
    }}
  >
    <Box
      sx={{
        flex: 1,
        height: { xs: "auto", md: "100%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: {xs : "0px", md: "32px"},
       
      }}
    >
      <img className='image'
        src={Frame}
        alt="Rug-image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      />
    </Box>
    <Box className="box"
      sx={{
        flex: 1,
        Height: { xs: "auto", md: "100%" }, 
        color: "white",
        backgroundColor: "#5B2E1E", 
        padding: { xs: "20px", md: "30px" }, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
        marginTop: { xs: "0px", md: "32px"},
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        
      }}
    >
      <Typography variant='body2' style={{ textAlign: "justify", fontSize: "17px", padding: "9px" }}>
        For those attending an auction for the first time, don’t worry… you won’t get stuck with a $20M Van Gogh just because of an ill-timed scratch of the nose. The auction process, at least in the modern era, goes back 470 years and is a tightly run operation that leaves nothing to chance.
      </Typography>
      <Typography variant='body2' style={{  textAlign: "justify", fontSize: "17px", padding: "9px" }}>
        An online-only auction takes place only online. Bidding activity takes place on the internet over a set period of time and there are no in-room, telephone, or absentee bidders.
      </Typography>
      <Typography variant='body2' style={{  textAlign: "justify", fontSize: "17px", padding: "9px" }}>
        Live Auction
      </Typography>
      <Typography variant='body2' style={{ textAlign: "justify", fontSize: "17px", padding: "9px" }}>
        A live auction is hosted by an auctioneer in real time, typically at the gallery or salesroom of the auctioneer, and is held before an audience of bidders.
      </Typography>
    </Box>
  </Box>
</Container>    
  );
};
export default Auction;

