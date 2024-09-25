import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const MiniHeader = ({ leftButton1, leftButton2 }) => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
        {/* Left Section with two buttons */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button variant="outlined">{leftButton1}</Button>
          <Button variant="outlined">{leftButton2}</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MiniHeader;
