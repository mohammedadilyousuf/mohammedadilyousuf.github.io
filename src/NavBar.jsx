import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Experience', 'Skills'];

function DrawerAppBar(props) {
    const { window, onPageChange, currentPage } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavItemClick = (item) => {
        if (onPageChange) {
            onPageChange(item);
        }
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ 
            textAlign: 'center',
            background: 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
            height: '100%',
            position: 'relative'
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                zIndex: 1
            }}/>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h6" sx={{ 
                    my: 2, 
                    color: '#FFFFFF',
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}>
                    MOHAMMED ADIL YOUSUF
                </Typography>
                <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton 
                                sx={{ 
                                    textAlign: 'center',
                                    backgroundColor: currentPage === item ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                                    margin: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)'
                                    }
                                }}
                                onClick={() => handleNavItemClick(item)}
                            >
                                <ListItemText
                                    primary={item}
                                    sx={{
                                        color: '#FFFFFF',
                                        fontWeight: currentPage === item ? '700' : '500',
                                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav" sx={{ 
                background: 'rgba(0, 0, 0, 0.3)', 
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'fixed',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'none', sm: 'block' },
                            fontWeight: '700',
                            fontSize: { sm: '1.1rem', md: '1.3rem' },
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                            background: 'linear-gradient(45deg, #FFFFFF, #E0E0E0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        MOHAMMED ADIL YOUSUF
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button 
                                key={item} 
                                sx={{ 
                                    color: '#fff',
                                    backgroundColor: currentPage === item ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                                    margin: '0 0.3rem',
                                    borderRadius: '8px',
                                    padding: '8px 16px',
                                    fontWeight: currentPage === item ? '700' : '500',
                                    textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                                onClick={() => handleNavItemClick(item)}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
