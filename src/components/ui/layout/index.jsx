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
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
