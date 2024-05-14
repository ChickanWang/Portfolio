import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import profile from '../static/profile.jpeg';
import IconButton from '@mui/material/IconButton';
import { GitHub, Email, LinkedIn, Description } from '@mui/icons-material';
import resume from '../static/resume.pdf';
import Listening from '../components/Listening';
import leftarr from '../static/leftarr.png';
import rightarr from '../static/rightarr.png';
import tree from '../static/tree.png';

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

function About() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: { xs: '10px', sm: '30px' },
            backgroundColor: "#feffe9",
            border: '2px solid black',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }
            }}>
                <Box sx={{ marginRight: { sm: '40px' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={profile}
                            alt="Profile"
                            sx={{
                                width: '200px',
                                height: '200px',
                                border: '2px solid black',
                                marginLeft: { xs: 'auto', sm: '0px' },
                                marginRight: { xs: 'auto', sm: '0px' }
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
                    <Typography variant="h3" component="div" sx={{ fontFamily: 'Inconsolata, monospace', fontWeight: 500, }}>
                        Stephen Wang
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ fontFamily: 'Inconsolata, monospace', fontWeight: 500, }}>
                        UWaterloo CS 2025
                    </Typography>
                    <Typography
                        variant="body"
                        component="div"
                        sx={{
                            marginTop: '10px',
                            fontFamily: 'Inconsolata, monospace',
                            fontSize: "14px",
                        }}>
                        I'm a 4th year Computer Science student specializing in AI at UWaterloo, seeking 2025 new grad positions.
                        <br />
                        <br />
                        Backend @ WealthyPlanet, Prev @ Zynga, SS&C, Farmlink, Explorer Hop
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
                            <Typography sx={contentStyle}><a href="https://uwflow.com/course/ece457c">ECE457C</a> | <a href="https://uwflow.com/course/cs370">CS370</a> | <a href="https://uwflow.com/course/CS348">CS348</a></Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={headerStyle}>Hobbies</Typography>
                            <Typography sx={contentStyle}><a href="https://leetcode.com/ChickenWang">Leetcode</a> | <a href="https://codeforces.com/profile/ChickenWang">Codeforces</a> | <a href="https://www.op.gg/summoners/na/ChickenWang-0000">opgg</a></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: "space-between", }}>
                <Listening />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        marginLeft: 'auto',
                        margin: { xs: '0px', sm: '20px 30px' },
                        width: "100%",
                        alignItems: 'center',
                        border: '2px solid black',
                        backgroundColor: '#e4f8ba',
                        padding: { xs: '5px', sm: '0px' }
                    }}>
                    <Typography
                        sx={{
                            marginTop: 'auto',
                            fontFamily: 'Inconsolata, monospace',
                            fontWeight: 500
                        }}>
                        Under Construction
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inconsolata, monospace' }} >⋆﹥━━━━━━━━━━━━━━━━━━━━━﹤⋆</Typography>
                    <Box sx={{ display: 'flex', marginBottom: 'auto', alignItems: 'center', justifyContent: 'space-between', }}>
                        <a href="https://d3l-n3st.vercel.app/prev" target="_blank" rel="noopener noreferrer">
                            <Box component="img" src={leftarr} alt="Left" sx={{ width: 20, height: 20 }} />
                        </a>
                        <a href="https://d3l-n3st.vercel.app/" target="_blank" rel="noopener noreferrer" sx={{ mx: 2 }}>
                            <Box component="img" src={tree} alt="Tree" sx={{ margin: "0px 10px", width: 20, height: 20 }} />
                        </a>
                        <a href="https://d3l-n3st.vercel.app/right" target="_blank" rel="noopener noreferrer">
                            <Box component="img" src={rightarr} alt="Right" sx={{ width: 20, height: 20 }} />
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
