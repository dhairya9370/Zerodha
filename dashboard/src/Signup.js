import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Custom CSS module style rules

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Connect this to your backend Express register route
      const response = await axios.post(
        'http://localhost:3002/signup',
        { email, username, password },
        { withCredentials: true }
      );

      if (response.data.success || response.status === 201) {
        alert('Account created successfully!');
        navigate('/'); // Move user directly to login sequence
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Something went wrong. Try again.');
    }
  };

  return (
    <div className="kite-signup-container">

      {/* Central Interactive Card Element */}
      <div className="kite-signup-wrapper">
        <div className="kite-signup-card">

          {/* Brand Identity Vector Minimal Icon */}
          <div className="brand-logo">
            <img src="logo.png" style={{ width: "70px" }} alt="Logo" />

          </div>

          <h2 className="signup-card-title">Join Kite Today</h2>

          {/* Form handling framework */}
          <form onSubmit={handleSignup} className="signup-form">

            {error && <div className="signup-error-msg">{error}</div>}

            {/* Email Field Wrapper */}
            <div className="signup-input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Username Field Wrapper */}
            <div className="signup-input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password Field Wrapper with togglable inline utility */}
            <div className="signup-input-group password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="inline-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            {/* Primary Action Button */}
            <button type="submit" className="signup-submit-btn">
              Sign up
            </button>
          </form>

          <a href="#forgot" className="signup-forgot-link">
            Forgot user ID or password?
          </a>

        </div>
      </div>

      {/* Footer Branding & Disclaimer Layout */}
      <footer className="signup-footer">
        <div className="store-links">
          <span>▲ Google Play</span>
          <span> App Store</span>
        </div>

        <div className="footer-brand">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
          ZERODHA
        </div>

        <p className="login-prompt-text">
          Already have an account?{' '}
          <span className="login-redirect-link" onClick={() => navigate('/login')}>
            Login here!
          </span>
        </p>

        <p className="legal-disclaimer">
          Zerodha Broking Limited: Member of <span className="link">NSE</span>,{' '}
          <span className="link">BSE</span>, <span className="link">MCX</span> - SEBI Reg.
          no. INZ000031633, CDSL - SEBI Reg. no. IN-DP-431-2019 |{' '}
          <span className="link">Smart Online Dispute Resolution</span> |{' '}
          <span className="link">SEBI SCORES</span>
        </p>
      </footer>

    </div>
  );
};

export default Signup;