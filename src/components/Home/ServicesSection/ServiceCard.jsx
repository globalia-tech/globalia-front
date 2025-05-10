import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    backgroundColor: theme.palette.primary.dark, // Color del tema
    color: '#fff', // Color de texto general
    '&:hover': {
        transform: 'translateY(-5px)'
    }
}));

const ServiceCard = ({ service }) => {
    return (
        <StyledCard>
            {service.image && (
                <CardMedia
                    component="img"
                    height="180"
                    image={service.image}
                    alt={service.title}
                    sx={{ objectFit: 'cover' }}
                />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
                    {service.titulo}
                </Typography>

                <Box component="ul" sx={{
                    pl: 2.5,
                    mb: 2,
                    listStyle: 'none',
                    '& li': {
                        position: 'relative',
                        pl: '1.25rem',
                        mb: 0.75,
                        '&::before': {
                            content: '"•"',
                            position: 'absolute',
                            left: 0,
                            color: 'primary.main',
                            fontSize: '1.5rem',
                            lineHeight: 1,
                            top: '0.15em'
                        }
                    }
                }}>
                    {service.items?.map((item, index) => (
                        <Box component="li" key={index}>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {service.route && (
                    <Box sx={{ mt: 'auto' }}>
                        <Box
                            component={Link}
                            to={service.route}
                            sx={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontWeight: 500,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: 'primary.light'
                                }
                            }}
                        >
                            Ver más
                            <span style={{ fontSize: '1.2rem' }}>→</span>
                        </Box>
                    </Box>
                )}
            </CardContent>
        </StyledCard>
    );
};

export default ServiceCard;