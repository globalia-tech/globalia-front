import { Grid, Box, Typography } from '@mui/material';

const FeatureItem = ({ feature }) => {
    return (
        <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
            {/* Contenedor del Ícono (Siempre a la izquierda) */}
            <Grid item xs={3} sm={2} md={1}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pr: { md: 2 },
                    width: { xs: '40px', sm: '48px' },
                    height: { xs: '40px', sm: '48px' }
                }}>
                    {feature.icon}
                </Box>
            </Grid>

            {/* Contenedor del Texto */}
            <Grid item xs={9} sm={10} md={11}>
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