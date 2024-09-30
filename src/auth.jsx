import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Loading from "../src/pages/loading/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkToken = async () => {
    try {
      const token = Cookies.get("token");
      if (token) {
        const response = await axios.get(
          "http://192.168.1.26:3000/checkToken",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Token is valid:", response.data);
        setIsAuthenticated(true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error validating token:", error.message);
      setIsAuthenticated(false);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
