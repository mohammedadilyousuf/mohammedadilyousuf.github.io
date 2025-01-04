import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './styles/footer.css'

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                className="footer"
                sx={{
                    height: '30px',
                    backgroundColor: '#53585F',
                    position: 'fixed',
                    top: 'auto',
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Toolbar sx={{ minHeight: '30px', padding: 0 }}>
                    <Typography
                        variant="body2"
                        sx={{ color: '#FFFFFF', textAlign: 'center' }}
                    >
                        © {new Date().getFullYear()} Adil Yousuf. All Rights Reserved.
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
