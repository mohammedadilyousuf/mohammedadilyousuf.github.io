import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles/info.css';
import profilePic from './assets/profile.png';


function Info() {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const fullText = "I'm Adil!";
    
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.substring(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(timer);
            }
        }, 150);
        
        return () => clearInterval(timer);
    }, []);
    
    return (
        <Box component="main" className="info home-page">
            {/* Profile Section */}
            <Box className="home-profile-section">
                <Box className="profile-image">
                    <img
                        src={profilePic}
                        alt="Profile"
                    />
                </Box>
                
                {/* Name Section */}
                <Box className="home-name-section">
                    <Typography variant="h3" className="fade-in-text" sx={{color: '#FFFFFF', fontWeight: '700', fontSize: {xs: '1.5rem', sm: '2rem', md: '3rem'}, textAlign: 'center', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                        Hey there,
                    </Typography>
                    <Typography 
                        variant="h1" 
                        className={`typewriter ${isTyping ? 'typing' : ''}`}
                        sx={{color: '#FFFFFF', fontWeight: '800', fontSize: {xs: '2.5rem', sm: '4rem', md: '6rem'}, textAlign: 'center', marginBottom: '0.5rem', textShadow: '3px 3px 6px rgba(0,0,0,0.8)'}}
                    >
                        {displayText}
                    </Typography>
                    <Typography variant="h4" className="fade-in-text-delayed" sx={{color: '#E0E0E0', fontWeight: '600', fontSize: {xs: '1.2rem', sm: '1.5rem', md: '2.125rem'}, textAlign: 'center', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                        Software Engineer @PayPal
                    </Typography>
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
