import { useEffect, useRef, useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Container,
    Card,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
    useMediaQuery,
    styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imagen from '../assets/fondo-portada.webp';
import imagen2 from '../assets/fondo2.webp';

const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

const HeroText = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: theme.palette.common.white,
    zIndex: 1
}));

const NavLink = styled(Typography)(({ theme, active }) => ({
    cursor: 'pointer',
    borderBottom: active ? `3px solid ${theme.palette.primary.main}` : 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
        color: theme.palette.primary.main
    }
}));

const ServiceCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '& ul': {
        listStyle: 'none',
        paddingLeft: 0
    }
}));

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeSection, setActiveSection] = useState('Categorias');
    const categoriasRef = useRef(null);
    const elegirnosRef = useRef(null);
    const preguntasRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    switch(entry.target.id) {
                        case 'Categorias':
                            setActiveSection('Categorias');
                            break;
                        case 'porqueElegirnos':
                            setActiveSection('Elegirnos');
                            break;
                        case 'preguntasFrecuentes':
                            setActiveSection('Preguntas');
                            break;
                    }
                }
            });
        }, { threshold: 0.3 });

        observer.observe(categoriasRef.current);
        observer.observe(elegirnosRef.current);
        observer.observe(preguntasRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <HeroSection>
                <img src={imagen} alt="Hero" />
                <HeroText>
                    <Typography variant="h1" sx={{ mb: 2 }}>
                        Todo lo que necesitas
                        <br /> para tu presencia digital
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                        Diseño web, desarrollo y soluciones innovadoras.
                        <br /> ¡Empieza hoy con Globalia Tech!
                    </Typography>
                </HeroText>
            </HeroSection>

            <Container sx={{ my: 6 }}>
                <Grid container justifyContent="center" sx={{ mb: 6 }}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            borderBottom: `1px solid ${theme.palette.divider}`,
                            py: 2
                        }}>
                            {['Categorias de proyectos', 'Por que elegirnos', 'Preguntas frecuentes'].map((section) => (
                                <NavLink
                                    key={section}
                                    variant="h6"
                                    active={activeSection === section ? 1 : 0}
                                    onClick={() => scrollToSection(
                                        section === 'Categorias' ? categoriasRef :
                                            section === 'Elegirnos' ? elegirnosRef :
                                                preguntasRef
                                    )}
                                >
                                    {section}
                                </NavLink>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Sección Categorías */}
                <Box ref={categoriasRef} sx={{ my: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Categorías de proyectos
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
                        Explora cómo podemos trabajar juntos en proyectos tecnológicos
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <ServiceCard>
                                <Typography variant="h5" gutterBottom>
                                    Desarrollo Web
                                </Typography>
                                <ul>
                                    <li>Sitios web desde cero</li>
                                    <li>Renovación y modificación de sitios web</li>
                                    <li>Servicios de UX/UI</li>
                                </ul>
                            </ServiceCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ServiceCard>
                                <Typography variant="h5" gutterBottom>
                                    Social Media
                                </Typography>
                                <ul>
                                    <li>Creación de contenido para redes</li>
                                    <li>Community Management</li>
                                    <li>Manual de estilo en redes</li>
                                </ul>
                            </ServiceCard>
                        </Grid>
                    </Grid>
                </Box>

                {/* Sección Por qué elegirnos */}
                <Box ref={elegirnosRef} sx={{ my: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
                        ¿Por qué elegir{' '}
                        <Box component="span" color="primary.main">
                            Globalia Tech
                        </Box>?
                    </Typography>

                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {[
                            {
                                title: 'Experiencia y Profesionalismo',
                                content: 'Equipo experto en diseño web y soluciones digitales'
                            },
                            {
                                title: 'Entrega Puntual',
                                content: 'Cumplimos plazos sin comprometer calidad'
                            },
                            {
                                title: 'Soluciones Personalizadas',
                                content: 'Estrategias hechas a medida para tus objetivos'
                            },
                            {
                                title: 'Soporte Continuo',
                                content: 'Acompañamiento en cada etapa del proceso'
                            }
                        ].map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card sx={{ p: 3 }}>
                                    <Typography variant="h5" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.content}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Sección Preguntas Frecuentes */}
                <Box ref={preguntasRef} sx={{ my: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Preguntas Frecuentes
                    </Typography>

                    {[
                        {
                            question: '¿Qué servicios ofrece Globalia Tech?',
                            answer: 'Desarrollo web, diseño adaptable, soporte técnico y más'
                        },
                        {
                            question: '¿Cómo pueden ayudarme en mi proyecto?',
                            answer: 'Trabajamos en conjunto para entender tus necesidades'
                        },
                        {
                            question: '¿Ofrecen paquetes de servicios?',
                            answer: 'Paquetes flexibles adaptados a tu negocio'
                        }
                    ].map((item, index) => (
                        <Accordion key={index} sx={{ my: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>

            {/* Imagen de descanso */}
            <Box sx={{ height: '50vh', overflow: 'hidden' }}>
                <img src={imagen2} alt="Descanso" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} />
            </Box>
        </>
    );
}

export default Home;