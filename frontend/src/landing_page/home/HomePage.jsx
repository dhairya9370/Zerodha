import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Stats from './Stats';
import Education from './Education';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { CssBaseline } from '@mui/material';

function HomePage() {
    return ( <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </> );
}

export default HomePage;