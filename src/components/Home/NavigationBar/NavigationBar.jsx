import { AppBar, Toolbar, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavLink from './NavLink';

const FixedAppBar = styled(AppBar)(({ theme, scrolled }) => ({
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(36, 4, 85, 1)' : 'transparent',
    boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    position: 'sticky',
    top: 0,
    margin: '24px auto 0',
    zIndex: theme.zIndex.drawer + 1,
    borderRadius: '4px',
    width: '92%', // Porcentaje para márgenes automáticos
    maxWidth: 1158,
    height: 68,
    left: 0,
    right: 0,
}));

const NavigationBar = ({ activeSection, sectionRefs }) => {
    const sections = ['Categorías de proyectos', 'Por qué elegirnos', 'Preguntas frecuentes'];

    const handleScroll = (section) => {
        const ref = sectionRefs[section];
        if (ref?.current) {
            const yOffset = -80;
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <FixedAppBar scrolled={activeSection !== 'Categorías de proyectos'}>
            <Toolbar disableGutters sx={{ height: '100%' }}>
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
                        {sections.map((section) => (
                            <NavLink
                                key={section}
                                variant="body1"
                                active={activeSection === section}
                                onClick={() => handleScroll(section)}
                                sx={{
                                    whiteSpace: 'nowrap',
                                    fontSize: {
                                        xs: '0.75rem',
                                        sm: '0.875rem',
                                        md: '1rem',
                                    },
                                    flexShrink: 0,
                                    padding: { xs: '6px 8px', sm: '8px 12px' },
                                    transition: 'all 0.3s ease',
                                    borderRadius: '4px',
                                }}
                            >
                                {section}
                            </NavLink>
                        ))}
                    </Box>
                </Container>
            </Toolbar>
        </FixedAppBar>
    );
};

export default NavigationBar;