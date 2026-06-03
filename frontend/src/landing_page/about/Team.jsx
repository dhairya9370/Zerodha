import { Box, Typography } from '@mui/material';
import React from 'react'
import HyperLink from '../HyperLink';
function Team() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 5,marginX:45, }}>
            <Typography variant="h5" sx={{ marginY: 10 }}>People</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',gap:5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ backgroundSize:'cover', width:300, height:300, borderRadius:'50%',marginBottom:2}}>
                        <img src="media/images/nithinKamath.jpg"    alt="Nithin Kamath" style={{width:'100%', height:'100%', borderRadius:'50%'}}/>
                    </Box>
                    <Typography variant="h6">Nithin Kamath</Typography>
                    <Typography variant="body1" sx={{color:"#656565",marginTop:1}}>Founder & CEO</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start',gap:2,marginTop:2 }}>
                    <Typography variant="body1">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </Typography>
                    <Typography variant="body1">
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </Typography>
                    <Typography variant="body1">
                        Playing basketball is his zen.</Typography>
                    <Typography variant="body1" sx={{display:'flex', flexDirection:'row', gap:1}}>
                        Connect on <HyperLink title="Homepage" link="#" /> / <HyperLink title="TradingQnA" link="#" /> / <HyperLink title="Twitter" link="#" />
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Team;