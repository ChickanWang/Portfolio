import React from 'react';
import { Box } from '@mui/material';
import pixelBg from '../static/pixel.gif';

function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${pixelBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        
    </Box>
  );
}

export default Home;