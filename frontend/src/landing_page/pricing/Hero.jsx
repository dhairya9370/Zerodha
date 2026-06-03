import {Box, Typography } from '@mui/material';
import React from 'react'
function Brokerage() {
    return ( <h1>Brokerage   </h1> );
}
function Hero() {
    return ( 
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Typography variant='h4' sx={{marginBottom:2,marginTop:10}}>Charges</Typography>
            <Typography variant='h5' sx={{color:"#656565",marginBottom:10,}}>List of all charges and taxes</Typography>
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:4,marginX:30,gap:15}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', }}>
                    <img src="media/images/pricing0.svg" alt="zero" width={250}/>
                    <Typography variant='h5' sx={{ marginTop:2}}>Free equity delivery</Typography>
                    <Typography variant='body1' sx={{color:"#656565",marginTop:2,maxWidth:300,textAlign:'center'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.s</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', }}>
                    <img src="media/images/intradayTrades.svg" alt="twenty" width={250}/>
                    <Typography variant='h5' sx={{ marginTop:2}}>Intraday and F&O trades</Typography>
                    <Typography variant='body1' sx={{color:"#656565",marginTop:2,maxWidth:300,textAlign:'center'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', }}>
                    <img src="media/images/pricing0.svg" alt="zero" width={250}/>
                    <Typography variant='h5' sx={{ marginTop:2}}>Free direct MF</Typography>
                    <Typography variant='body1' sx={{color:"#656565",marginTop:2,maxWidth:300,textAlign:'center'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</Typography>
                </Box>
            </Box>
        </Box>
     );
}

export default Hero;