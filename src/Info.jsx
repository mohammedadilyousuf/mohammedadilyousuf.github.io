import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles/info.css';

function Info() {
    return (
        <Box component="main" className="info">
            {/* Left side for text content */}
            <Box className="container" sx={{flex: 1, maxWidth: '60%'}}>
                <Typography variant="h3" sx={{color: '#FFFFFF', fontWeight: 'bold'}}>
                    Hey there,
                </Typography>
                <Typography variant="h1" sx={{color: '#FFFFFF', fontWeight: 'bold'}}>
                    I'm Adil!
                </Typography>
                <Typography variant="h4" sx={{color: '#EDEDED', fontWeight: 'bold', marginBottom: '20px'}}>
                    A full stack software engineer.
                </Typography>
                <Typography variant="h6" sx={{color: '#F5F5DC'}}>
                    I'm an innovative problem-solver with a passion for developing secure and efficient solutions at scale for complex problems
                </Typography>
                <Typography variant="h6" sx={{color: '#F5F5DC', marginTop: '16px'}}>
                    I'm focused on building and enhancing Identity Platform at PayPal. With four years of industry experience,
                    I have contributed to the platform that empower millions of users globally,
                    demonstrating my ability to solve complex problems and optimize systems for scalability and efficiency.
                </Typography>
            </Box>

            {/* Right side for image */}
            <Box className="profile-image" sx={{flex: 1, textAlign: 'center'}}>
                <img
                    src="src/assets/profile.png"
                    alt="Profile"
                    style={{width: '350px', height: '350px', borderRadius: '50%'}}
                />
                {/* Social Media Icons */}
                <Box className="profiles">
                    <a href="https://www.linkedin.com/in/adilyousuf1234" target="_blank">
                        <img
                            src="src/assets/linkedin.png"
                            alt="linkedin"
                            style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                    </a>
                    <a href="https://github.com/mohammedadilyousuf/" target="_blank">
                        <img
                            src="src/assets/github.png"
                            alt="github"
                            style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                    </a>
                    <a href="https://www.instagram.com/mohammed.adil.yousuf/" target="_blank">
                        <img
                            src="src/assets/insta.png"
                            alt="instagram"
                            style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                    </a>
                    <a href="https://x.com/Adil_Yousuf_" target="_blank">
                        <img
                            src="src/assets/x.png"
                            alt="X"
                            style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                    </a>
                    <a href="mailto:adilyousuf1234@gmail.com" target="_blank">
                        <img
                            src="src/assets/email.png"
                            alt="X"
                            style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                    </a>
                </Box>
            </Box>
        </Box>
    );
}

Info.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Info;
