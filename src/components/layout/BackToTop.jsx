import { Box, useTheme, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function BackToTop() {
    const theme = useTheme();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={visible}>
            <Box
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #00BFFF, #8A2BE2)', // azul a violeta como en la imagen
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                    zIndex: 999,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s ease-in-out',
                    },
                }}
            >
                <ArrowUpwardIcon />
            </Box>
        </Zoom>
    );
}
