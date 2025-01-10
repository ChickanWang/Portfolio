import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExplorerHop from '../static/logos/explorerhop.jpeg';
import FarmLink from '../static/logos/farmlink.jpeg';
import SSNC from '../static/logos/ss&c.png';
import Zynga from '../static/logos/zynga.png';
import Tesla from '../static/logos/tesla.png';
import Bloomberg from '../static/logos/bloomberg.jpeg';
import UWaterloo from '../static/logos/uwaterloo.jpeg';
import ResumeCard from './ResumeCard';

const companies = [
    {
        image: Bloomberg,
        name: 'Bloomberg LP',
        title: 'Software Engineer',
        duration: 'Sep 2025',
        location: 'New York City, NY',
        link: 'https://www.bloomberg.com/'
    },
    {
        image: Tesla,
        name: 'Tesla',
        title: 'Software Development Engineer Intern',
        duration: 'Sep 2024 - Dec 2024',
        location: 'Palo Alto, CA',
        link: 'https://www.tesla.com/'
    },
    {
        image: Zynga,
        name: 'Zynga Inc.',
        title: 'Machine Learning Engineer Intern',
        duration: 'Jan 2024 - Apr 2024',
        location: 'Toronto, ON',
        link: 'https://www.zynga.com/'
    },
    {
        image: SSNC,
        name: 'SS&C Technologies',
        title: 'Full Stack Developer Intern',
        duration: 'May 2023 - Aug 2023',
        location: 'Toronto, ON',
        link: 'https://www.ssctech.com/'
    },
    {
        image: SSNC,
        name: 'SS&C Technologies',
        title: 'Full Stack Developer Intern',
        duration: 'Sep 2022 - Dec 2022',
        location: 'Toronto, ON',
        link: 'https://www.ssctech.com/'
    },
    {
        image: FarmLink,
        name: 'FarmLink',
        title: 'Junior Software Developer Intern',
        duration: 'Jan 2022 - Apr 2022',
        location: 'Winnipeg, MB',
        link: 'https://www.grainfox.ca/'
    },
    {
        image: ExplorerHop,
        name: 'Explorer Hop',
        title: 'Web Developer Intern',
        duration: 'May 2021 - Aug 2021',
        location: 'Toronto, ON',
        link: 'https://www.explorerhop.com/'
    },
];

const schools = [
    {
        image: UWaterloo,
        name: 'University of Waterloo',
        title: 'Bachelor of Computer Science',
        duration: 'Sep 2020 - Apr 2025',
        location: 'Waterloo, ON',
        link: 'https://uwaterloo.ca/'
    }
]

const headerStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "15px",
    fontWeight: 700,
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
                Experience & Education
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    padding: '0px 10px',
                    marginTop: '10px',
                    border: { xs: '2px solid black' },
                    backgroundColor: "#b4dc87",
                }}
            >
                {schools.map((company, index) => (
                    <ResumeCard company={company} key={index}/>
                ))}
            </Box>
            <Box
                sx={{
                    overflowY: 'auto',
                    width: '100%',
                    height: { xs: '650px', sm: '560px', md: '280px', },
                    padding: '0 10px',
                    margin: '10px 0px',
                    border: { xs: '2px solid black' },
                    backgroundColor: "#b4dc87",
                }}
            >
                {companies.map((company, index) => (
                    <ResumeCard company={company} key={index}/>
                ))}
            </Box>
        </Box>
    );
};


export default Resume;
