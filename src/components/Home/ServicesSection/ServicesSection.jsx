import { forwardRef } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import { services } from './servicesData';

const ServicesSection = forwardRef((props, ref) => (
    <Box
        ref={ref}
        sx={{
            mt: { xs: 2, md: -4 },
            px: { xs: 1, sm: 2, md: 6 },
            color: 'text.primary',
            width: '100%',
            maxWidth: '1536px',
            mx: 'auto'
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
        {/* Grid responsive: 1 columna en xs, 2 en md, 3 en xl */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{
            margin: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            '& .MuiGrid-item': {
                px: { xs: 0.5, sm: 1, md: 2 },
                py: { xs: 1, sm: 2 }
            },
            '&:last-child': {
                justifyContent: services.length % 3 === 1 ? 'center' : 'flex-start',
            }
        }}>
            {services.map((service, index) => (
                <Grid item key={index} xs={12} sm={6} xl={4}>
                    <ServiceCard service={service} />
                </Grid>
            ))}
        </Grid>
    </Box>
));

export default ServicesSection;