import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import CustomLink from '../CustomLink';
function Stats() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginY: 10,
            marginX: 20
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", paddingX: 10 }}>
                <Typography variant='h4' sx={{ marginY: 2, color: "#313131", }}>Trust with confidence</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", marginY: 2, alignItems: "start" }}>
                    <Typography variant='h5' sx={{ color: "#313131" }}>Customer-first always</Typography>
                    <Typography variant='body1' sx={{ width: "200", color: "#656565", }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", marginY: 2, alignItems: "start" }}>
                    <Typography variant='h5' sx={{ color: "#313131" }}>No spam or gimmicks</Typography>
                    <Typography variant='body1' sx={{ width: "200", color: "#656565", }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", marginY: 2, alignItems: "start" }}>
                    <Typography variant='h5' sx={{ color: "#313131" }}>The Zerodha universe</Typography>
                    <Typography variant='body1' sx={{ width: "200", color: "#656565", }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", marginY: 2, alignItems: "start" }}>
                    <Typography variant='h5' sx={{ color: "#313131" }}>Do better with money</Typography>
                    <Typography variant='body1' sx={{ width: "200", color: "#656565", }}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</Typography>
                </Box>

            </Box>
            <Box>
                <img src="media/images/ecosystem.png" alt="Ecosystem Image" width="600" />
                <Box sx={{ display: "flex", flexDirection: "row", marginY: 2, alignItems: "center", justifyContent: "space-evenly" }}>
                    <CustomLink title="Explore our products" link="#" />
                    <CustomLink title="Try Kite demo" link="#" />
                </Box>
            </Box>
        </Box>
    );
}

export default Stats;