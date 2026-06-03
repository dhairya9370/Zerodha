import * as React from 'react';
import Box from '@mui/material/Box';
import HyperLink from './HyperLink';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    // 1. Grab the current path directly from the router
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Box sx={{
            position: "sticky",
            top: 0,
            left: 0, right: 0,
            width: "100%",
            zIndex: 1100,
            backgroundColor: "#fff",
            margin: 0,
            paddingY: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 25,
            borderBottom: "1px solid #e0e0e0",
            boxSizing: "border-box"
        }}>
            <Link to="/">
                <img
                    src="media/images/logo.svg"
                    alt="Example"
                    height="20"
                    style={{ cursor: 'pointer' }}
                />
            </Link>
            
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 5 }}>
                {/* 2. Compare directly against currentPath */}
                <HyperLink title="Signup" link="http://localhost:3000/signup" selected={false} />
                <HyperLink title="About" link="/about" selected={currentPath === "/about"} />
                <HyperLink title="Products" link="/products" selected={currentPath === "/products"} />
                <HyperLink title="Pricing" link="/pricing" selected={currentPath === "/pricing"} />
                <HyperLink title="Support" link="/support" selected={currentPath === "/support"} />
            </Box>
        </Box>
    );
}
export default Navbar;