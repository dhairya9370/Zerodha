import React from 'react'
import { Box, Button, Typography } from '@mui/material';

function Universe() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "center", alignItems: "center", marginBottom: 10, marginX: 30, mt: 10 }}>

            {/* Header Text Section */}
            <Box sx={{ textAlign: "center" }}>
                <Typography variant='h4' sx={{ fontWeight: 500, mb: 2 }}>The Zerodha Universe</Typography>
                <Typography variant='body1' sx={{ fontSize: "18px", color: "#656565" }}>
                    Extend your trading and investment experience even further with our partner platforms
                </Typography>
            </Box>

            {/* Grid Container */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 8, mt: 4 }}>

                {/* FIRST ROW: Fund House, Sensibull, Tijori */}
                <Box sx={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "start" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 280, textAlign: "center" }}>
                        <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" height={55} style={{ marginBottom: '15px' }} />
                        <Typography variant='caption' sx={{ color: "#9b9b9b", lineHeight: 1.6 }}>
                            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 280, textAlign: "center" }}>
                        <img src="media/images/sensibullLogo.svg" alt="Sensibull" height={40} style={{ marginBottom: '30px' }} /> {/* Extra margin to align text baseline with other cards */}
                        <Typography variant='caption' sx={{ color: "#9b9b9b", lineHeight: 1.6 }}>
                            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 280, textAlign: "center" }}>
                        <img src="media/images/tijoriLogo.svg" alt="Tijori" height={55} style={{ marginBottom: '15px' }} />
                        <Typography variant='caption' sx={{ color: "#9b9b9b", lineHeight: 1.6 }}>
                            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                        </Typography>
                    </Box>

                </Box>

                {/* SECOND ROW: Streak, Smallcase, Ditto */}
                <Box sx={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "start" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 280, textAlign: "center" }}>
                        <img src="media/images/streakLogo.png" alt="Streak" height={55} style={{ marginBottom: '15px' }} />
                        <Typography variant='caption' sx={{ color: "#9b9b9b", lineHeight: 1.6 }}>
                            Systematic trading platform that allows you to create and backtest strategies without coding.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 280, textAlign: "center" }}>
                        <img src="media/images/smallcaseLogo.png" alt="Smallcase" height={55} style={{ marginBottom: '15px' }} />
                        <Typography variant='caption' sx={{ color: "#9b9b9b", lineHeight: 1.6 }}>
                            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 280, textAlign: "center" }}>
                        <img src="media/images/dittoLogo.png" alt="Ditto" height={55} style={{ marginBottom: '15px' }} />
                        <Typography variant='caption' sx={{ color: "#9b9b9b", lineHeight: 1.6 }}>
                            Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Button
                variant="contained"
                size="large"
                onClick={() => window.location.href = "http://localhost:3000/signup"}
                sx={{ marginY: 2, fontSize: "22px", paddingX: 4, textTransform: "none" }}
            >
                Sign up for free
            </Button>
        </Box>
    );
}

export default Universe;