import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { GitHub, Email, LinkedIn, Description } from '@mui/icons-material';
import Listening from '../components/Listening';
import resume from '../static/resume.pdf';
import leftarr from '../static/assets/leftarr.png';
import rightarr from '../static/assets/rightarr.png';
import tree from '../static/assets/tree.png';
import profile from '../static/profile.jpeg';

const iconStyle = {
    border: '2px solid black',
    margin: '2px',
    color: 'black',
}

const headerStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "20px",
    fontWeight: 500,
}

const contentStyle = {
    fontFamily: 'Inconsolata, monospace',
    fontSize: "14px",
}

const bodyStyle = {
    fontFamily: 'Inconsolata, monospace', 
    fontWeight: 500, 
    textAlign: {xs: 'center', md: 'left'}, 
    marginLeft: {xs: 'auto', md: ''}, 
    marginRight: {xs: 'auto', md: ''},
}

function About() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            padding: { xs: '10px', sm: '30px' },
            backgroundColor: "#feffe9",
            border: '2px solid black',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }
            }}>
                <Box sx={{ marginRight: { md: '40px' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={profile}
                            alt="Profile"
                            sx={{
                                width: '200px',
                                height: '200px',
                                border: '2px solid black',
                                marginLeft: { xs: 'auto', md: '0px' },
                                marginRight: { xs: 'auto', md: '0px' }
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>
                        <IconButton
                            aria-label="GitHub"
                            component="a"
                            href="https://github.com/ChickanWang"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={iconStyle}
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            aria-label="Email"
                            component="a"
                            href="mailto:stephenywang22@gmail.com"
                            sx={iconStyle}
                        >
                            <Email />
                        </IconButton>
                        <IconButton
                            aria-label="LinkedIn"
                            component="a"
                            href="https://www.linkedin.com/in/stephen-wang-a913aa168/"
                            sx={iconStyle}
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            aria-label="Resume"
                            component="a"
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={iconStyle}
                        >
                            <Description />
                        </IconButton>
                    </Box>
                </Box>
                <Box>
                    <Typography 
                        variant="h3" 
                        component="div" 
                        sx={bodyStyle}>
                        Stephen Wang
                    </Typography>
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={bodyStyle}>
                        UWaterloo CS 2025
                    </Typography>
                    <Typography
                        variant="body"
                        component="div"
                        sx={{
                            ...bodyStyle,
                            marginTop: '10px',
                            fontFamily: 'Inconsolata, monospace',
                            fontSize: "14px",
                        }}>
                        Incoming SWE @ Bloomberg, Prev @ Tesla, Zynga
                        <br />
                        <br />
                        A proud Oakville native and Waterloo student, I’m committed to building meaningful software and exploring new recipes in my downtime.
                    </Typography>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        marginTop: '20px',
                        ontFamily: 'Inconsolata, monospace',
                        fontSize: "14px",
                    }}>
                        <Box>
                            <Typography variant="h6" sx={headerStyle}>Coursework</Typography>
                            <Typography sx={contentStyle}><a href="https://uwflow.com/course/cs486">CS486</a> | <a href="https://uwflow.com/course/cs451">CS451</a> | <a href="https://uwflow.com/course/ece457c">ECE457C</a></Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={headerStyle}>Hobbies</Typography>
                            <Typography sx={contentStyle}><a href="https://leetcode.com/ChickenWang">Leetcode</a> | <a href="https://www.strava.com/athletes/73815252">Strava</a> | <a href="https://www.op.gg/summoners/na/ChickenWang-0000">opgg</a></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: "space-between", }}>
                <Listening />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        marginLeft: 'auto',
                        margin: { xs: '0px', md: '20px 30px' },
                        width: "100%",
                        alignItems: 'center',
                        border: '2px solid black',
                        backgroundColor: '#e4f8ba',
                        padding: { xs: '0px', md: '0px' }
                    }}
                >
                    <Box sx={{ display: 'flex', marginTop: 'auto', alignItems: 'center', justifyContent: 'space-between', }}>
                        <a href="https://d3l-n3st.vercel.app/prev">
                            <Box component="img" src={leftarr} alt="Left" sx={{ width: 20, height: 20 }} />
                        </a>
                        <a href="https://d3l-n3st.vercel.app/" target="_blank" rel="noopener noreferrer" sx={{ mx: 2 }}>
                            <Box component="img" src={tree} alt="Tree" sx={{ margin: "0px 10px", width: 20, height: 20 }} />
                        </a>
                        <a href="https://d3l-n3st.vercel.app/next">
                            <Box component="img" src={rightarr} alt="Right" sx={{ width: 20, height: 20 }} />
                        </a>
                    </Box>
                    <Typography sx={{ fontFamily: 'Inconsolata, monospace' }} >⋆﹥━━━━━━━━━━━━━━━━━━━━━﹤⋆</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ 
                            fontFamily: 'Inconsolata, monospace',
                            marginBottom: 'auto'
                        }}
                    >
                        Last Updated: January 12, 2025
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
