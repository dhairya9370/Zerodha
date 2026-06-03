import { Box, Typography } from '@mui/material';
import React from 'react'
import OpenAccount from './OpenAccount';
import CustomLink from './CustomLink';
function NotFound() {
    return ( 
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,marginY:7}}>
        <Typography variant='h3' color='error'>404 Not Found</Typography>
        <Typography variant='h6' color='textSecondary'>The page you are looking for does not exist.</Typography>
        <CustomLink title="Go to Home" link="/"/>
    </Box>
);
}

export default NotFound;