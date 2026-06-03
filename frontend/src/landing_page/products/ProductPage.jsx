import React from 'react'
import LeftImageSection from './LeftImageSection';
import Hero from './Hero';
import {Box, Divider, Typography } from '@mui/material';
import CustomLink from '../CustomLink';
import RightImageSection from './RightImageSection';
import HyperLink from '../HyperLink';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        
        <LeftImageSection src="media/images/kite.png" content={
            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                <Typography variant='h5'>Kite</Typography>
                <Typography variant='body1' sx={{fontSize:"18px",color:"#656565"}}>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</Typography>
                <Box sx={{display:"flex",flexDirection:"row",gap:7,marginBottom:1}}>
                    <CustomLink title="Try demo" link="#"/>
                    <CustomLink title="Learn more" link="#"/>
                </Box>
                <Box sx={{display:"flex",flexDirection:"row",gap:2}}>
                    <img src="media/images/googlePlayBadge.svg" alt="Google Play Store"  height={45}/>
                    <img src="media/images/appstoreBadge.svg" alt="Apple App Store" height={45}/>
                </Box>
            </Box>
        } 
        />
        <RightImageSection src="media/images/console.png" content={
            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                <Typography variant='h5'>Console</Typography>
                <Typography variant='body1' sx={{fontSize:"18px",color:"#656565"}}>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</Typography>
                <Box sx={{display:"flex",flexDirection:"row",gap:7,marginBottom:1}}>
                    <CustomLink title="Learn more" link="#"/>
                </Box>
            </Box>
        }/>
        <LeftImageSection src="media/images/coin.png" content={
            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                <Typography variant='h5'>Coin</Typography>
                <Typography variant='body1' sx={{fontSize:"18px",color:"#656565"}}>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</Typography>
                <Box sx={{display:"flex",flexDirection:"row",gap:7,marginBottom:1}}>
                    <CustomLink title="Coin" link="#"/>
                </Box>
                <Box sx={{display:"flex",flexDirection:"row",gap:2}}>
                    <img src="media/images/googlePlayBadge.svg" alt="Google Play Store"  height={45}/>
                    <img src="media/images/appstoreBadge.svg" alt="Apple App Store" height={45}/>
                </Box>
            </Box>
        } 
        />
        <RightImageSection src="media/images/kiteconnect.png" content={
            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                <Typography variant='h5'>Kite Connect API</Typography>
                <Typography variant='body1' sx={{fontSize:"18px",color:"#656565"}}>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</Typography>
                <Box sx={{display:"flex",flexDirection:"row",gap:7,marginBottom:1}}>
                    <CustomLink title="Kite Connect" link="#"/>
                </Box>
            </Box>
        } 
        />
        <LeftImageSection src="media/images/varsity.png" content={
            <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
                <Typography variant='h5'>Varsity mobile</Typography>
                <Typography variant='body1' sx={{fontSize:"18px",color:"#656565"}}>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</Typography>
                <Box sx={{display:"flex",flexDirection:"row",gap:2}}>
                    <img src="media/images/googlePlayBadge.svg" alt="Google Play Store"  height={45}/>
                    <img src="media/images/appstoreBadge.svg" alt="Apple App Store" height={45}/>
                </Box>
            </Box>
        } 
        />
        <Typography variant='h5' sx={{textAlign:"center",marginBottom:15,display:"flex",flexDirection:"row",justifyContent:"center",gap:1}}>Want to know more about our technology stack? Check out the <HyperLink title="Zerodha.tech" link="#" size="22px" selected={true}/> blog</Typography>
        <Universe/>
        </>
    );
}

export default ProductPage;