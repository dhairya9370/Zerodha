import {Box, Divider, Typography } from '@mui/material';
import React from 'react'
import CustomLink from '../CustomLink';
function Hero() {
    return ( 
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",}}>        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginY:10}}>
            <Typography variant="h4" sx={{color:"#313131"}}>Zerodha Products</Typography>
            <Typography variant="h6" sx={{color:"#656565",marginY:2,}}>Sleek, modern, and intuitive trading platforms</Typography>
            <Typography variant="body1" sx={{color:"#656565",textAlign:"center",display:"flex",flexDirection:"row",gap:1}}>Check out our <CustomLink title="investment offerings" link="#"/></Typography>
        </Box>
        <Divider sx={{ width: '80%', marginY: 7}} />
        </Box>
     );
}

export default Hero;