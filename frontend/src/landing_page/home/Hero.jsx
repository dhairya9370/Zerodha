
import React from 'react';
import { Box, Button, Typography } from "@mui/material";

function Hero() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginY: 1,
            }}
        >
            <img
                src="media/images/homeHero.png"
                alt="Example"
                height="400"
            />

            <Typography variant="h4" sx={{
                marginY: 1,
                color: "#313131",
            }}>
                Invest in everything
            </Typography>

            <Typography variant="h6" sx={{
                marginY: 1,
                color: "#656565",
            }}>
                Online platform to invest in stocks, derivatives,
                mutual funds, ETFs, bonds, and more.
            </Typography>

            <Button
                variant="contained"
                size="large"
                sx={{ marginY: 2, fontSize: "22px", paddingX: 4, textTransform: "none" }}
            >
                Sign up for free
            </Button>
        </Box>
    );
}
export default Hero;