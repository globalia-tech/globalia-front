import { forwardRef } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import { services } from './servicesData';

const ServicesSection = forwardRef((props, ref) => (
    <Box
        ref={ref}
        sx={{
            mt: -4,
            //my: 0,
            px: { xs: 2, sm: 4, md: 6 },
            color: 'text.primary'

        }}
        {...props}
    >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
            Categorías de proyectos
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto', fontWeight: 600 }}>
            Explora cómo podemos trabajar juntos en proyectos tecnológicos,
            desde desarrollo web hasta soluciones personalizadas,
            para hacer realidad tus ideas.
        </Typography>
        <Grid container spacing={4} sx={{
            margin: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            '& .MuiGrid-item': {
                padding: {xs: '8px !important', sm: '16px !important'}
            },
            '&:last-child': {
                justifyContent: services.length % 3 === 1 ? 'center' : 'flex-start',
            }
        }}>
            {services.map((service, index) => (
                <Grid item key={index} xs={12} md={6} xl={4}>
                    <ServiceCard service={service} />
                </Grid>
            ))}
        </Grid>
    </Box>
));

export default ServicesSection;