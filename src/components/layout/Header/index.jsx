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

    // Estado para controlar la visibilidad del header al hacer scroll
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > (CONTACT_BAR_HEIGHT.md + APP_BAR_HEIGHT.md)) {
                // Ocultar si el scroll es hacia abajo y ya pasó la altura del header
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY || currentScrollY < (CONTACT_BAR_HEIGHT.md + APP_BAR_HEIGHT.md)) {
                // Mostrar si el scroll es hacia arriba o si está cerca del tope
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMobile]);

    return (
        <Slide in={isVisible} direction="down" mountOnEnter unmountOnExit>
            <Box>
                {/* ContactBar fija arriba */}
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        bgcolor: theme.palette.background.header || '#080726',
                        zIndex: theme.zIndex.appBar,
                        height: CONTACT_BAR_HEIGHT,
                        display: 'flex',
                        alignItems: 'center',
                        px: { xs: 1, md: 4 },
                        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                        transition: 'transform 0.3s ease-in-out',
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

                {/* AppBar/Menu transparente debajo */}
                <AppBar
                    position="fixed"
                    sx={{
                        background: 'transparent',
                        boxShadow: 'none',
                        top: { xs: CONTACT_BAR_HEIGHT.xs, md: CONTACT_BAR_HEIGHT.md }, // Debajo del ContactBar, con valores específicos
                        zIndex: theme.zIndex.appBar + 1,
                        width: '100%',
                        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                        transition: 'transform 0.3s ease-in-out',
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
                        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', minHeight: 44 }}>
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

                        {/* Menú de navegación y botón */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
                            <Box>
                                {isMobile ? <MobileMenu /> : <DesktopMenu />}
                            </Box>
                            <Box>
                                <PrimaryButton>Contáctanos</PrimaryButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Slide>
    );
}

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
