import React from 'react';
import { Box, Typography, Button, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Hero() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                px: { xs: 3, md: 25 }, // Responsive padding
                py: 6,
                bgcolor: '#f2f2f2' // Light background matching the image
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    mb: 4
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        color: '#333333'
                    }}
                >
                    Support Portal
                </Typography>
                <Button
                    variant="contained"
                    disableElevation // Removes shadow to match the flat UI design
                    sx={{
                        textTransform: 'none', // Prevents default uppercase behavior
                        bgcolor: '#3b82f6', // Precise blue color
                        '&:hover': { bgcolor: '#656565' },
                        px: 2,
                        py: 0.8,
                        borderRadius: 1
                    }}
                >
                    My tickets
                </Button>
            </Box>

            {/* Search Input Bar */}
            <OutlinedInput
                fullWidth
                placeholder="Eg: How do I open my account, How do i activate F&O..."
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
                    </InputAdornment>
                }
                sx={{
                    bgcolor: 'white',
                    borderRadius: 1,
                    borderColor: '#cbd5e1',

                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#cbd5e1', // Soft border color matching the UI
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#cbd5e1',
                    },
                    input: {
                        py: 2, // Extra padding for a taller search bar
                        color: '#333',
                        '&::placeholder': {
                            color: '#9ca3af',
                            opacity: 1,
                        }
                    }
                }}
            />
        </Box>
    );
}