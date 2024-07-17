import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Berlin from '../static/photos/Berlin.JPG';
import Iceland from '../static/photos/Iceland.JPG';
import Icepick from '../static/photos/Icepick.JPG';
import Prague from '../static/photos/Prague.JPG';
import Algonquin from '../static/photos/Algonquin.JPG';
import Ski from '../static/photos/Ski.JPG';

const photos = [
        {image: Algonquin, name: "Algonquin", note: "Jun 2024"},
        {image: Berlin, name: "Berlin", note: "May 2024"}, 
        {image: Prague, name: "Prague", note: "May 2024"},
        {image: Ski, name: "Skiing", note: "Feb 2024"}, 
        {image: Iceland, name: "Iceland", note: "May 2023"}, 
        {image: Icepick, name: "Icepicks", note: "May 2023"},
    ];

const headerStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "20px",
    fontWeight: 600,
}

function Photos() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                backgroundColor: "#feffe9",
                padding: { xs: '10px', sm: '2px 20px' },
                border: '2px solid black',
            }}
        >
            <Typography 
                sx={{ 
                    ...headerStyle, 
                    fontWeight: 500, 
                    margin: '5px', 
                    fontSize: '35px', 
                    marginRight: 'auto',
                    marginTop: '3px',
                    }}>
                Photos
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflowY: 'auto',
                    width: '100%',
                    height: { xs: '850px', sm: '700px', md: '394px' },
                    padding: '0px 10px',
                    marginTop: '10px',
                    border: { xs: '2px solid black' },
                    backgroundColor: "#b4dc87",
                }}
            >
                {photos.map((photo, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 200,
                            height: 200,
                            backgroundColor: "#feffe9",
                            border: '1.5px solid black',
                            margin: 2,
                            position: 'relative',
                            '&:hover img': {
                                filter: 'brightness(80%)',
                            },
                        }}
                    >
                        <img
                            src={photo.image}
                            alt={photo.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'filter 0.3s',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                padding: '4px 8px',
                            }}
                        >
                            <Typography sx={headerStyle}>{photo.name}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Photos;