import React from 'react'
import { Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

function CustomLink({ title, link }) {
    return (
        <Typography
            component="a"
            href={link}
                        sx={{
                            color: "#2e82ac",
                            fontSize: "18px",
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            '&:hover': {
                                color: "#313131",
                            }
                        }}
                    >
                       {title} <EastIcon sx={{ marginLeft: 1 }} />
                    </Typography> );
}

export default CustomLink;