import { Link, NavLink } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, useTheme } from '@mui/material';

/**
 * Desktop navigation menu for medium and larger screens
 * @param {Object} props - Component props
 * @param {HTMLElement} props.anchorEl - Anchor element for services dropdown
 * @param {Function} props.handleMenuOpen - Opens services dropdown
 * @param {Function} props.handleMenuClose - Closes services dropdown
 */
export default function DesktopMenu({ anchorEl, handleMenuOpen, handleMenuClose }) {
    const theme = useTheme();

    return (
        <>
        <Box sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)', // Centra perfectamente el menú en la página
            gap: 4 // Espacio entre elementos del menú
        }}>
            <Box component={NavLink} to="/"
                 sx={{
                     color: (params) => params.isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
                     padding: '6px 12px',
                     transition: 'color 0.3s ease',
                     textDecoration: 'none', // Elimina cualquier subrayado
                     '&:hover': {
                         color: theme.palette.secondary.light,
                     }
                 }}
            >
                Inicio
            </Box>
            <Box component={NavLink} to="/quienes-somos"
                 sx={{
                     color: (params) => params.isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
                     padding: '6px 12px',
                     transition: 'color 0.3s ease',
                     textDecoration: 'none', // Elimina cualquier subrayado
                     '&:hover': {
                         color: theme.palette.secondary.light,
                     }
                 }}
            >
                Nosotros
            </Box>
            <Box>
                <Box
                    sx={{
                        color: theme.palette.text.secondary,
                        cursor: 'pointer',
                        padding: '6px 12px',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                            color: theme.palette.secondary.light,
                        }
                    }}
                    onClick={handleMenuOpen}
                >
                    Servicios
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    elevation={3}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    PaperProps={{
                        sx: {
                            bgcolor: theme.palette.primary.main,
                            borderRadius: '8px',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                            mt: 1,
                            overflow: 'hidden',
                            '& .MuiList-root': {
                                padding: '8px 0'
                            }
                        }
                    }}
                >
                    <MenuItem
                        component={Link}
                        to="/desarrollo-web"
                        onClick={handleMenuClose}
                        sx={{
                            color: theme.palette.text.secondary,
                            padding: '12px 20px',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: theme.palette.secondary.light
                            }
                        }}
                    >
                        Desarrollo Web
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to="/social-media"
                        onClick={handleMenuClose}
                        sx={{
                            color: theme.palette.text.secondary,
                            padding: '12px 20px',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: theme.palette.secondary.light
                            }
                        }}
                    >
                        Social Media
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'absolute',
                    right: '2rem'
                }}
            >
                <Button
                    component={Link}
                    to="/contactenos"
                    variant="primary"
                >
                    Contactanos
                </Button>
            </Box>
        </>
    );
}