import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const headerStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "20px",
    fontWeight: 600,
}

const contentStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "14px",
}

function ResumeCard({ company, border = false }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1.5px solid black',
                padding: '2px',
                paddingLeft: '0px',
                margin: '10px 0px',
                backgroundColor: "#feffe9",
            }}
        >
            <a href={company.link} style={{ paddingTop: 0 }}>
                <Box
                    component="img"
                    src={company.image}
                    alt={company.name}
                    sx={{
                        width: 50,
                        height: 50,
                        mx: 2,
                        mt: 1,
                        border: '1px solid black',
                        transition: 'filter 0.3s',
                        '&:hover': {
                            filter: 'brightness(80%)',
                        },
                    }}
                />
            </a>
            <Box sx={{ paddingBottom: "2px" }}>
                <Typography sx={headerStyle}>{company.name}</Typography>
                <Typography sx={{ ...contentStyle, fontWeight: 500 }}>{company.title}</Typography>
                <Typography sx={{ ...contentStyle, fontWeight: 300 }}>{company.duration}</Typography>
            </Box>
        </Box>
    );
}

export default ResumeCard;