import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(119, 29, 250, 1)',
            light: 'rgba(117, 29, 250, 0.648)',
            dark: 'rgba(36, 4, 85, 1)',
        },
        secondary: {
            main: 'rgba(1, 194, 225, 1)',
            light: '#3cbeff',
            dark: 'rgb(2, 148, 215)',
        },
        text: {
            primary: 'rgba(26, 30, 41, 0.87)',
            secondary: 'rgba(255, 254, 240, 0.953)',
        },
        background: {
            default: '#f9f9f9',
            paper: '#fff',
            dark: '#000',
            header: 'rgba(4, 2, 33, 1)'
        },
    },
    typography: {
        fontFamily: '"Inter", serif',
        h1: {
            fontWeight: 700,
            fontSize: '56px',
            lineHeight: '64px',
            color: '#fff',
        },
        h4: {
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '44px',
            textAlign: 'center',
        },
        h5: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        body2: {
            fontSize: '14px',
            lineHeight: '20px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '19.36px',
                    padding: '12px 24px',
                    textTransform: 'none',
                },
                contained: {
                    '&:hover': {
                        transform: 'scale(1.1)',
                    },
                },
            },
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        backgroundColor: 'rgba(119, 29, 250, 1)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(119, 29, 250, 0.9)',
                            transform: 'scale(1.1)',
                        },
                    },
                },
            ],
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: 0,
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 405,
            md: 768,
            lg: 1182,
            xl: 1536,
        },
    },
});

export default theme;