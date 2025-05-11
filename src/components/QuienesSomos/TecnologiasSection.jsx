import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

const TecnologiaIcono = ({ children }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: 2,
                borderRadius: '12px',
                backgroundColor: theme.palette.background.paper,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-5px)' }
            }}
        >
            {children}
        </Box>
    );
};

const TecnologiasSection = ({ iconos }) => {
    const theme = useTheme();

    return (
        <Box component="section" sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4 }}>
                    Tecnologías Manejadas
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {iconos.map((icono, index) => (
                        <Grid item key={index}>
                            <TecnologiaIcono>{icono}</TecnologiaIcono>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default TecnologiasSection;