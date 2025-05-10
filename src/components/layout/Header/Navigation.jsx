import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Logo from "../../common/Logo";
import MobileMenu from './MobileMenu.jsx';
import DesktopMenu from './DesktopMenu';

/**
 * Main navigation component with responsive design
 */
export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <AppBar position="absolute"
                    sx={{
                        backgroundColor: 'rgba(4, 2, 33, 0.6)',
                        boxShadow: 'none',
                        width: '100%',
                        zIndex: 2
                    }}>
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    padding: { xs: '0 16px', md: '0 24px' }
                }}>
                    <Box component={Link} to="/" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none'
                    }}>
                        <Logo width={62} height={48}/>
                        <Typography
                            variant="h4"
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                color: theme.palette.text.secondary,
                                m: 0
                            }}
                        >
                            Globalia Tech
                        </Typography>
                    </Box>

                    {/* Mantén la lógica de renderizado condicional */}
                    {isMobile ? (
                        <MobileMenu
                            anchorEl={anchorEl}
                            mobileMenuOpen={mobileMenuOpen}
                            toggleMobileMenu={toggleMobileMenu}
                            handleMenuOpen={handleMenuOpen}
                            handleMenuClose={handleMenuClose}
                        />
                    ) : (
                        <DesktopMenu
                            anchorEl={anchorEl}
                            handleMenuOpen={handleMenuOpen}
                            handleMenuClose={handleMenuClose}
                        />
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}