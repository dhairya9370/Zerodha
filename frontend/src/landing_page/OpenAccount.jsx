import { Box, Typography, Button } from '@mui/material';
import React from 'react';
// You can remove useNavigate if you aren't using it elsewhere in this file
// import { useNavigate } from 'react-router-dom'; 

function OpenAccount() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginY: 10,
        }}>
            <Typography variant='h4'>Open a Zerodha account</Typography>
            <Typography variant='body1' sx={{ color: "#656565", marginY: 2 }}>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </Typography>
            <Button
                variant="contained"
                size="large"
                // Change this line right here 👇
                onClick={() => window.location.href = "http://localhost:3000/signup"}
                sx={{ marginY: 2, fontSize: "22px", paddingX: 4, textTransform: "none" }}
            >
                Sign up for free
            </Button>
        </Box>
    );
}

export default OpenAccount;