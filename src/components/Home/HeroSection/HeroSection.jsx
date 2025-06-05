import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import PrimaryButton , { ArrowIcon } from '../../common/PrimaryButton.jsx';
import imagen from '../../../assets/fondo-portada.webp';
import { Link } from 'react-router-dom';

// Alturas de las barras del header (deben coincidir con Header/index.jsx)
const CONTACT_BAR_HEIGHT = { xs: 32, md: 40 };
const APP_BAR_HEIGHT = { xs: 56, md: 72 };

// Contenedor principal del Hero, altura variable en mobile
const HeroContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    minHeight: 420,
    maxHeight: 900,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'brightness(0.7)',
        zIndex: 0
    }
}));

// Contenido centrado y padding responsive
const HeroContent = styled(Box)(({ theme, totalHeaderHeight }) => ({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'left',
    color: theme.palette.common.white,
    zIndex: 1,
    width: '90%',
    maxWidth: '1158px',
    padding: theme.spacing(2, 2, 4, 2),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 1, 4, 1),
        '& h1': { fontSize: '2.2rem', lineHeight: '2.7rem' },
        '& h5': { fontSize: '1.1rem' }
    },
    // Ajustar la posición superior para que empiece debajo del header
    top: totalHeaderHeight.xs,
    [theme.breakpoints.up('md')]: {
        top: totalHeaderHeight.md,
    },
    // Alineación vertical del contenido dentro de HeroContent
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    height: `calc(100vh - ${totalHeaderHeight.xs}px)`, // Ajustar altura para centrar contenido restante
    [theme.breakpoints.up('md')]: {
        height: `calc(100vh - ${totalHeaderHeight.md}px)`, 
    }
}));

const HeroSection = ({ setActiveSection, scrollToRef }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const totalHeaderHeight = {
        xs: CONTACT_BAR_HEIGHT.xs + APP_BAR_HEIGHT.xs,
        md: CONTACT_BAR_HEIGHT.md + APP_BAR_HEIGHT.md,
    };

    return (
        <HeroContainer>
            {/* Imagen optimizada y lazy loading */}
            <img src={imagen} alt="Hero" loading="lazy" />
            <HeroContent totalHeaderHeight={totalHeaderHeight} sx={{ mb: 10 }}>
                <Typography variant="h1" sx={{ mb: 2 }}>
                    Todo lo que necesitas
                    <br /> para tu presencia digital
                </Typography>
                <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                    Diseño web, desarrollo y soluciones innovadoras.
                    <br /> ¡Empieza hoy con Globalia Tech!
                </Typography>
                <PrimaryButton
                    variant="contained"
                    endIcon={<ArrowIcon />}
                    component={Link}
                    to="/contactenos"
                    sx={{
                        '&:hover': { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' },
                        minWidth: 180,
                        width: { xs: '100%', md: 'auto' , lg: '300px' },
                        fontSize: { xs: '1rem', md: '1.15rem' },
                        py: { xs: 1.5, md: 2 }
                    }}
                >
                    Empieza ahora
                </PrimaryButton>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;