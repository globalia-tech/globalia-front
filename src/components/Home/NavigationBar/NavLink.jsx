import { Typography, styled } from '@mui/material';

const NavLink = styled(Typography)(({ theme, active }) => ({
    cursor: 'pointer',
    borderBottom: active ? `3px solid ${theme.palette.primary.main}` : 'none',
    transition: 'all 0.3s ease',
    fontWeight: 600,
    textAlign: 'center',
    color: theme.palette.common.white,
    '&:hover': {
        color: theme.palette.secondary.main
    },
    padding: theme.spacing(1),
    margin: theme.spacing(0, 1)
}));

export default NavLink;