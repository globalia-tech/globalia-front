import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    borderRadius: 20,
    boxShadow: '0 4px 16px rgba(36,4,85,0.10)',
    '&:hover': {
        transform: 'translateY(-5px)'
    }
}));

const ServiceCard = ({ service }) => {
    return (
        <StyledCard 
            sx={{ 
                // Altura mínima consistente en todas las pantallas
                minHeight: { 
                    xs: 240, 
                    sm: 260, 
                    md: 280, 
                    lg: 300,
                    xl: 320
                },
                // Padding consistente
                p: { xs: 2, sm: 2.5, md: 3 },
                // Asegurar que ocupe todo el ancho disponible
                width: '100%',
                maxWidth: '100%'
            }}
        >
            <CardContent 
                sx={{ 
                    flexGrow: 1, 
                    p: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                        color: '#fff', 
                        fontWeight: 500, 
                        textAlign: 'center', 
                        fontSize: { 
                            xs: '1.1rem', 
                            sm: '1.2rem',
                            md: '1.3rem',
                            lg: '1.4rem'
                        },
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        // Limitar a 2 líneas máximo
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.3
                    }}
                >
                    {service.titulo}
                </Typography>

                <Box 
                    component="ul" 
                    sx={{
                        pl: 0,
                        mb: 0,
                        listStyle: 'none',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 0.5, sm: 0.75, md: 1 },
                        '& li': {
                            position: 'relative',
                            pl: '1.5rem',
                            fontSize: { 
                                xs: '0.9rem', 
                                sm: '0.95rem',
                                md: '1rem',
                                lg: '1.05rem'
                            },
                            lineHeight: 1.4,
                            '&::before': {
                                content: '"•"',
                                position: 'absolute',
                                left: 0,
                                color: theme => theme.palette.secondary.main || '#fff',
                                fontSize: '1.2rem',
                                lineHeight: 1,
                                top: '0.1em'
                            }
                        }
                    }}
                >
                    {service.items?.map((item, index) => (
                        <Box 
                            component="li" 
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start'
                            }}
                        >
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: '#fff',
                                    fontSize: 'inherit',
                                    lineHeight: 'inherit',
                                    fontWeight: 400
                                }}
                            >
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </StyledCard>
    );
};

export default ServiceCard;