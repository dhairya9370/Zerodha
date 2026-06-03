import React, { useState } from 'react';
import './KiteLogin.css'; // Importing your custom stylesheet
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KiteLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { email, password });
    axios.post("http://localhost:3002/login", { email, password },{withCredentials:true})
    .then((res)=>{
      if(res.data.success){
        navigate("/");
      }else{
        alert(res.data.message || "Login Failed");
      }
    })
    .catch((err)=>{
      console.error("Login error:", err);
      alert("cannot connect to server.");
    });
  };

  return (
    <div className="kite-page-container">
      
      {/* Central Card Wrapper */}
      <div className="kite-card-wrapper">
        <div className="kite-login-card">
          
          {/* Custom Kite Logo Icon */}
          <div className="kite-brand-logo">
            <img src="logo.png" style={{ width: "70px" }} alt="Logo" />
          </div>

          <h2 className="kite-card-title">Login to Kite</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="kite-form">
            
            {/* Input Wrapper */}
            <div className="kite-input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Wrapper with custom visibility toggle */}
            <div className="kite-input-group password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Orange Action Button */}
            <button type="submit" className="kite-submit-btn">
              Login
            </button>
          </form>

          <a href="#forgot" className="kite-forgot-link">
            Forgot user ID or password?
          </a>

        </div>
      </div>

      {/* Footer Disclaimer Layout */}
      <footer className="kite-footer">
        <div className="kite-store-links">
          <span>▲ Google Play</span>
          <span> App Store</span>
        </div>

        <div className="kite-footer-brand">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
          ZERODHA
        </div>

        <p className="kite-signup-text">
          Don't have an account? <a href="/signup">Sign up for free!</a>
        </p>

        <p className="kite-legal-disclaimer">
          Zerodha Broking Limited: Member of <span className="link">NSE</span>, <span className="link">BSE</span>, <span className="link">MCX</span> - SEBI Reg. no. INZ000031633, CDSL - SEBI Reg. no. IN-DP-431-2019 | <span className="link">Smart Online Dispute Resolution</span> | <span className="link">SEBI SCORES</span>
        </p>
      </footer>

    </div>
  );
};

export default KiteLogin;