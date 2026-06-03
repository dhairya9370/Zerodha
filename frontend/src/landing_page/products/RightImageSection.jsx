import React from 'react'
import { Box } from '@mui/material';
function RightImageSection({src,content}) {
    return ( 
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginX:30,gap:20,marginBottom:15}} >
        <Box sx={{display:"flex",flexDirection:"column"}}>
            {content}
        </Box>
        <Box sx={{}}><img src={src}/>  </Box>
    </Box> );
}

export default RightImageSection;