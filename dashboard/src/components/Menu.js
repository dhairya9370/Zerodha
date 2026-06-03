import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./Menu.css"; 

const Menu = ({ user }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [, , removeCookie] = useCookies(["token"]);
  
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown menu automatically if user clicks away
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    axios.post("http://localhost:3002/logout", {}, { withCredentials: true })
      .then((res) => {
        // Clear local cookies context parameters securely
        removeCookie("token", { path: "/" });
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout runtime error:", err);
        // Fallback cleanup if backend route times out
        removeCookie("token", { path: "/" });
        navigate("/login");
      });
    setIsProfileDropdownOpen(false);
  };

  const getAvatarInitials = (name) => {
    if (!name || name === "Loading...") return "ZU";
    return name.slice(0, 2).toUpperCase();
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        
        {/* Profile Section */}
        <div className="navbar-profile-section" ref={dropdownRef}>
          <div className="profile-trigger" onClick={handleProfileClick}>
            <div className="avatar-badge">{getAvatarInitials(user.username)}</div>
            <span className="user-id text-uppercase">{user.username}</span>
          </div>

          {/* Interactive Profile Popup Dialog Box */}
          {isProfileDropdownOpen && (
            <div className="profile-popup">
              <div className="popup-header">
                <p className="user-name">{user.username}</p>
                <p className="user-email">{user.email}</p>
              </div>
              <hr className="popup-divider" />
              <div className="popup-menu">
                <a href="#profile" className="popup-link">My Profile</a>
                <a href="#settings" className="popup-link">Console Settings</a>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;