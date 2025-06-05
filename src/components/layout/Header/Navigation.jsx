import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Logo from "../../common/Logo";
import MobileMenu from './MobileMenu.jsx';
import DesktopMenu from './DesktopMenu';

/**
 * Main navigation component with responsive design, accesible y mobile-first
 */
export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
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
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',  }}>
            <AppBar position="absolute"
                    sx={{
                        backgroundColor: 'rgba(4, 2, 33, 0.6)',
                        boxShadow: 'none',
                        width: '100%',
                        zIndex: 2
                    }}
                    role="navigation"
                    aria-label="Navegación principal"
            >
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    padding: { xs: '0 8px', md: '0 24px' },
                    minHeight: { xs: 56, md: 72 }
                }}>
                    <Box component={Link} to="/" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        minHeight: 44
                    }} aria-label="Ir a inicio">
                        <Logo width={48} height={36}/>
                        <Typography
                            variant="h4"
                            sx={{
                                display: isTablet ? 'none' : 'block',
                                color: theme.palette.text.secondary,
                                m: 0,
                                fontSize: { xs: '1.1rem', md: '1.5rem' }
                        }}
                        >
                            Globalia Tech
                        </Typography>
                    </Box>

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