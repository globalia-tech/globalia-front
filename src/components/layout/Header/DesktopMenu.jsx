import { Link, NavLink } from 'react-router';
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
        <Box sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 3
        }}>
            <Box component={NavLink} to="/"
                 sx={{
                     color: (params) => params.isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
                     textDecoration: (params) => params.isActive ? 'underline' : 'none'
                 }}
            >
                Inicio
            </Box>
            <Box component={NavLink} to="/quienes-somos"
                 sx={{
                     color: (params) => params.isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
                     textDecoration: (params) => params.isActive ? 'underline' : 'none'
                 }}
            >
                Nosotros
            </Box>
            <Box>
                <Box
                    sx={{
                        color: theme.palette.text.secondary,
                        cursor: 'pointer'
                    }}
                    onClick={handleMenuOpen}
                >
                    Servicios
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                        sx: {
                            bgcolor: theme.palette.primary.dark,
                        }
                    }}
                >
                    <MenuItem
                        component="a"
                        href="/desarrollo-web"
                        onClick={handleMenuClose}
                        sx={{ color: theme.palette.text.secondary }}
                    >
                        Desarrollo Web
                    </MenuItem>
                    <MenuItem
                        component="a"
                        href="/social-media"
                        onClick={handleMenuClose}
                        sx={{ color: theme.palette.text.secondary }}
                    >
                        Social Media
                    </MenuItem>
                </Menu>
            </Box>
            <Button
                component={Link}
                to="/contactenos"
                variant="primary"
                sx={{
                    display: { xs: 'none', md: 'inline-flex' } // Ocultar en móviles
                }}
            >
                Contactanos
            </Button>
        </Box>
    );
}