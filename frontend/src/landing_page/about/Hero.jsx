import React from 'react'
import { Box, colors, Divider, Typography } from '@mui/material';
function Hero() {
    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginX:30 }}>
        <Typography variant="h5" sx={{marginY:10}}>
            We pioneered the discount broking model in India.<br></br>
            Now, we are breaking ground with our technology.
        </Typography>
        <Divider sx={{ width: '100%', marginY: 5 }} />
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', marginY:5}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'start', marginX:5}}>
                <Typography variant="h6">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</Typography>
                <Typography variant="h6">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</Typography>
                <Typography variant="h6">Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</Typography>
            </Box>
            <Box sx={{display:'flex',gap:1, flexDirection:'column', justifyContent:'space-between', alignItems:'start', marginX:5}}>
                <Typography variant="h6">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</Typography>
                <Typography variant="h6">Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</Typography>
                <Typography variant="h6">And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</Typography>
            </Box>
        </Box>
    </Box>
    );
}

export default Hero;