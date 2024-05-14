import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExplorerHop from '../static/logos/explorerhop.jpeg';
import FarmLink from '../static/logos/farmlink.jpeg';
import SSNC from '../static/logos/ss&c.png';
import Zynga from '../static/logos/zynga.png';
import WealthyPlanet from '../static/logos/wealthyplanet.jpeg';

const companies = [
    {
        image: WealthyPlanet,
        name: 'WealthyPlanet',
        title: 'Backend Engineer',
        duration: 'May 2024 - Present',
        location: 'Burlington, ON',
        link: 'https://www.wealthyplanet.com/'
    },
    {
        image: Zynga,
        name: 'Zynga Inc.',
        title: 'Machine Learning Engineer',
        duration: 'Jan 2024 - Apr 2024',
        location: 'Toronto, ON',
        link: 'https://www.zynga.com/'
    },
    {
        image: SSNC,
        name: 'SS&C Technologies',
        title: 'Full Stack Developer',
        duration: 'May 2023 - Aug 2023',
        location: 'Toronto, ON',
        link: 'https://www.ssctech.com/'
    },
    {
        image: SSNC,
        name: 'SS&C Technologies',
        title: 'Full Stack Developer',
        duration: 'Sep 2022 - Dec 2022',
        location: 'Toronto, ON',
        link: 'https://www.ssctech.com/'
    },
    {
        image: FarmLink,
        name: 'FarmLink',
        title: 'Junior Software Developer',
        duration: 'Jan 2022 - Apr 2022',
        location: 'Winnipeg, MB',
        link: 'https://www.grainfox.ca/'
    },
    {
        image: ExplorerHop,
        name: 'Explorer Hop',
        title: 'Web Developer',
        duration: 'May 2021 - Aug 2021',
        location: 'Toronto, ON',
        link: 'https://www.explorerhop.com/'
    },
];

const headerStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "20px",
    fontWeight: 600,
}

const contentStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "14px",
}

function Resume() {
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
            <Typography sx={{ ...headerStyle, fontWeight: 500, margin: '5px', fontSize: '35px', marginRight: 'auto' }}>
                Work Experience
            </Typography>
            <Box
                sx={{
                    overflowY: 'auto',
                    width: '100%',
                    height: { xs: '100%', sm: '370px' },
                    padding: '0 10px',
                    border: { xs: '2px solid black' },
                    backgroundColor: "#b4dc87",
                }}
            >
                {companies.map((company, index) => (
                    <Box
                        key={index}
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
                ))}
            </Box>
        </Box>
    );
};


export default Resume;
