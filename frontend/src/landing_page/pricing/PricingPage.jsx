import React from 'react'
import Hero from './Hero';
import Broakerage from './Brokerage';
import ChargesTables from './ChargesTables';
import OpenAccount from '../OpenAccount';
function PricingPage() {
    return ( 
        <>
        <Hero/>
        <Broakerage/>
        <ChargesTables/>
        <OpenAccount/>
        </>
    );
}

export default PricingPage;