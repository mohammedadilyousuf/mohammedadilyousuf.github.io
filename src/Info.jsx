import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles/info.css';
import profilePic from './assets/profile.png';
import instagram from './assets/insta.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import x from './assets/x.png';
import email from './assets/email.png';


function Info() {
    return (
        <Box component="main" className="info">
            {/* Left side for text content */}
            <Box className="container">
                <Typography variant="h3" sx={{color: '#FFFFFF', fontWeight: 'bold', fontSize: {xs: '1.5rem', sm: '2rem', md: '3rem'}}}>
                    Hey there,
                </Typography>
                <Typography variant="h1" sx={{color: '#FFFFFF', fontWeight: 'bold', fontSize: {xs: '2rem', sm: '3rem', md: '6rem'}}}>
                    I'm Adil!
                </Typography>
                <Typography variant="h4" sx={{color: '#EDEDED', fontWeight: 'bold', marginBottom: '20px', fontSize: {xs: '1.2rem', sm: '1.5rem', md: '2.125rem'}}}>
                    A full stack software engineer.
                </Typography>
                <Typography variant="h6" sx={{color: '#F5F5DC', fontSize: {xs: '0.9rem', sm: '1rem', md: '1.25rem'}}}>
                    I'm an innovative problem-solver with a passion for developing secure and efficient solutions at scale for complex problems
                </Typography>
                <Typography variant="h6" sx={{color: '#F5F5DC', marginTop: '16px', fontSize: {xs: '0.9rem', sm: '1rem', md: '1.25rem'}}}>
                    I'm focused on building and enhancing Identity Platform at PayPal. With four years of industry experience,
                    I have contributed to the platform that empowers billions of transactions and millions of users globally,
                    demonstrating my ability to solve complex problems and optimize systems for scalability and efficiency.
                </Typography>
            </Box>

            {/* Right side for image */}
            <Box className="profile-section">
                <Box className="profile-image">
                    <img
                        src={profilePic}
                        alt="Profile"
                    />
                </Box>
                {/* Social Media Icons - desktop only */}
                <Box className="profiles desktop-only">
                <a href="https://www.linkedin.com/in/adilyousuf1234" target="_blank">
                    <img
                        src={linkedin}
                        alt="linkedin"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="https://github.com/mohammedadilyousuf/" target="_blank">
                    <img
                        src={github}
                        alt="github"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="https://www.instagram.com/mohammed.adil.yousuf/" target="_blank">
                    <img
                        src={instagram}
                        alt="instagram"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="https://x.com/Adil_Yousuf_" target="_blank">
                    <img
                        src={x}
                        alt="X"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="mailto:adilyousuf1234@gmail.com" target="_blank">
                    <img
                        src={email}
                        alt="Email"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                </Box>
            </Box>
            
            {/* Social Media Icons - mobile only */}
            <Box className="profiles mobile-only">
                <a href="https://www.linkedin.com/in/adilyousuf1234" target="_blank">
                    <img
                        src={linkedin}
                        alt="linkedin"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="https://github.com/mohammedadilyousuf/" target="_blank">
                    <img
                        src={github}
                        alt="github"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="https://www.instagram.com/mohammed.adil.yousuf/" target="_blank">
                    <img
                        src={instagram}
                        alt="instagram"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="https://x.com/Adil_Yousuf_" target="_blank">
                    <img
                        src={x}
                        alt="X"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
                <a href="mailto:adilyousuf1234@gmail.com" target="_blank">
                    <img
                        src={email}
                        alt="Email"
                        style={{width: '50px', height: '50px', borderRadius: '20%'}}/>
                </a>
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
