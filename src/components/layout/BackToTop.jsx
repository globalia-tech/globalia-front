import { Box, useTheme } from '@mui/material';

/**
 * Back to top button component that appears in the bottom right corner
 */
export default function BackToTop() {
    const theme = useTheme();

    return (
        <Box
            component="a"
            href="#"
            sx={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textDecoration: 'none',
                zIndex: 999,
                '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                    transform: 'scale(1.1)'
                }
            }}
        >
            <i className="fas fa-arrow-up"></i>
        </Box>
    );
}