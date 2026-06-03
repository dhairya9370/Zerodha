import { Box, Typography } from '@mui/material';
import React from 'react';
import CustomLink from '../CustomLink';

function Pricing() {
    return ( 
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginY: 10,
            marginX: 25
        }}>
            {/* Left Header Section */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", paddingX: 5, width: 350 }}>
                <Typography variant='h4' sx={{ marginY: 2, color: "#313131" }}>Unbeatable pricing</Typography>
                <Typography variant='body1' sx={{ color: "#656565", marginBottom: 2 }}>
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                </Typography>
                <CustomLink title="See pricing" link="#" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "end"}}>
                <img src="media/images/pricing0.svg" alt="Pricing0" style={{ height: "100px" }} />
                <Typography variant='body2' sx={{fontSize:12, color: "#656565", width: 100,marginLeft:-2,marginBottom:2 }}>
                    Free account <br /> opening
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
                <img src="media/images/pricing0.svg" alt="Pricing2" style={{ height: "100px" }} />
                <Typography variant='body2' sx={{fontSize:12, color: "#656565", width: 200,marginLeft:-2,marginBottom:2, }}>
                    Free equity delivery and direct mutual funds opening
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "end",}}>
                <img src="media/images/intradayTrades.svg" alt="Pricing3" style={{ height: "100px" }} />
                <Typography variant='body2' sx={{fontSize:12, color: "#656565", width: 120,marginLeft:-2,marginBottom:2 }}>
                    Intraday and <br /> F&amp;O opening
                </Typography>
            </Box>
        </Box>
    );
}

export default Pricing;