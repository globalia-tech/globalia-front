import { Grid, Box, Typography } from '@mui/material';

const FeatureItem = ({ feature }) => {
    return (
        <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
            {/* Contenedor del Ícono (Siempre a la izquierda y centrado) */}
            <Grid item xs={4} sm={3} md={2}> {/* Aumenta las columnas asignadas al icono */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center', // Centra verticalmente
                    justifyContent: 'flex-start', // Alinea a la izquierda
                    pr: { md: 2 },
                    width: { xs: '60px', sm: '72px' }, // Aumenta el ancho
                    height: { xs: '60px', sm: '72px' }, // Aumenta la altura
                    fontSize: { xs: '2rem', sm: '2.5rem' } // Aumenta el tamaño del icono (si es texto)
                }}>
                    {feature.icon}
                </Box>
            </Grid>

            {/* Contenedor del Texto */}
            <Grid item xs={8} sm={9} md={10}> {/* Reduce las columnas asignadas al texto */}
                <Typography variant="h5" component="h3" sx={{
                    fontWeight: 600,
                    color: '#000',
                    mb: 1
                }}>
                    {feature.title}
                </Typography>

                <Typography variant="body1" sx={{
                    color: '#000',
                    lineHeight: 1.5,
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                }}>
                    {feature.content}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default FeatureItem;