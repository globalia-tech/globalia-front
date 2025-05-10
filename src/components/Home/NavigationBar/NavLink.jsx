import { Typography, styled } from '@mui/material';

const NavLink = styled(Typography)(({ theme, active }) => ({
    cursor: 'pointer',
    borderBottom: active ? `3px solid ${theme.palette.primary.main}` : 'none',
    transition: 'all 0.3s ease',
    fontWeight: 600,
    textAlign: 'center',
    color: active ? theme.palette.primary.main : 'inherit',
    '&:hover': {
        color: theme.palette.primary.main
    },
    padding: theme.spacing(1),
    margin: theme.spacing(0, 2)
}));

export default NavLink;