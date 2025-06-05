import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, IconButton, MenuItem, useTheme, Collapse } from '@mui/material';

/**
 * Mobile navigation menu for small screens, accesible y mobile-first
 */
export default function MobileMenu({ anchorEl, mobileMenuOpen, toggleMobileMenu, handleMenuOpen, handleMenuClose }) {
    const theme = useTheme();
    const menuRef = useRef(null);

    const closeAllMenus = () => {
        toggleMobileMenu();
        handleMenuClose();
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                if (mobileMenuOpen) toggleMobileMenu();
                if (anchorEl) handleMenuClose();
            }
        }

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
                sx={{ color: '#fff', minWidth: 44, minHeight: 44 }}
                onClick={toggleMobileMenu}
                aria-label="Abrir menú de navegación"
                aria-haspopup="true"
                aria-expanded={mobileMenuOpen}
                size="large"
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
                    top: { xs: 56, md: 64 },
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(4, 2, 33, 0.97)',
                    transform: mobileMenuOpen ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.3s ease-in-out',
                    display: { xs: 'block', md: 'none' },
                    zIndex: 9999,
                    py: 2,
                    boxShadow: 3,
                    borderRadius: '0 0 16px 16px',
                    minWidth: '100vw',
                    minHeight: 180,
                    overflow: 'hidden',
                    pointerEvents: mobileMenuOpen ? 'auto' : 'none'
                }}
                role="menu"
                aria-label="Menú de navegación móvil"
            >
                {/* Contenido del menú */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <NavItem to="/" label="Inicio" theme={theme} onClick={closeAllMenus} />
                    <NavItem to="/quienes-somos" label="Nosotros" theme={theme} onClick={closeAllMenus} />

                    {/* Menú desplegable de servicios */}
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Button
                            fullWidth
                            sx={{
                                color: theme.palette.text.secondary,
                                py: 1.5,
                                fontSize: '1rem',
                                minHeight: 44
                            }}
                            onClick={handleMenuOpen}
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorEl)}
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
                </Box>
            </Box>
        </>
    );
}

/**
 * Navigation item for mobile menu
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
                p: 1.5,
                width: '100%',
                textAlign: 'center',
                fontSize: '1rem',
                minHeight: 44
            }}
            role="menuitem"
        >
            {label}
        </Box>
    )
}

/**
 * Service menu item
 */
function ServiceMenuItem({ href, label, theme, onClick }) {
    return (
        <MenuItem
            component="a"
            href={href}
            onClick={onClick}
            sx={{ color: theme.palette.text.secondary, fontSize: '1rem', minHeight: 44 }}
            role="menuitem"
        >
            {label}
        </MenuItem>
    )
}