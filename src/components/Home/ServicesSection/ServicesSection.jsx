import { forwardRef } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import { services } from './servicesData';

const ServicesSection = forwardRef((props, ref) => (
    <Box
        ref={ref}
        sx={{
            mt: { xs: 2, md: -4 },
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            color: 'text.primary',
            width: '100%',
            maxWidth: '1536px',
            mx: 'auto'
        }}
        {...props}
    >
        <Typography variant="h4" gutterBottom sx={{ 
            textAlign: 'center', 
            mb: 4, 
            fontWeight: 700 , 
            marginTop: '-5px'
        }}>
            Categorías de proyectos
        </Typography>
        
        <Typography variant="body1" sx={{ 
            mb: 6, 
            textAlign: 'center', 
            maxWidth: 800, 
            mx: 'auto', 
            fontWeight: 600 
        }}>
            Explora cómo podemos trabajar juntos en proyectos tecnológicos,
            desde desarrollo web hasta soluciones personalizadas,
            para hacer realidad tus ideas.
        </Typography>
        
        <Grid 
            container 
            spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4 }}
            sx={{
                margin: 0,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'stretch'
            }}
        >
            {services.map((service, index) => (
                <Grid 
                    item 
                    key={index} 
                    xs={12} 
                    sm={6} 
                    md={6}
                    lg={4}
                    xl={4}
                    sx={{
                        display: 'flex',
                        // Asegurar que las cards ocupen el mismo ancho
                        minWidth: { 
                            xs: '100%', 
                            sm: 'calc(50% - 8px)', 
                            md: 'calc(50% - 12px)',
                            lg: 'calc(33.333% - 16px)',
                            xl: 'calc(33.333% - 21px)'
                        },
                        maxWidth: { 
                            xs: '100%', 
                            sm: 'calc(50% - 8px)', 
                            md: 'calc(50% - 12px)',
                            lg: 'calc(33.333% - 16px)',
                            xl: 'calc(33.333% - 21px)'
                        },
                        // Centrar la última card si queda sola
                        ...(index === services.length - 1 && services.length % 2 === 1 && {
                            '@media (min-width: 600px) and (max-width: 1199px)': {
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }
                        }),
                        // Para pantallas grandes, centrar si hay cards sobrantes
                        ...(index >= services.length - (services.length % 3) && services.length % 3 !== 0 && {
                            '@media (min-width: 1200px)': {
                                ...(services.length % 3 === 1 && index === services.length - 1 && {
                                    gridColumn: '2 / 3'
                                }),
                                ...(services.length % 3 === 2 && index >= services.length - 2 && {
                                    marginLeft: index === services.length - 2 ? 'auto' : '0',
                                    marginRight: index === services.length - 1 ? 'auto' : '0'
                                })
                            }
                        })
                    }}
                >
                    <ServiceCard service={service} />
                </Grid>
            ))}
        </Grid>
    </Box>
));

export default ServicesSection;