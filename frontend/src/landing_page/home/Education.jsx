import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomLink from '../CustomLink';

function Education() {
    return ( 
    <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginY: 10,
            marginX:20,
        }}>
            <Box>
                <img src="media/images/education.svg" alt="varsity" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" ,justifyContent:"center",marginLeft:10,paddingX:5}}>
                <Typography variant='h4'>Free and open market education</Typography>
                <Typography variant='body1' sx={{ color: "#656565", marginY: 2 }}>
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                </Typography>
                <CustomLink title="Varsity" link="#"/>

                <Typography variant='body1' sx={{ color: "#656565", marginY: 2 }}>
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </Typography>
                <CustomLink title="TradingQ&A" link="#"  />
                 
            </Box>
        </Box>
    );
}

export default Education;