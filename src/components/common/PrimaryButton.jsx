import { Button, styled } from '@mui/material';

export const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor"/>
    </svg>
);

const PrimaryButton = styled(Button)(({ theme }) => ({
    borderRadius: '30px',
    fontWeight: 700,
    fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
    lineHeight: 1.2,
    padding: '12px 24px',
    minHeight: 44, // Touch target mínimo
    textTransform: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        transform: 'scale(1.05)'
    },
    '& .MuiButton-endIcon': {
        marginLeft: '8px',
        transition: 'transform 0.3s ease'
    },
    '&:hover .MuiButton-endIcon': {
        transform: 'translateX(3px)'
    }
}));
export default PrimaryButton;
