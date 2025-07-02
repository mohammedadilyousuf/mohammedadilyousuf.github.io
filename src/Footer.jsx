import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import './styles/footer.css'

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                className="footer"
                sx={{
                    height: 'auto',
                    minHeight: '50px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'fixed',
                    top: 'auto',
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: '0 -8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
            >
                <Toolbar sx={{ 
                    minHeight: '50px', 
                    padding: '0 1.5rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '100%',
                    maxWidth: '100vw'
                }}>
                    <Typography
                        variant="body2"
                        sx={{ 
                            color: '#FFFFFF', 
                            textAlign: 'left',
                            fontWeight: '500',
                            textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                            fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            marginRight: 'auto'
                        }}
                    >
                        © {new Date().getFullYear()} Mohammed Adil Yousuf. Crafted with ❤️
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        gap: { xs: '0.2rem', sm: '0.3rem' },
                        alignItems: 'center',
                        marginLeft: 'auto'
                    }}>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/adilyousuf1234"
                            target="_blank"
                            size="small"
                            sx={{ 
                                color: '#FFFFFF',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#0077B5',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <LinkedInIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://github.com/mohammedadilyousuf/"
                            target="_blank"
                            size="small"
                            sx={{ 
                                color: '#FFFFFF',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#333',
                                    backgroundColor: '#FFFFFF',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.instagram.com/mohammed.adil.yousuf/"
                            target="_blank"
                            size="small"
                            sx={{ 
                                color: '#FFFFFF',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E4405F',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <InstagramIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://x.com/Adil_Yousuf_"
                            target="_blank"
                            size="small"
                            sx={{ 
                                color: '#FFFFFF',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#000000',
                                    backgroundColor: '#FFFFFF',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <XIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="mailto:adilyousuf1234@gmail.com"
                            size="small"
                            sx={{ 
                                color: '#FFFFFF',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#EA4335',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <EmailIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
