import React, { useState, useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import bgday from '../static/bgday.webp';
import bgnight from '../static/bgnight.webp';
import bgtwilight from '../static/bgtwilight.webp';
import bgcool from '../static/pixel.gif';
import Typography from '@mui/material/Typography';
import { GlobalStyles } from '@mui/material';
import About from '../components/About';
import Resume from '../components/Resume';
import Photos from '../components/Photos';

const textStyle = {
  color: '#feffe9',
  cursor: 'pointer',
  padding: { xs: '5px 10px', sm: '10px 25px' },
  transition: 'background-color 0.3s, color 0.3s',
  borderRight: '2px solid black',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'Inconsolata, monospace',
  fontSize: '18px',
  '&:hover': {
    color: 'white',
    backgroundColor: '#a8d480',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    transition: 'left 0.3s ease',
  },
  '&:hover::before': {
    left: 0,
  },
};

function Home() {
  const [page, setPage] = useState('about');
  const [background, setBackground] = useState(bgnight);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (event) => {
    event.stopPropagation();
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    
    if (hours >= 10 && hours < 18) {
      setBackground(bgday);
    } else if (hours === 12) {
      setBackground(bgcool);
    }
    else if ((hours >= 18 && hours < 21) || (hours >= 5 && hours < 10)) {
      setBackground(bgtwilight);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { fontFamily: 'Inconsolata, monospace' } }} />
      <Box
        onClick={handleOpen}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: {sm: '100vh', xs:'1100px'},
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        { isVisible && (<Box sx={{
            width: {xs: '300px', sm:'800px'},
            height: {xs: '1000px', sm:'530px'},
            backgroundColor: 'white',
            display: 'flex',
            flexDirection:  'column',
            alignItems: 'center',
            color: 'black',
            fontSize: '24px'
        }}>
          <nav style={{
            border: '2px solid black',
            display: 'flex',
            backgroundColor: '#86a953',
            width: '100%',
            marginBottom: 'auto',
          }}>
            <Typography onClick={() => setPage('about')} sx={textStyle}>
              About
            </Typography>
            <Typography onClick={() => setPage('resume')} sx={textStyle}>
              Resume
            </Typography>
            <Typography onClick={() => setPage('photos')} sx={{...textStyle, borderRight: {xs: 'none', sm: '2px solid black',}}}>
              Photos
            </Typography>
            <Box 
              onClick={handleClose} 
              sx={{ 
                ...textStyle, 
                padding: 0, 
                border: 'none', 
                borderLeft: '2px solid black', 
                marginLeft:'auto', 
                backgroundColor: 'red', 
                width: { xs: '40px', sm: '50px' }, 
                height: { xs: '40px', sm: '50px' }, 
                '&:hover': {
                  backgroundColor: '#bf0000',
                },
              }}
            >
            </Box>
          </nav>
          {page === 'about' && (
            <About/>
            )}
          {page === 'resume' && (
            <Resume />
          )}
          {page === 'photos' && (
            <Photos />
          )}
        </Box>)}
      </Box>
    </>
  );
}

export default Home;