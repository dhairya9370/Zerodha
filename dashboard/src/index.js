import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie"; // 1. Imported the provider
import "./index.css";
import Home from "./components/Home";
import LoginPage from "./KiteLogin";
import Signup from "./Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <CookiesProvider> {/* 2. Wrapped the entire application router tree */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  // </React.StrictMode>
);