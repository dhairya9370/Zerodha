import React from 'react'
import { Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

function HyperLink({ title, link ,selected=false,size="16"}) {
    return (
        <Typography
            component="a"
            href={link}
                        sx={{
                            color: selected?"#2e82ac": "#656565",
                            fontSize: size,
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            '&:hover': {
                                color: "#2e82ac",
                            }
                        }}
                    >
                       {title}
                    </Typography> );
}

export default HyperLink;