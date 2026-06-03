import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState({ username: "Loading...", email: "..." });

  useEffect(() => {
    const verifyUserSession = async () => {
      try {
        // 2. Validate token viability with backend authorization middleware
        const { data } = await axios.post(
          "http://localhost:3002/", 
          {}, 
          { withCredentials: true }
        );

        if (data.status && data.username && data.email) {
          setUser({
            username: data.username,
            email: data.email || "No email provided",
          });
          toast.success(`Hello ${data.username}`, { position: "top-right" });
        } else {
          // Token failed structural database checks
          removeCookie("token", { path: "/" });
          navigate("/login");
        }
      } catch (err) {
        console.error("Session verification error:", err);
        removeCookie("token", { path: "/" });
        navigate("/login");
      }
    };

    verifyUserSession();
  }, [cookies.token, navigate, removeCookie]);

  return (
    <>
      {/* Pass down the globally verified user profile down to sub-navbar tree panels */}
      <TopBar user={user} />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;