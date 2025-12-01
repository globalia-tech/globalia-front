import React from 'react';
import {
    Box,
    Typography,
    Container,
    useTheme,
    useMediaQuery,
    styled
} from '@mui/material';
import ContactForm from '../ContactForm/ContactForm';
import frameImage from '../../../assets/Medida-frame-Hero-distintas-secciones-Desktop.jpg'
import frameImage2 from '../../../assets/Frame4343.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

const HeroText = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: theme.palette.common.white,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    width: '80%',
    maxWidth: 1200,
}));

const FormCard = styled(Box)(({ theme }) => ({
    background: `url(${frameImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: 953,
    margin: '0 auto',
    borderRadius: theme.shape.borderRadius,
}));

const FormBody = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderRadius: '15px',
    padding: theme.spacing(4),
    boxShadow: theme.shadows[3],
}));

const CustomerServiceInfo = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: 'rgba(46, 132, 235, 0.1)',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    margin: theme.spacing(6, 'auto'),
    maxWidth: 'fit-content',
    textAlign: 'center',
    border: '2px solid rgba(46, 132, 235, 0.2)',
}));

const Contactos = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleSubmitSuccess = (formData) => {
        console.log('Formulario enviado exitosamente:', formData);
        // Aquí puedes agregar lógica adicional como analytics, redirección, etc.
    };

    return (
        <>
            <HeroSection>
                <img src={frameImage} alt="Contacta con Globalia Tech" />
                <HeroText>
                    <Typography 
                        variant="h1" 
                        component="h1"
                        sx={{ 
                            fontSize: isMobile ? '2rem' : '3.5rem', 
                            mb: 2,
                            fontWeight: 'bold'
                        }}
                    >
                        Contacta con Globalia Tech
                    </Typography>
                    <Typography variant="h5" component="p">
                        Hablemos de tu próximo proyecto.<br />
                        Desde el concepto hasta la implementación, estamos contigo en cada paso.
                    </Typography>
                </HeroText>
            </HeroSection>

            <Container maxWidth="lg" sx={{ py: 6 }}>
                <CustomerServiceInfo>
                    <Typography variant="h5" component="h2">
                        Atención al Cliente  Lunes a Viernes de 9:00 a 19:00 hrs
                    </Typography>
                   </CustomerServiceInfo>

                <FormCard>
                    <FormBody>
                        <ContactForm onSubmitSuccess={handleSubmitSuccess} />
                    </FormBody>
                </FormCard>
            </Container>
        </>
    );
};

export default Contactos;