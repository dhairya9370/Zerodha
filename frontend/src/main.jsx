import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import SignupPage from './landing_page/signup/Signup';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import { CssBaseline } from '@mui/material';
import NotFound from './landing_page/NotFound';
const theme = createTheme({
  typography: {
    fontFamily: 'Trebuchet MS, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CssBaseline />
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  </ThemeProvider>
);