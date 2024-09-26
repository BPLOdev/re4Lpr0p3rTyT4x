import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Margin } from '@mui/icons-material';

const style = {
  Margin: 0,
  p:'15px',
  width: '9vw'
};

const MiniHeader = ({ leftButton1, leftButton2 }) => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
        {/* Left Section with two buttons */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button sx={style}>{leftButton1}</Button>
          <Button sx={style}>{leftButton2}</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MiniHeader;
