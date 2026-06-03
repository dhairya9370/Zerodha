import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'; // Imported ListItemText
import React from 'react';

function Awards() {
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
                <img src="media/images/largestBroker.svg" alt="Largest Broker Logo" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" ,justifyContent:"center"}}>
                <Typography variant='h4'>Largest Stock Broker in India</Typography>
                
                {/* Note: changed variant="p" to variant="body1" because "p" isn't a valid MUI variant name */}
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    2+ million Zerodha clients contribute to over 15% of all retail order<br /> volumes in India daily by trading and investing in :
                </Typography>
                
                <Box sx={{ display: "flex", flexDirection: "row", marginY: 2 }}>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText primary="Futures and Options" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText primary="Commodity derivatives" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText primary="Currency derivatives" />
                        </ListItem>
                    </List>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText primary="Stocks &amp; IPOs" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText primary="Direct mutual funds" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText primary="Bonds and Govt. Securities" />
                        </ListItem>
                    </List>
                </Box>
                <img src="media/images/pressLogos.png" width={450} alt="Press Logos" />
            </Box>
        </Box>
    );
}

export default Awards;