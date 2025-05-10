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
    styled,
    AppBar,
    Toolbar,
    useScrollTrigger
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrimaryButton, { ArrowIcon } from './common/PrimaryButton';
import imagen from '../assets/fondo-portada.webp';
import imagen2 from '../assets/fondo2.webp';
import {Link} from "react-router";

const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }
}));

const HeroText = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: theme.palette.common.white,
    zIndex: 1,
    width: '90%',
    maxWidth: '1158px',
    [theme.breakpoints.down('md')]: {
        '& h1': {
            fontSize: '2.5rem',
            lineHeight: '3rem'
        },
        '& h5': {
            fontSize: '1.2rem'
        }
    }
}));

const NavLink = styled(Typography)(({ theme, active }) => ({
    cursor: 'pointer',
    borderBottom: active ? `3px solid ${theme.palette.primary.main}` : 'none',
    transition: 'all 0.3s ease',
    fontWeight: 600,
    textAlign: 'center',
    color: active ? theme.palette.primary.main : theme.palette.text.primary,
    '&:hover': {
        color: theme.palette.primary.main
    }
}));

const ServiceCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)'
    },
    '& ul': {
        listStyle: 'none',
        paddingLeft: 0,
        '& li': {
            padding: theme.spacing(1),
            fontSize: '1rem',
            color: theme.palette.text.primary,
            position: 'relative',
            paddingLeft: '1.5rem',
            '&:before': {
                content: '"•"',
                color: theme.palette.primary.main,
                position: 'absolute',
                left: 0
            }
        }
    }
}));

const servicios = [
    {
        titulo: " Potencia Web Avanzada",
        items: [
            "Aplicaciones Web Escalables",
            "Integración de Sistemas y APIs",
            "Arquitectura de Datos Segura"
        ]
    },
    {
        titulo: "Experiencia Digital Impactante",
        items: [
            "Interfaces Intuitivas y Atractivas",
            "Desarrollo Frontend Dinámico",
            "Optimización de la Usabilidad"
        ]
    },
    {
        titulo: "Presencia Online Efectiva",
        items: [
            "Sitios Web Funcionales y Claros",
            "Renovación y Optimización Web",
            "Contenido Visual para Impactar"
        ]
    },
    {
        titulo: "Conexión y Crecimiento Social",
        items: [
            "Estrategias de Contenido Personalizadas",
            "Community Management",
            "Manuales de Estilo Coherentes"
        ]
    }
];

const FixedAppBar = styled(AppBar)(({ theme, scrolled }) => ({
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? theme.palette.background.paper : 'transparent',
    boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    color: scrolled ? theme.palette.text.primary : theme.palette.common.white,
    position: 'sticky',
    top: 0
}));

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeSection, setActiveSection] = useState('Categorias');
    const [navScrolled, setNavScrolled] = useState(false);

    const categoriasRef = useRef(null);
    const elegirnosRef = useRef(null);
    const preguntasRef = useRef(null);
    const navRef = useRef(null);

    const scrollTrigger = useScrollTrigger({
        threshold: 100,
        disableHysteresis: true
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionMap = {
                        'Categorias': 'Categorías de proyectos',
                        'porqueElegirnos': 'Por que elegirnos',
                        'preguntasFrecuentes': 'Preguntas frecuentes'
                    };
                    setActiveSection(sectionMap[entry.target.id]);
                }
            });
        }, { threshold: 0.3 });

        if (categoriasRef.current) observer.observe(categoriasRef.current);
        if (elegirnosRef.current) observer.observe(elegirnosRef.current);
        if (preguntasRef.current) observer.observe(preguntasRef.current);

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <HeroSection>
                <img src={imagen} alt="Hero" />
                <HeroText sx={{ textAlign: 'left', mb: 10}}>
                    <Typography variant="h1" sx={{ mb: 2 }}>
                        Todo lo que necesitas
                        <br /> para tu presencia digital
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                        Diseño web, desarrollo y soluciones innovadoras.
                        <br /> ¡Empieza hoy con Globalia Tech!
                    </Typography>
                    <PrimaryButton
                        variant="contained"
                        endIcon={<ArrowIcon />}
                        component={Link}
                        to="/contactenos"
                        sx={{
                            '&:hover': {
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
                            }
                        }}
                    >
                        Empieza ahora
                    </PrimaryButton>
                </HeroText>
            </HeroSection>

            <FixedAppBar scrolled={scrollTrigger} ref={navRef}>
                <Toolbar>
                    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '100%',
                            py: 2
                        }}>
                            {['Categorías de proyectos', 'Por que elegirnos', 'Preguntas frecuentes'].map((section) => (
                                <NavLink
                                    key={section}
                                    variant="h6"
                                    active={activeSection === section ? 1 : 0}
                                    onClick={() => {
                                        const refMap = {
                                            'Categorías de proyectos': categoriasRef,
                                            'Por que elegirnos': elegirnosRef,
                                            'Preguntas frecuentes': preguntasRef
                                        };
                                        scrollToSection(refMap[section]);
                                    }}
                                >
                                    {section}
                                </NavLink>
                            ))}
                        </Box>
                    </Container>
                </Toolbar>
            </FixedAppBar>

            <Container maxWidth="lg" sx={{ my: 6, pt: 10 }}>
                {/* Sección Categorías */}
                <Box ref={categoriasRef} sx={{
                    my: 8,
                    px: { xs: 2, sm: 4, md: 6 },
                    color: 'text.primary'
                }}>
                    <Typography variant="h4" gutterBottom sx={{
                        textAlign: 'center',
                        mb: 4,
                        fontWeight: 700,
                        color: 'inherit'
                    }}>
                        Categorías de proyectos
                    </Typography>

                    <Typography variant="body1" sx={{
                        mb: 6,
                        textAlign: 'center',
                        maxWidth: 800,
                        mx: 'auto',
                        color: 'inherit'
                    }}>
                        Explora cómo podemos trabajar juntos en proyectos tecnológicos,
                        desde desarrollo web hasta soluciones personalizadas,
                        para hacer realidad tus ideas.
                    </Typography>

                    <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                        {servicios.map((servicio, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                                <ServiceCard sx={{
                                    backgroundColor: theme.palette.primary.dark,
                                    color: 'white',
                                    height: '100%',
                                    p: 3,
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    minHeight: { xs: 280, md: 320 }, // Altura mínima adaptable
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        boxShadow: 2,
                                        transform: 'translateY(-2px)'
                                    }
                                }}>
                                    {/* Encabezado con altura fija */}
                                    <Box sx={{
                                        mb: 2,
                                        pb: 1,
                                        minHeight: 70, // Altura fija para títulos
                                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Typography variant="h5" sx={{
                                            fontWeight: 600,
                                            color: 'white !important',
                                            lineHeight: 1.2,
                                            fontSize: { xs: '1.25rem', md: '1.4rem' }
                                        }}>
                                            {servicio.titulo}
                                        </Typography>
                                    </Box>

                                    {/* Lista con altura adaptable */}
                                    <Box component="ul" sx={{
                                        pl: 0,
                                        listStyle: 'none',
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly', // Distribuye items uniformemente
                                        '& li': {
                                            position: 'relative',
                                            pl: 2.5,
                                            mb: 1,
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            color: 'white !important',
                                            '&:before': {
                                                content: '"•"',
                                                position: 'absolute',
                                                left: 0,
                                                color: `${theme.palette.primary.light} !important`,
                                                fontSize: '1.2rem'
                                            }
                                        }
                                    }}>
                                        {servicio.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </Box>
                                </ServiceCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/* Sección Por qué elegirnos */}
                <Box ref={elegirnosRef} sx={{ my: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                        ¿Por qué elegir{' '}
                        <Box component="span" color="primary.main">
                            Globalia Tech
                        </Box>?
                    </Typography>

                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {[
                            {
                                icon: <svg width="63" height="50" viewBox="0 0 63 50" fill="none">
                                    <path d="M20.0705 11.9875V4.69334C20.0705 2.67912 21.7762 1.04626 23.8804 1.04626H37.215C39.3192 1.04626 41.0249 2.67912 41.0249 4.69334V11.9875M8.64079 48.4583H54.3595C58.5678 48.4583 61.9793 45.1926 61.9793 41.1641V19.2817C61.9793 15.2532 58.5678 11.9875 54.3595 11.9875H8.64079C4.43249 11.9875 1.021 15.2532 1.021 19.2817V41.1641C1.021 45.1926 4.43249 48.4583 8.64079 48.4583Z" stroke={theme.palette.primary.main} strokeWidth="2" strokeLinecap="round"/>
                                </svg>,
                                title: 'Experiencia y Profesionalismo',
                                content: 'Equipo experto en diseño web y soluciones digitales'
                            },
                            {
                                icon: <svg width="57" height="54" viewBox="0 0 57 54" fill="none">
                                    <path d="M36.146 33.375L26.5835 30.1875V16.8591M52.0835 27C52.0835 12.9167 40.6668 1.5 26.5835 1.5C12.5002 1.5 1.0835 12.9167 1.0835 27C1.0835 41.0833 12.5002 52.5 26.5835 52.5C28.2177 52.5 29.816 52.3463 31.3648 52.0525M37.7398 44.5312L42.521 49.3125L55.271 36.5625" stroke={theme.palette.primary.main} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>,
                                title: 'Entrega Puntual',
                                content: 'Cumplimos plazos sin comprometer calidad'
                            },
                            {
                                icon: <svg width="63" height="64" viewBox="0 0 63 64" fill="none">
                                    <path d="M59.8429 33.7868C59.8429 33.2345 59.3952 32.7868 58.8429 32.7868C58.2906 32.7868 57.8429 33.2345 57.8429 33.7868H59.8429ZM29.984 6.19853C30.5362 6.19853 30.984 5.75081 30.984 5.19853C30.984 4.64624 30.5362 4.19853 29.984 4.19853V6.19853ZM45.4134 33.7868C45.4134 33.2345 44.9657 32.7868 44.4134 32.7868C43.8612 32.7868 43.4134 33.2345 43.4134 33.7868H45.4134ZM29.984 20.4926C30.5362 20.4926 30.984 20.0449 30.984 19.4926C30.984 18.9404 30.5362 18.4926 29.984 18.4926V20.4926ZM43.4417 21.2867C43.8341 20.898 43.8371 20.2648 43.4484 19.8725C43.0597 19.4801 42.4265 19.4771 42.0342 19.8658L43.4417 21.2867ZM29.2802 32.5001C28.8878 32.8888 28.8848 33.522 29.2735 33.9143C29.6622 34.3067 30.2954 34.3097 30.6877 33.921L29.2802 32.5001ZM61.875 11.7325L62.5788 12.4429C62.8486 12.1756 62.9437 11.7784 62.8242 11.4179C62.7047 11.0573 62.3912 10.7956 62.0151 10.7423L61.875 11.7325ZM50.3964 23.1034L50.0829 24.0529C50.44 24.1709 50.833 24.0785 51.1002 23.8138L50.3964 23.1034ZM40.1932 12.9959L39.4895 12.2855C39.2184 12.554 39.1238 12.9532 39.2455 13.3148L40.1932 12.9959ZM51.6718 1.625L52.6616 1.48227C52.6077 1.10845 52.3478 0.796895 51.9897 0.676854C51.6315 0.556813 51.2364 0.648767 50.9681 0.914569L51.6718 1.625ZM42.744 20.5765L41.7962 20.8954C41.8966 21.1937 42.1316 21.4274 42.4305 21.5261L42.744 20.5765ZM52.9472 10.469L51.9575 10.6118C52.0209 11.0517 52.367 11.3969 52.8071 11.4592L52.9472 10.469Z" fill={theme.palette.primary.main}/>
                                </svg>,
                                title: 'Soluciones Personalizadas',
                                content: 'Estrategias hechas a medida para tus objetivos'
                            },
                            {
                                icon: <svg width="66" height="54" viewBox="0 0 66 54" fill="none">
                                    <path d="M62.5104 44.5798C59.0404 44.7098 56.0704 48.3098 57.4104 51.5798C58.6204 54.4798 62.5304 54.1998 64.9204 53.1498C69.6004 51.1498 67.6104 44.3998 62.5104 44.5798ZM65.2604 52.1998C63.1704 53.5298 58.9704 53.7698 57.9204 51.4398C56.8704 49.1097 58.9204 45.8797 61.8704 45.4398C66.4004 44.6198 68.5204 50.1298 65.2604 52.1998ZM83.5404 48.0998C84.3204 47.0998 85.8304 46.2498 86.9604 46.7598C87.6204 47.0698 88.0104 46.1998 87.2604 46.0598C86.48 45.923 85.6766 46.021 84.952 46.3415C84.2274 46.6619 83.6143 47.1904 83.1904 47.8598C83.1747 47.8827 83.1636 47.9086 83.1578 47.9359C83.1521 47.9631 83.1517 47.9912 83.1568 48.0186C83.162 48.046 83.1724 48.0722 83.1876 48.0955C83.2028 48.1189 83.2225 48.139 83.2454 48.1548C83.2684 48.1705 83.2943 48.1816 83.3216 48.1874C83.3488 48.1931 83.3769 48.1935 83.4043 48.1883C83.4317 48.1832 83.4579 48.1728 83.4812 48.1576C83.5046 48.1424 83.5247 48.1227 83.5404 48.0998ZM40.6304 17.7598C42.4757 18.5514 44.4047 19.1318 46.3804 19.4898C46.6204 19.4898 46.7504 19.1998 46.8104 19.0198C47.6072 16.5498 49.232 14.4304 51.4104 13.0198C59.7404 8.11975 67.7604 16.4898 64.2704 24.4098C62.3304 28.7998 57.2704 30.0698 53.1404 31.2298C52.4004 31.4398 52.5704 31.7598 53.2904 33.4798C54.5038 36.3998 55.7004 39.3231 56.8804 42.2498C57.1204 42.8198 58.1404 42.4498 58.5504 42.3698C59.1904 42.2598 62.6904 41.8498 62.8004 40.9798C62.9104 40.1098 60.6604 35.4698 60.2304 34.4898C68.1704 32.3098 73.5405 23.8898 71.7304 15.7398C69.4604 5.62975 58.3904 3.23975 49.6204 6.14975C45.0004 7.68975 40.4004 11.8198 40.3304 17.0598C40.3304 17.5898 40.2304 17.5898 40.6304 17.7598ZM48.4704 7.26975C57.1604 3.90975 68.6304 5.51975 71.0004 15.9298C72.7804 23.6598 67.4504 31.7098 59.9204 33.7598C59.6204 33.8398 59.3004 33.9798 59.8304 35.0298C60.6704 36.7397 62.0004 40.1298 62.3004 40.7998C60.7296 41.3134 59.1168 41.6881 57.4804 41.9198L53.3004 31.9998C57.2404 31.7398 63.3004 28.6098 64.9804 24.7698C68.3605 16.9998 61.0004 7.75975 52.0004 11.9998C50.6097 12.6583 49.384 13.6198 48.4133 14.8138C47.4425 16.0078 46.7513 17.4039 46.3904 18.8998L40.7904 17.2598C40.8604 12.9998 44.6404 8.74975 48.4704 7.26975ZM85.1704 50.8398C84.5704 50.2898 83.0005 52.6298 83.8004 53.1098C84.2505 53.3698 85.7804 51.3998 85.1704 50.8398ZM98.2604 50.3498C98.834 50.6737 99.314 51.1404 99.654 51.7046C99.9939 52.2688 100.182 52.9113 100.2 53.5698C100.201 53.618 100.217 53.6649 100.246 53.7031C100.276 53.7413 100.317 53.7688 100.363 53.7813C100.41 53.7938 100.459 53.7907 100.504 53.7723C100.549 53.754 100.586 53.7214 100.61 53.6798C101.23 52.0498 99.9904 50.4398 98.6804 49.5798C98.1504 49.2198 97.7204 50.1898 98.2604 50.3498ZM91.0804 66.7397C92.4904 65.5998 94.7904 65.3998 95.9304 67.0498C96.7904 68.2998 96.0604 69.8298 94.5204 69.4498C94.0862 69.2735 93.6651 69.0663 93.2604 68.8298C93.2229 68.8158 93.1822 68.8123 93.1428 68.8198C93.1034 68.8273 93.0668 68.8454 93.0369 68.8722C93.007 68.8989 92.9851 68.9333 92.9734 68.9717C92.9616 69.01 92.9606 69.0509 92.9704 69.0898C93.5204 70.7398 96.7804 70.6598 97.0304 68.4897C97.3304 65.8997 93.4804 63.8397 90.8604 66.4897C90.8273 66.5189 90.8071 66.5601 90.8043 66.6041C90.8015 66.6482 90.8163 66.6916 90.8454 66.7248C90.8746 66.7579 90.9158 66.7781 90.9598 66.7809C91.0039 66.7837 91.0473 66.7689 91.0804 66.7397ZM94.6204 56.9998C95.6204 57.4598 96.6204 54.9498 95.8104 54.6098C95.0004 54.2698 94.0005 56.7398 94.6204 56.9998ZM88.0504 60.6698C89.4604 61.2397 89.2404 60.5098 89.0504 60.3398C87.9119 59.7618 86.7359 59.2607 85.5304 58.8398C87.0004 56.5098 88.3904 54.1498 90.0004 51.9098C90.1404 51.7198 89.8404 51.4798 89.7004 51.6798C88.1804 53.8098 86.6404 55.9298 85.1704 58.0898C84.2304 59.4598 84.5304 59.2498 88.0504 60.6698ZM124 143.66C124.693 143.309 125.244 142.73 125.56 142.021C125.877 141.312 125.939 140.516 125.738 139.766C125.536 139.016 125.082 138.358 124.452 137.904C123.823 137.449 123.056 137.225 122.28 137.27C117.05 137.27 117.48 147.24 124 143.66ZM145.62 120.73C147.8 122.83 152.78 121.93 151.24 117.53C149.41 112.28 141.66 116.92 145.62 120.73ZM139.81 158.32C132.95 158.88 136.56 168.39 141.42 165.51C144.73 163.54 143.25 158 139.81 158.32ZM122.09 109.55C121.3 106.22 115.74 105.39 114.5 109.25C112.56 115.34 123.36 114.92 122.09 109.55ZM164.56 143.45C157.61 145.97 168.1 156.18 169.89 147.05C170.56 143.69 167.37 142.43 164.56 143.45ZM99.1604 128.1C98.3811 128.212 97.6628 128.586 97.1231 129.159C96.5834 129.732 96.2542 130.472 96.1892 131.257C96.1241 132.042 96.3272 132.825 96.7652 133.48C97.2032 134.134 97.8502 134.621 98.6004 134.86C103.75 136.4 104.62 127.3 99.1604 128.1Z" stroke={theme.palette.primary.main} strokeWidth="2"/>
                                </svg>,
                                title: 'Soporte Continuo',
                                content: 'Te acompañamos en cada etapa del proceso'
                            }
                        ].map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card sx={{ p: 3, display: 'flex', alignItems: 'flex-start' }}>
                                    <Box sx={{ mr: 3, flexShrink: 0 }}>
                                        {item.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1">
                                            {item.content}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Sección Preguntas Frecuentes */}
                <Box ref={preguntasRef} sx={{ my: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                        Preguntas Frecuentes
                    </Typography>

                    {[
                        {
                            question: '¿Qué servicios ofrece Globalia Tech?',
                            answer: 'Ofrecemos desarrollo web, diseño adaptable, soporte técnico, administración de redes sociales y creación de identidad de marca'
                        },
                        {
                            question: '¿Cómo pueden ayudarme en mi proyecto?',
                            answer: 'Trabajamos en conjunto para entender tus necesidades y objetivos, creando soluciones personalizadas'
                        },
                        {
                            question: '¿Ofrecen paquetes de servicios?',
                            answer: 'Sí, tenemos paquetes flexibles que incluyen branding, diseño web y desarrollo a medida'
                        },
                        {
                            question: '¿Puedo recibir un presupuesto?',
                            answer: 'Ofrecemos una consulta inicial gratuita para proporcionarte un presupuesto personalizado'
                        },
                        {
                            question: '¿Quiénes forman Globalia Tech?',
                            answer: 'Somos un equipo multidisciplinario con expertos en UX/UI, Desarrollo Front End/Back End, QA y Scrum Master'
                        },
                        {
                            question: '¿Ofrecen soporte técnico?',
                            answer: 'Sí, ofrecemos soporte post-lanzamiento y mantenimiento continuo'
                        }
                    ].map((item, index) => (
                        <Accordion key={index} sx={{ my: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {item.question}
                                </Typography>
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