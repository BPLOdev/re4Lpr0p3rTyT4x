import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Popover, Typography, Box } from '@mui/material';

export default function LetterAvatars() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Avatar with click event to trigger popover */}
      <Avatar 
        sx={{ width: 40, height: 40 }} 
        onClick={handleClick} 
        style={{ cursor: 'pointer' }}
      />

      {/* Typography for user name and email */}
      <Box sx={{ ml: 2 }}>
        <Typography variant="paragraph" sx={{ fontWeight: 'semibold' }}>
          Yman Mangaring {/* Replace with dynamic name */}
        </Typography>
        <Typography variant="body2" sx={{fontSize: '12px'}}>
          ymanmangairng@example.com {/* Replace with dynamic email */}
        </Typography>
      </Box>

      {/* Popover with anchorOrigin and transformOrigin layout */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {/* Popover content */}
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </Box>
  );
}
