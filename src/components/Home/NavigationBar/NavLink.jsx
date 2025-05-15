import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
    cursor: 'pointer',
    borderBottom: active ? `3px solid ${theme.palette.secondary.main}` : 'none',
    fontWeight: 600,
    textAlign: 'center',
    color: active ? theme.palette.secondary.main : theme.palette.text.secondary,
    '&:hover': {
        color: theme.palette.secondary.main
    },
    padding: '8px',
    margin: '0 8px',
}));

const NavLink = ({ active, children, onClick, sx, ...props }) => {
    return (
        <StyledTypography
            active={active}
            onClick={onClick}
            sx={sx}
            {...props}
        >
            {children}
        </StyledTypography>
    );
};

export default NavLink;