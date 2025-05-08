import React from 'react'
import { useEffect } from 'react';
import {Box, List, ListItem, ListItemText, Typography, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';


const CollectorRug = () => {
    useEffect(() => {
          window.scrollTo(0, 0); 
      }, []);
  return (
    <>
    <Box sx={{bgcolor:"#E4DDD0"}}>
    <Typography variant='body1' color='#5B2E1E' ml="40px">
        <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt;
        <span style={{ color: "#5B2E1E" }}> Auction Blog</span>  &gt;
        <span style={{ color: "#5B2E1E" }}> Collector rugs at Rug October 15th auction</span>
    </Typography>
</Box>
<Box sx={{ maxWidth: "95%", mx: "auto", p: 2 ,mb:"-100px"}}>
      {/* Blog Image */}
      <Box
    sx={{
      width: "100%",
      height: { xs: "40vh", sm: "50vh", md: "70vh" }, // Different heights for different devices
      borderRadius: "10px",
      overflow: "hidden",
      mt: 3,
    }}
  >
    <img
      src="CCrug.png" // Replace with actual image path
      alt="Blog Cover"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover", // Default behavior
        objectPosition: "center", // Ensures the image is centered
        borderRadius: "10px",
      }}
    />
  </Box>

      {/* Author & Date */}
      <Box display="flex" alignItems="center" mt={2}>
        <Avatar
          alt="Author"
          src="Avatar2.png" // Replace with author's image
          sx={{ width: 32, height: 32, mr: 1 }}
        />
        <Typography variant="body2" color="#000">
        by Farhad Langaroodi | May 16, 2023
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mt: 1,
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        The All In One Guide On How To Clean A Rug
      </Typography>

      {/* Featured Rug */}
      <Typography variant="body2" color="#000" mt={1} mb={3}>
      Featured rug: Santa Fe Jade outdoor rug by William Yeoward
      </Typography>

     

      {/* Blog Content */}
      <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.6 }}>
        More often than not, our rugs get overlooked when it comes to cleaning. Sure, we give them a good vacuum regularly, but is that enough?
        
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6}}>
      Don’t be fooled, cleaning a rug doesn’t have to be a hassle. With the right tips and tricks, you can incorporate this chore into your routine with ease.
      So, if you’ve been wondering how to clean a rug, we’ve got you covered.
      </Typography>

      {/* Subheading */}
      <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
        How To Clean A Rug?
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6}}>
      it’s assume you haven’t cleaned your rug for a while – we get it, it happens. Before getting into a cleaning pattern, you will first want to deep clean your rug. This ensures your rug is pristine and ready for a little refresher every now and then. Here’s the best way to clean a rug: 
      </Typography>

      {/* Steps */}
      <Typography
      variant="body1"
      component="div"
      sx={{
        maxWidth: "95%",
        margin: "auto",
        fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Adjust font size based on screen size
      }}
    >
      <List
        sx={{
          pl: { xs: 1, sm: 2 },
          listStyleType: "disc", // Reduce padding on smaller screens
          mt: 1,
        }}
      >
        <ListItem sx={{ padding: { xs: "5px", sm: "10px" }  ,display: "list-item"}}>
          <ListItemText primary="Start by vacuuming your rug. You want to pick up as much dust and dirt as possible. If you can, get your rug outside and give it a good shake or beat." />
        </ListItem>
        <ListItem sx={{ padding: { xs: "5px", sm: "10px" },  display: "list-item" }}>
          <ListItemText primary="Next, you’ll want to find some carpet shampoo. Always check the rug cleaning instructions as the type of shampoo you need depends on the material. For example, synthetic rugs and natural rugs will need very different treatments but we’ll get into that later. " />
        </ListItem>
        <ListItem sx={{ padding: { xs: "5px", sm: "10px" },  display: "list-item" }}>
          <ListItemText primary="Do a patch test. Find a small area on your rug and apply the shampoo. The corners are usually best for patch testing. Make sure you always do this as you need to make sure the fabric doesn’t react to the shampoo. If you’re not careful, you could apply a whole bottle to a rug only to find it causes discolouration. " />
        </ListItem>
        <ListItem sx={{padding: {xs: "5px", sm: "10px"}, display: "list-item"}}>
            <ListItemText primary="If the patch test didn’t show any problems, you can get to work with the shampoo as per the product's instructions. We would always suggest doing this outside, if you can, to avoid any transfer to other floors or furniture. "/>
        </ListItem>
        <ListItem sx={{padding: {xs: "5px", sm: "10px"}, display: "list-item"}}>
            <ListItemText primary="Let the rug dry and finish with some fabric spray to keep that fresh smell."/>
        </ListItem>
      </List>
    </Typography>
    <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
    How Much Does It Cost To clean a Rug?
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6}}>
      On average, rug cleanings can cost between £19 – £27 for a small rug and £33 – £56 for large rugs. 
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6, mt: 3,}}>
      The cost of a rug cleaning depends on quite a few things. Mostly, it comes down to the size of the rug. Naturally, the bigger the rug, the more expensive the cleaning will be. 
      Other things come into play such as the material. Natural fibres tend to need a little more attention as only specific products can be used. Sometimes, it might even require specialist knowledge. In these cases, it’s always best to get a professional in to make sure the job is done to a high standard. 
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6, mt: 3,}}>
      If cleaning a rug doesn’t bother you, you can, of course, clean a rug for a fraction of the price if you do it yourself. A bottle of carpet shampoo will set you back less than a tenner. Although, what you save in money you will have to give back with time as cleaning a rug isn’t exactly a quick job.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
        How to Clean a natural Rug ?
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6, mt: 3,}}>
      Natural rugs are a popular choice and for good reason. Not only do they look amazing, but they are also made using top quality materials. So, they are a great option for those looking for a long-lasting addition to their home. However, natural rugs aren’t quite as easy to clean as their synthetic counterparts.
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6, mt: 3,}}>
      Natural rugs include rugs made from materials such as jute and wool, for example. Here are our recommended steps for the best way to clean a rug made from natural materials: 
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
        How to Clean a Synthetic Rug ?
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6, mt: 1,}}>
      When it comes to rug cleaning, synthetic rugs are a breeze. Since they aren’t made from any natural materials, they are pretty resilient to everyday cleaning products. Having said that, make sure you always read the label on your rug to know exactly what mix of materials it is made from. Sometimes, even mostly synthetic rugs can have some natural fibres woven in.
      </Typography>
      <Typography variant='body1' sx={{textAlign: "justify", lineHeight: 1.6, mt: 1,}}>
      Since they are fairly low maintenance, synthetic rugs don’t require any kind of special treatment. But here are some day-to-day tips on how to clean a rug made from synthetic materials:
      </Typography>
    </Box>
</>
  )
}

export default CollectorRug;