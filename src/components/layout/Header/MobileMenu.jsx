import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, IconButton, MenuItem, useTheme, Collapse } from '@mui/material';

/**
 * Mobile navigation menu for small screens
 * @param {Object} props - Component props
 * @param {HTMLElement} props.anchorEl - Anchor element for services dropdown
 * @param {boolean} props.mobileMenuOpen - State of mobile menu
 * @param {Function} props.toggleMobileMenu - Toggle function for mobile menu
 * @param {Function} props.handleMenuOpen - Opens services dropdown
 * @param {Function} props.handleMenuClose - Closes services dropdown
 */
export default function MobileMenu({ anchorEl, mobileMenuOpen, toggleMobileMenu, handleMenuOpen, handleMenuClose }) {
    const theme = useTheme();
    const menuRef = useRef(null);

    // Función para cerrar ambos menús
    const closeAllMenus = () => {
        toggleMobileMenu();
        handleMenuClose();
    };

    // Detector de clics fuera del menú
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                if (mobileMenuOpen) toggleMobileMenu();
                if (anchorEl) handleMenuClose();
            }
        }

        // Agrega el detector de eventos solo si el menú está abierto
        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuOpen, anchorEl, toggleMobileMenu, handleMenuClose]);

    return (
        <>
            <IconButton
                sx={{ color: '#fff' }}
                onClick={toggleMobileMenu}
                aria-label="menu de navegación"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </IconButton>

            {/* Contenedor principal del menú */}
            <Box
                ref={menuRef}
                sx={{
                    position: 'absolute',
                    top: '64px', // Ajustar según altura de tu header
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(4, 2, 33, 0.9)',
                    transform: mobileMenuOpen ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.3s ease-in-out',
                    display: { xs: 'block', md: 'none' },
                    zIndex: 9999,
                    py: 2,
                    boxShadow: 3
                }}
            >
                {/* Contenido del menú */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <NavItem to="/" label="Inicio" theme={theme} onClick={closeAllMenus} />
                    <NavItem to="/quienes-somos" label="Nosotros" theme={theme} onClick={closeAllMenus} />

                    {/* Menú desplegable de servicios */}
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Button
                            fullWidth
                            sx={{
                                color: theme.palette.text.secondary,
                                py: 1.5,
                                fontSize: '1rem'
                            }}
                            onClick={handleMenuOpen}
                        >
                            Servicios
                        </Button>

                        <Collapse in={Boolean(anchorEl)}>
                            <Box sx={{ pl: 2 }}>
                                <ServiceMenuItem
                                    href="/desarrollo-web"
                                    label="Desarrollo Web"
                                    theme={theme}
                                    onClick={closeAllMenus}
                                />
                                <ServiceMenuItem
                                    href="/social-media"
                                    label="Social Media"
                                    theme={theme}
                                    onClick={closeAllMenus}
                                />
                            </Box>
                        </Collapse>
                    </Box>

                    {/* Botón de contacto */}
                    <Button
                        component={Link}
                        to="/contactenos"
                        fullWidth
                        sx={{
                            mx: 2,
                            my: 1,
                            color: '#fff',
                            backgroundColor: theme.palette.secondary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.dark
                            }
                        }}
                        onClick={closeAllMenus}
                    >
                        Contáctanos
                    </Button>
                </Box>
            </Box>
        </>
    );
}

/**
 * Navigation item for mobile menu
 * @param {Object} props - Component props
 * @param {string} props.to - Navigation link URL
 * @param {string} props.label - Navigation label
 * @param {Object} props.theme - MUI theme object
 * @param {Function} props.onClick - Click handler function
 */
function NavItem({ to, label, theme, onClick }) {
    return (
        <Box
            component={NavLink}
            to={to}
            onClick={onClick}
            sx={{
                color: (params) => params.isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
                textDecoration: (params) => params.isActive ? 'underline' : 'none',
                p: 1,
                width: '100%',
                textAlign: 'center'
            }}
        >
            {label}
        </Box>
    )
}

/**
 * Service menu item
 * @param {Object} props - Component props
 * @param {string} props.href - Service link URL
 * @param {string} props.label - Service label
 * @param {Object} props.theme - MUI theme object
 * @param {Function} props.onClick - Click handler function
 */
function ServiceMenuItem({ href, label, theme, onClick }) {
    return (
        <MenuItem
            component="a"
            href={href}
            onClick={onClick}
            sx={{ color: theme.palette.text.secondary }}
        >
            {label}
        </MenuItem>
    )
}