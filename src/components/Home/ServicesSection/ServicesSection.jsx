import { forwardRef } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import { services } from './servicesData';

const ServicesSection = forwardRef((props, ref) => (
    <Box
        ref={ref}
        sx={{
            my: 8,
            px: { xs: 2, sm: 4, md: 6 },
            color: 'text.primary'
        }}
        {...props}
    >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
            Categorías de proyectos
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Explora cómo podemos trabajar juntos en proyectos tecnológicos,
            desde desarrollo web hasta soluciones personalizadas,
            para hacer realidad tus ideas.
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {services.map((service, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                    <ServiceCard service={service} />
                </Grid>
            ))}
        </Grid>
    </Box>
));

export default ServicesSection;