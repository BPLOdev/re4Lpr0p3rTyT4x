import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/images/favicon.svg";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios, { Axios } from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "../../auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://192.168.1.26:3000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const { data } = response; // Extract data from the response

        if (data.message === "Login successful") {
          setEmail("");
          setPassword("");
          console.log("Login successful:", data);
          Cookies.set("token", data.token, { expires: 7, secure: true });
          setToken(data.token);
          navigate("/");
          // Redirect on successful login
        } else if (data.message === "No user found with this email") {
          console.log("No user found:", data);
          navigate("/login"); // Redirect to login if no user found
        } else {
          console.log("Unexpected response:", data);
          console.log("No data in response");
          navigate("/login"); // Redirect on unexpected response
        }
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Error response from server:", error.response.data);
          navigate("/login"); // Redirect on server error
        } else if (error.request) {
          // No response was received
          console.error("No response received:", error.request);
          navigate("/login"); // Redirect on network error
        } else {
          // Error setting up the request
          console.error("Error during request setup:", error.message);
          navigate("/login"); // Redirect on setup error
        }
      });
  };
  //comment here another one
  return (
    <div className="background">
      <div className="tint"></div>
      <div className="login-container">
        <div>
          <img src={logo} alt="Logo" className="logo-container" />
        </div>
        <div className="logoname">
          <Typography variant="h4" fontWeight={600} maxWidth={500}>
            REAL PROPERTY TAX MANAGEMENT SYSTEM
          </Typography>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "280px",
            },
            // border: " 1px solid red",
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              "& .MuiInputBase-input": {
                height: "15px", // Adjust height as needed
                fontSize: "14px", // Adjust font size if needed
              },
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiInputBase-input": {
                height: "15px", // Adjust height as needed
                fontSize: "15px", // Adjust font size if needed
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "280px", // Makes the button take full width of its container
              height: "35px", // Adjust height as needed
              fontSize: "14px", // Adjust font size if needed
            }}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;
