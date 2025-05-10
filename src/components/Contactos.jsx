import React from 'react';
import {
    Box,
    Typography,
    Card,
    Grid,
    Container,
    useTheme,
    useMediaQuery,
    TextField,
    Select,
    MenuItem,
    Button,
    styled
} from '@mui/material';
import frameImage from '../assets/Medida-frame-Hero-distintas-secciones-Desktop.jpg';
import frameImage2 from '../assets/Frame4343.jpg';

// Componentes estilizados
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    width: '80%',
    maxWidth: 1200,
}));

const FormCard = styled(Card)(({ theme }) => ({
    background: `url(${frameImage2})`,
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: 953,
    margin: '0 auto',
}));

const FormBody = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderRadius: '15px',
    padding: theme.spacing(3),
}));

const Contactos = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        fetch('https://script.google.com/macros/s/AKfycbxduCLmtJXsyNmeZgu6uA27zBykzc9K7zDyP8nb1XFdQz1x2sIKzN4tJKHhSYmcS_OuFw/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Nombre: data.Nombre,
                Negocio: data.Negocio,
                Telefono: data.codigo + data.NumeroTelefonico,
                Email: data.Email,
                Motivo: data.Motivo
            })
        }).then(response => {
            if (response.ok) console.log('Datos enviados correctamente');
            else console.error('Error en el envío');
        }).catch(error => console.error('Error:', error));
    };

    return (
        <>
            <HeroSection>
                <img src={frameImage} alt="Hero" />
                <HeroText>
                    <Typography variant="h1" sx={{ fontSize: isMobile ? '2rem' : '3.5rem', mb: 2 }}>
                        Contacta con Globalia Tech
                    </Typography>
                    <Typography variant="h5" component="p">
                        Hablemos de tu próximo proyecto.<br />
                        Desde el concepto hasta la implementación, estamos contigo en cada paso
                    </Typography>
                </HeroText>
            </HeroSection>

            <Container sx={{ my: 6 }}>
                <Typography variant="h5" align="center" sx={{
                    p: 3,
                    bgcolor: 'rgba(46, 132, 235, 0.2)',
                    borderRadius: 2,
                    boxShadow: 3,
                    mx: 'auto',
                    maxWidth: 'max-content'
                }}>
                    Atención al cliente de Lunes a Viernes de 9 a 19 hs
                </Typography>

                <FormCard>
                    <FormBody>
                        <Typography variant="h3" align="center" gutterBottom>
                            Solicita una Consulta Gratuita
                        </Typography>
                        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600 }}>
                            Todas tus dudas te las responderemos a la brevedad
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3} sx={{ mb: 3 }}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        name="Nombre"
                                        label="Ingresa tu nombre"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        name="Negocio"
                                        label="Tu marca/Negocio"
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} sx={{ mb: 3 }}>
                                <Grid item xs={12} md={3}>
                                    <Select
                                        fullWidth
                                        name="codigo"
                                        defaultValue="Código de país"
                                    >
                                        <MenuItem value="Código de país" disabled>Código de país</MenuItem>
                                        <MenuItem value="+15">+15</MenuItem>
                                        <MenuItem value="+591">+591</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        name="NumeroTelefonico"
                                        type="number"
                                        label="Número de whatsapp"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextField
                                        fullWidth
                                        name="Email"
                                        type="email"
                                        label="Correo electrónico"
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Select
                                        fullWidth
                                        defaultValue="¿Qué tipo de servicio necesitas?"
                                        sx={{ mb: 2 }}
                                    >
                                        <MenuItem value="¿Qué tipo de servicio necesitas?" disabled>
                                            ¿Qué tipo de servicio necesitas?
                                        </MenuItem>
                                        <MenuItem value="Desarrollo web">Desarrollo web</MenuItem>
                                        <MenuItem value="Social Media">Social Media</MenuItem>
                                    </Select>
                                    <TextField
                                        fullWidth
                                        name="Motivo"
                                        multiline
                                        rows={6}
                                        label="Escribe el motivo de tu contacto"
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Box sx={{ textAlign: 'center', mt: 4 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{ px: 6, mx: 'auto' }}
                                >
                                    Enviar Mensaje
                                </Button>
                            </Box>
                        </form>

                        <Typography variant="body2" align="center" sx={{ mt: 3, color: 'text.secondary' }}>
                            Cuéntanos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos
                        </Typography>
                    </FormBody>
                </FormCard>
            </Container>
        </>
    );
};

export default Contactos;