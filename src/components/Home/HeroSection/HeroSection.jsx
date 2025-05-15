import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PrimaryButton , { ArrowIcon } from '../../common/PrimaryButton.jsx';
import imagen from '../../../assets/fondo-portada.webp';
import { Link } from 'react-router-dom';

const HeroContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }
}));

const HeroContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'left',
    color: theme.palette.common.white,
    zIndex: 1,
    width: '90%',
    maxWidth: '1158px',
    [theme.breakpoints.down('md')]: {
        '& h1': { fontSize: '2.5rem', lineHeight: '3rem' },
        '& h5': { fontSize: '1.2rem' }
    }
}));

const HeroSection = ({ setActiveSection, scrollToRef }) => {
    return (
        <HeroContainer>
            <img src={imagen} alt="Hero" />
            <HeroContent sx={{ mb: 10 }}>
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
                        '&:hover': { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }
                    }}
                >
                    Empieza ahora
                </PrimaryButton>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;