import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, Avatar, Grid, Divider } from '@mui/material';

const blogs = [
    {
        image: 'F1.png',
        avatarImage: 'Avatar1.png', // Avatar image for this blog
        title: 'Rug Collection Upcoming Auction Set For May 21 At Noon',
        author: 'Farhad Langaroodi',
        date: 'May 16, 2023',
        description: 'Are you looking for a unique and timeless piece to add to your home décor? Look no further than the Nazmiyal Collection Antique Rug Auction...',
    },
    {
        image: 'F2.png',
        avatarImage: 'Avatar2.png', // Avatar image for this blog
        title: 'The Collector rugs at Rug October 15th auction',
        author: 'Farhad Langaroodi',
        date: 'May 16, 2023',
        description: 'Rug Collectors Excited About Nazmiyal’s Online Auction! If you’re a rug collector and you are in the market for an antique or vintage rug...',
    },
    {
        image: 'F3.png',
        avatarImage: 'Avatar3.png', // Avatar image for this blog
        title: 'Get the Best Deals on Rugs at Rug Auctions Design',
        author: 'Farhad Langaroodi',
        date: 'May 16, 2023',
        description: 'Are you looking for a unique and timeless piece to add to your home décor? Look no further than the Nazmiyal Collection Antique Rug Auction...',
    },
    {
        image: 'F4.png',
        avatarImage: 'Avatar4.png', // Avatar image for this blog
        title: 'Antique Rugs Collection Auction on May 21st',
        author: 'Farhad Langaroodi',
        date: 'May 16, 2023',
        description: 'Join us on May 21st for an exclusive auction featuring a collection of rare and antique rugs from around the world...',
    },
    {
        image: 'F5.png',
        avatarImage: 'Avatar5.png', // Avatar image for this blog
        title: ' A Vintage Rugs Auction held on October 15th, 2023',
        author: 'Farhad Langaroodi',
        date: 'October 15, 2023',
        description: 'Discover vintage rugs from various cultures and history in our online auction. Bidding starts soon, so mark your calendars...',
    },
    {
        image: 'F6.png',
        avatarImage: 'Avatar6.png', // Avatar image for this blog
        title:  ' Get the Best Deals on Rugs at Rug Auctions Design',
        author: 'Farhad Langaroodi',
        date: 'May 16, 2023',
        description: 'Looking for the best deals on antique rugs? Our online auctions bring you exclusive pieces at amazing prices...',
    },
    {
        image: 'F7.png',
        avatarImage: 'Avatar7.png', // Avatar image for this blog
        title: 'New Arrivals in Rug Auctions - May 2023',
        author: 'Farhad Langaroodi',
        date: 'May 10, 2023',
        description: 'Browse through our new collection of fine rugs available for bidding this May. Don’t miss out on these exquisite pieces...',
    },
    {
        image: 'F8.png',
        avatarImage: 'Avatar8.png', // Avatar image for this blog
        title: 'Rare Rugs Collection at the May Auction',
        author: 'Farhad Langaroodi',
        date: 'May 16, 2023',
        description: 'Our May auction features rare and vintage rugs that collectors will surely appreciate. Be sure to check out our selection...',
    },
    {
        image: 'F1.png',
        avatarImage: 'Avatar1.png', // Avatar image for this blog
        title: 'Top Antique Rugs to Collect at Auction',
        author: 'Farhad Langaroodi',
        date: 'May 16, 2023',
        description: 'Looking for top antique rugs to collect? Our upcoming auctions feature some of the best pieces available...',
    },
    // You can add more blogs if needed...
];

const AuctionBlog = () => {
     useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
            {/* Breadcrumb navigation */}
              <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
                    {/* Breadcrumb navigation */}
                    <Typography variant="body1" color="textSecondary" marginLeft="30px">
                      <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt; 
                      <span style={{ color: "#5B2E1E" }}> Auction Blog</span>
                    </Typography>
                  </Box>

            <Box sx={{ padding: '30px', backgroundColor: '#f9f6f1'}}>
                {/* Heading */}
                <Typography variant="h4" gutterBottom sx={{
                    fontFamily: 'serif',
                    color: '#6C3C2B',
                    textAlign: 'left',
                    pl:10,
                    mb: 2,
                }}>
                    Auction Blogs
                </Typography>
                <Divider sx={{ marginBottom: 3, ml:9, mr:10, color:"#DCD0BA"}}/>

                {/* Blog Grid */}
                <Grid container spacing={4} sx={{paddingLeft:{xs:0, sm:2, md:10},paddingRight:{xs:0,sm:2, md:10, }}}>
                    {blogs.map((blog, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={blog.image}
                                    alt={blog.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {blog.title}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={1} paddingBottom={1}>
                                        {/* Individual Avatar */}
                                        <Avatar sx={{ width: 24, height: 24 }} src={blog.avatarImage} />
                                        <Typography variant="body2" color="error">
                                            by {blog.author} | {blog.date}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {blog.description}
                                        <Link component={Link}
                                            to="/collectorrug"
                                            style={{
                                                textDecoration: 'underline',
                                                color: 'black',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Read More
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default AuctionBlog;