import { AppBar, Toolbar, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavLink from './NavLink';
import { useEffect, useState } from "react";

const FixedAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'scrolled',
})(({ theme, scrolled }) => ({
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(36, 4, 85, 1)' : 'transparent',
    boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    position: 'sticky',
    top: 0,
    margin: '24px auto 0',
    zIndex: theme.zIndex.drawer + 1,
    borderRadius: '4px',
    width: '92%',
    maxWidth: 1158,
    height: 68,
    left: 0,
    right: 0,
}));

const NavigationBar = ({ activeSection: externalActiveSection, sectionRefs }) => {
    const [scrolled, setScrolled] = useState(false);
    // Mantener un estado interno para la sección activa
    const [internalActiveSection, setInternalActiveSection] = useState(externalActiveSection || 'Categorías de proyectos');
    const sections = ['Categorías de proyectos', 'Por qué elegirnos', 'Preguntas frecuentes'];

    // Actualizar el estado interno cuando cambia la prop externa
    useEffect(() => {
        if (externalActiveSection) {
            setInternalActiveSection(externalActiveSection);
        }
    }, [externalActiveSection]);

    // Función para detectar qué sección está visible en la pantalla
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);

            // Detectar qué sección está más visible
            let currentSection = internalActiveSection;
            let minDistance = Number.MAX_VALUE;

            sections.forEach(section => {
                const ref = sectionRefs[section];
                if (ref?.current) {
                    const rect = ref.current.getBoundingClientRect();
                    // Distancia desde la parte superior de la ventana
                    const distance = Math.abs(rect.top);

                    if (distance < minDistance) {
                        minDistance = distance;
                        // Solo actualizar si realmente es visible (dentro de un margen razonable)
                        if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
                            currentSection = section;
                        }
                    }
                }
            });

            if (currentSection) {
                setInternalActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionRefs, sections, internalActiveSection]);

    // Función para manejar el scroll hacia las secciones
    const handleSectionScroll = (section) => {
        setInternalActiveSection(section); // Actualizar inmediatamente para mejor UX

        const ref = sectionRefs[section];
        if (ref?.current) {
            const yOffset = -80;
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <FixedAppBar scrolled={scrolled}>
            <Toolbar disableGutters sx={{
                height: '100%'
            }}>
                <Container
                    maxWidth="lg"
                    sx={{
                        height: '100%',
                        padding: { xs: '8px 12px', sm: '8px 24px' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            gap: { xs: 1, sm: 2, md: 3 },
                            alignItems: 'center',
                            height: '100%',
                            overflowX: 'auto',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            maxWidth: 800,
                            margin: '0 auto',
                        }}
                    >
                        {sections.map((section) => {
                            // Usar el estado interno para determinar la sección activa
                            const isActive = internalActiveSection === section;

                            return (
                                <NavLink
                                    key={section}
                                    variant="body1"
                                    active={isActive}
                                    onClick={() => handleSectionScroll(section)}
                                    sx={{
                                        whiteSpace: 'nowrap',
                                        fontSize: {
                                            xs: '0.75rem',
                                            sm: '0.875rem',
                                            md: '1rem',
                                        },
                                        flexShrink: 0,
                                        padding: { xs: '6px 8px', sm: '8px 12px' },
                                    }}
                                >
                                    {section}
                                </NavLink>
                            );
                        })}
                    </Box>
                </Container>
            </Toolbar>
        </FixedAppBar>
    );
};

export default NavigationBar;