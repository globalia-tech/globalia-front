import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
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
        <StyledCard sx={{ minHeight: { xs: 220, md: 260 }, p: { xs: 1, md: 2 } }}>
            <CardContent sx={{ flexGrow: 1, p: 0 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#fff', fontWeight: 500, textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    {service.titulo}
                </Typography>

                <Box component="ul" sx={{
                    pl: 2,
                    mb: 2,
                    listStyle: 'none',
                    '& li': {
                        position: 'relative',
                        pl: '1.25rem',
                        mb: 0.75,
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                        '&::before': {
                            content: '"•"',
                            position: 'absolute',
                            left: 0,
                            color: 'primary.main',
                            fontSize: '1.5rem',
                            lineHeight: 1,
                            top: '0.01em'
                        }
                    }
                }}>
                    {service.items?.map((item, index) => (
                        <Box component="li" key={index}
                        sx={{
                            top: '0.6em'
                        }}>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
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