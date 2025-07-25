import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles/experience.css';
import paypalLogo from './assets/paypal.png';
import appleLogo from './assets/apple.png';

function Experience() {
    const experiences = [
        {
            company: 'Apple',
            position: 'Software Engineer',
            duration: 'Jul 2025 - Present',
            location: 'Hyderabad, India',
            description: [

            ],
            technologies: ['Java']
        },
        {
            company: 'PayPal',
            position: 'Software Engineer 2',
            duration: 'Apr 2024 - Jul 2025',
            location: 'Hyderabad, India',
            description: [
                'Evaluated Spring Authorization Server to modernize legacy authorization infrastructure to OAuth 2.0/OpenID Connect standards while exploring Azure Cloud for cloud transformation journey.',
                'Integrated authentication of Visa, Amex, MasterCard into the in-house 3DS Server, enabling secure processing of 1M transactions in 6 months—scaling from 500K in 5 months to the next 500K in just 30 days.',
            ],
            technologies: ['Java', 'Spring Boot', 'Azure', 'OAuth 2.0', 'mTLS', 'Microservices']
        },
        {
            company: 'PayPal',
            position: 'Software Engineer 1',
            duration: 'Aug 2021 - Mar 2024',
            location: 'Hyderabad, India',
            description: [
                'Developed centralized security solutions and enhanced system authorization.',
                'Built self-service tools and migrated legacy C++ system to Java for better performance.',
                'Worked on Login with Email OTP feature, improving LSR and user experience for PayPal customers.'
            ],
            technologies: ['Java', 'Spring Boot', 'React', 'Node.js']
        },
        {
            company: 'PayPal',
            position: 'Software Engineer Intern',
            duration: 'Feb 2021 - Jul 2021',
            location: 'Bangalore - Virtual',
            description: [
                'Created automation tools and improved development workflows.',
                'Developed full-stack applications with API integrations.'
            ],
            technologies: ['Java', 'Spring Boot', 'JavaScript', 'React', 'Node.js']
        }
    ];

    const ExperienceCard = ({ experience, index }) => {
        const getLogo = (company) => {
            switch (company) {
                case 'Apple':
                    return appleLogo;
                case 'PayPal':
                    return paypalLogo;
                default:
                    return paypalLogo;
            }
        };

        return (
        <Box className="experience-card" style={{'--delay': `${index * 0.2}s`}}>
            <Box className="experience-header">
                <Box className="company-info">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <Box className="company-logo" sx={{
                            background: '#FFFFFF',
                            borderRadius: '8px',
                            padding: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '60px',
                            height: '40px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}>
                            <img 
                                src={getLogo(experience.company)} 
                                alt={experience.company} 
                                style={{
                                    height: '100%',
                                    width: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography variant="h6" className="position" sx={{
                                color: '#4facfe',
                                fontWeight: '600',
                                fontSize: {xs: '1rem', sm: '1.1rem', md: '1.2rem'},
                                textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                                marginBottom: '0.2rem'
                            }}>
                                {experience.position}
                            </Typography>
                            <Typography className="location" sx={{
                                color: '#FFFFFF',
                                fontSize: {xs: '0.8rem', sm: '0.9rem'},
                                textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                            }}>
                                {experience.location}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="duration-section">
                    <Typography className="duration" sx={{
                        color: '#f093fb',
                        fontWeight: '700',
                        fontSize: {xs: '0.9rem', sm: '1rem'},
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}>
                        {experience.duration}
                    </Typography>
                </Box>
            </Box>
            
            <Box className="experience-description">
                {experience.description.map((item, idx) => (
                    <Typography key={idx} className="description-item" sx={{
                        color: '#FFFFFF',
                        fontSize: {xs: '1rem', sm: '1.1rem'},
                        marginBottom: '0.8rem',
                        lineHeight: '1.7',
                        fontWeight: '400',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}>
                        {item}
                    </Typography>
                ))}
            </Box>
            
            <Box className="technologies">
                <Typography sx={{
                    color: '#FFFFFF',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontSize: {xs: '0.9rem', sm: '1rem'},
                    textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                }}>
                    Technologies:
                </Typography>
                <Box className="tech-tags">
                    {experience.technologies.map((tech, idx) => (
                        <Box key={idx} className="tech-tag">
                            {tech}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
        );
    };

    return (
        <Box component="main" className="experience-page">
            <Box className="experience-container">
                <Typography variant="h2" className="experience-title" sx={{
                    color: '#FFFFFF',
                    fontWeight: '700',
                    marginBottom: '3rem',
                    fontSize: {xs: '2rem', sm: '3rem', md: '4rem'},
                    textAlign: 'center',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
                }}>
                    Experience
                </Typography>

                <Box className="experience-timeline">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} index={index} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Experience;
