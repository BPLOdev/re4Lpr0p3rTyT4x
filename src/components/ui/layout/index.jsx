import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import MiniDrawer from "../drawer"; // Import MiniDrawer from your Drawer component

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <MiniDrawer />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: "margin 0.3s ease", // Smooth transition when sidebar toggles
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
