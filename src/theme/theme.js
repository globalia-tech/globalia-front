import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(119, 29, 250, 1)',
            light: 'rgba(117, 29, 250, 0.648)',
            dark: 'rgba(36, 4, 85, 1)',
            footer: 'rgba(26, 30, 41, 1)'
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
    // Tipografía responsiva usando clamp para escalado fluido
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            lineHeight: 1.1,
            color: '#fff',
        },
        h3: {
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            lineHeight: 1.2,
        },
        h4: {
            fontSize: 'clamp(1.2rem, 3vw, 2.25rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: 'center',
        },
        h5: {
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            lineHeight: 1.3,
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        body1: {
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: 'clamp(0.85rem, 1vw, 1rem)',
            lineHeight: 1.5,
        },
        button: {
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            fontWeight: 700,
        },
    },
    // Breakpoints mobile-first estándar
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        },
    },
    // Spacing base 8px, pero se recomienda usar sx para responsividad
    spacing: 8,
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                    lineHeight: 1.2,
                    padding: '12px 24px',
                    minHeight: 44, // Touch target mínimo
                    textTransform: 'none',
                },
                contained: {
                    '&:hover': {
                        transform: 'scale(1.05)',
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
                            transform: 'scale(1.05)',
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
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontSmoothing: 'antialiased',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                },
            },
        },
    },
});

export default theme;