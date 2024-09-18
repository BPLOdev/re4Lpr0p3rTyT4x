import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/images/favicon.svg";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
