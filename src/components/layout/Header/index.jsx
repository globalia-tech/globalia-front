import { AppBar, Toolbar, Box, Typography, IconButton, useTheme, useMediaQuery, Slide } from '@mui/material';
import { WhatsApp, Email, Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import PrimaryButton from '../../common/PrimaryButton';
import { useState, useEffect } from 'react';

// Alturas de las barras
const CONTACT_BAR_HEIGHT = { xs: 32, md: 40 };
const APP_BAR_HEIGHT = { xs: 56, md: 72 };

/**
 * Header component that includes contact information and navigation
 */
export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

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
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            {/* ContactBar fija arriba */}
            <Box
                sx={{
                    width: '100%',
                    bgcolor: theme.palette.background.header || '#080726',
                    height: CONTACT_BAR_HEIGHT,
                    display: 'flex',
                    alignItems: 'center',
                    px: { xs: 1, md: 4 },
                }}
            >
                {/* Contact Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    <ContactInfo
                        href="https://wa.me/5491176255393"
                        icon={<WhatsApp fontSize="small" />}
                        text={isMobile ? null : "+54 9 11 7625 5393"}
                    />
                    <ContactInfo
                        href="mailto:info@globalia-tech.com"
                        icon={<Email fontSize="small" />}
                        text={isMobile ? null : "info@globalia-tech.com"}
                    />
                </Box>
                {/* Social Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SocialIcon href="https://www.instagram.com/globaliatech/" icon={<Instagram fontSize="small" />} />
                    <SocialIcon href="https://www.facebook.com/globaliatech/" icon={<Facebook fontSize="small" />} />
                    <SocialIcon href="https://www.linkedin.com/company/globalia-tech/" icon={<LinkedIn fontSize="small" />} />
                </Box>
            </Box>

            {/* AppBar/Menu transparente con posición absoluta */}
            <AppBar
                position="absolute"
                sx={{
                    background: 'var(--azul-sombra-60, rgba(4, 2, 33, 0.60))',
                    boxShadow: 'none',
                    width: '100%',
                    top: CONTACT_BAR_HEIGHT,
                    left: 0,
                    zIndex: theme.zIndex.appBar + 1,
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: APP_BAR_HEIGHT,
                        px: { xs: 2, md: 4 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    {/* Logo + Nombre */}
                    <Box 
                        component={Link} 
                        to="/" 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1, 
                            textDecoration: 'none', 
                            minHeight: 44,
                            flex: isMobile ? 1 : 'none'
                        }}
                    >
                        <Logo width={48} height={36} />
                        <Typography
                            variant="h4"
                            sx={{
                                display: isTablet ? 'none' : 'block',
                                color: theme.palette.text.secondary,
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', md: '1.5rem' },
                                ml: 1,
                            }}
                        >
                            Globalia Tech
                        </Typography>
                    </Box>

                    {/* Menú de navegación centrado para desktop */}
                    {!isMobile && (
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            flex: 1,
                            justifyContent: 'center',
                            mx: 3
                        }}>
                            <DesktopMenu 
                                anchorEl={anchorEl} 
                                handleMenuOpen={handleMenuOpen} 
                                handleMenuClose={handleMenuClose} 
                            />
                        </Box>
                    )}

                    {/* Botón de contacto y menú móvil */}
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: { xs: 1, md: 2 }
                    }}>
                        {isMobile && (
                            <MobileMenu 
                                anchorEl={anchorEl} 
                                mobileMenuOpen={mobileMenuOpen} 
                                toggleMobileMenu={toggleMobileMenu} 
                                handleMenuOpen={handleMenuOpen} 
                                handleMenuClose={handleMenuClose} 
                            />
                        )}
                        <PrimaryButton component={Link} to="/contactenos">
                            Contáctanos
                        </PrimaryButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

// Exportar alturas para uso en otros componentes
export const HEADER_HEIGHTS = {
    CONTACT_BAR: CONTACT_BAR_HEIGHT,
    APP_BAR: APP_BAR_HEIGHT,
    TOTAL: {
        xs: 88, // 32 + 56
        md: 112 // 40 + 72
    }
};

function ContactInfo({ href, icon, text }) {
    return (
        <Box
            component="a"
            href={href}
            sx={{
                color: 'white',
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': { opacity: 0.8 }
            }}
        >
            {icon}
            {text && (
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                    {text}
                </Typography>
            )}
        </Box>
    );
}

function SocialIcon({ href, icon }) {
    return (
        <IconButton
            href={href}
            target="_blank"
            sx={{
                color: 'white',
                padding: '6px',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
        >
            {icon}
        </IconButton>
    );
}