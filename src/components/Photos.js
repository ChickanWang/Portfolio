import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const photos = [];

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
                padding: { xs: '10px', sm: '20px' },
                border: '2px solid black',
            }}
        >
            <Typography sx={{...headerStyle, marginRight: 'auto'}}>Some Photos</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflowY: 'auto',
                    width: '100%',
                    height: { xs: '900px', sm: '370px' },
                    padding: '0 10px',
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