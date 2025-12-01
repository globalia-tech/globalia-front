import { Link, NavLink } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, useTheme } from '@mui/material';
import { KeyboardArrowDown } from "@mui/icons-material";

/**
 * Desktop navigation menu for medium and larger screens, accesible y mobile-first
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
                transform: 'translateX(-50%)',
                gap: 4
            }} role="menubar" aria-label="Menú principal">
                <Box component={NavLink} to="/"
                    sx={{
                        color: (params) => params.isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
                        padding: '10px 16px',
                        transition: 'color 0.3s ease',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        minHeight: 44,
                        "&.active": {
                            color: theme.palette.secondary.main,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -4,
                                left: 0,
                                right: 0,
                                height: '2px',
                                backgroundColor: theme.palette.secondary.main,
                            }
                        },
                        '&:hover': {
                            color: theme.palette.secondary.light,
                        }
                    }}
                    role="menuitem"
                >
                    Inicio
                </Box>
                <Box component={NavLink} to="/quienes-somos"
                    sx={{
                        color: (params) => params.isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
                        padding: '10px 16px',
                        transition: 'color 0.3s ease',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        minHeight: 44,
                        "&.active": {
                            color: theme.palette.secondary.main,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -4,
                                left: 0,
                                right: 0,
                                height: '2px',
                                backgroundColor: theme.palette.secondary.main,
                            }
                        },
                        '&:hover': {
                            color: theme.palette.secondary.light,
                        }
                    }}
                    role="menuitem"
                >
                    Nosotros
                </Box>
                <Box>
                    <Box
                        sx={{
                            color: theme.palette.text.secondary,
                            cursor: 'pointer',
                            padding: '10px 16px',
                            transition: 'color 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            fontSize: '1rem',
                            minHeight: 44,
                            '&:hover': {
                                color: theme.palette.secondary.light,
                            }
                        }}
                        onClick={handleMenuOpen}
                        aria-haspopup="true"
                        aria-expanded={Boolean(anchorEl)}
                        role="menuitem"
                        tabIndex={0}
                    >
                        Servicios
                        <KeyboardArrowDown
                            sx={{
                                transition: 'transform 0.2s ease',
                                transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'none'
                            }}
                        />
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
                        MenuListProps={{
                            'aria-label': 'Servicios',
                            role: 'menu'
                        }}
                    >
                        <MenuItem
                            component={Link}
                            to="/desarrollo-web"
                            onClick={handleMenuClose}
                            sx={{
                                color: theme.palette.text.secondary,
                                padding: '12px 20px',
                                fontSize: '1rem',
                                minHeight: 44,
                                transition: 'color 0.2s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    color: theme.palette.secondary.light
                                }
                            }}
                            role="menuitem"
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
                                fontSize: '1rem',
                                minHeight: 44,
                                transition: 'color 0.2s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    color: theme.palette.secondary.light
                                }
                            }}
                            role="menuitem"
                        >
                            Social Media
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </>
    );
}