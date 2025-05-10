import { useEffect, useRef, useState } from 'react';
import { Container, Box, useTheme, useMediaQuery } from '@mui/material';
import HeroSection from './HeroSection/HeroSection';
import ServicesSection from './ServicesSection/ServicesSection';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import FAQSection from './FAQSection/FAQSection';
import NavigationBar from './NavigationBar/NavigationBar';
import imagen2 from '../../assets/fondo2.webp';

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeSection, setActiveSection] = useState('Categorías de proyectos');

    const categoriasRef = useRef(null);
    const elegirnosRef = useRef(null);
    const preguntasRef = useRef(null);

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

    return (
        <>
            <HeroSection />

            <NavigationBar
                activeSection={activeSection}
                sectionRefs={{
                    'Categorías de proyectos': categoriasRef,
                    'Por que elegirnos': elegirnosRef,
                    'Preguntas frecuentes': preguntasRef
                }}
            />

            <Container maxWidth="lg" sx={{ my: 6, pt: 10 }}>
                <ServicesSection ref={categoriasRef} />
                <WhyChooseUs ref={elegirnosRef} />
                <FAQSection ref={preguntasRef} />
            </Container>

            <Box sx={{ height: '50vh', overflow: 'hidden' }}>
                <img
                    src={imagen2}
                    alt="Descanso"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>
        </>
    );
};

export default Home;