import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles/about.css';

function About() {
    return (
        <Box component="main" className="about-page">
            <Box className="about-container">
                <Typography variant="h2" className="about-title" sx={{
                    color: '#FFFFFF', 
                    fontWeight: '700', 
                    marginBottom: '2rem',
                    fontSize: {xs: '2rem', sm: '3rem', md: '4rem'},
                    textAlign: 'center',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
                }}>
                    About Me
                </Typography>
                
                <Box className="about-content">
                    <Typography variant="h6" className="about-text" sx={{
                        color: '#FFFFFF', 
                        fontSize: {xs: '1.1rem', sm: '1.2rem', md: '1.3rem'},
                        lineHeight: '1.8',
                        marginBottom: '2rem',
                        fontWeight: '400',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}>
                        I'm an innovative problem-solver with a passion for developing secure and efficient solutions at scale for complex problems. 
                        My journey in software engineering has been driven by curiosity and a commitment to excellence.
                    </Typography>
                    
                    <Typography variant="h6" className="about-text" sx={{
                        color: '#FFFFFF', 
                        fontSize: {xs: '1.1rem', sm: '1.2rem', md: '1.3rem'},
                        lineHeight: '1.8',
                        marginBottom: '2rem',
                        fontWeight: '400',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}>
                        I specialize in building and enhancing secure identity platforms and authentication systems. With 4.5 years of industry experience,
                        I have contributed to platforms that handle billions of transactions and serve millions of users globally,
                        demonstrating my ability to solve complex problems and optimize systems for scalability and efficiency.
                    </Typography>
                    
                    <Typography variant="h6" className="about-text" sx={{
                        color: '#FFFFFF', 
                        fontSize: {xs: '1.1rem', sm: '1.2rem', md: '1.3rem'},
                        lineHeight: '1.8',
                        fontWeight: '400',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}>
                        When I'm not coding, you'll find me exploring new destinations 🌍 - I have a deep passion for 
                        travel and discovering different cultures. I'm also an avid gamer 🎮, whether it's strategic gameplay or 
                        immersive adventures that help me unwind and think creatively. I believe in continuous learning and staying updated with the latest trends in the industry.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
