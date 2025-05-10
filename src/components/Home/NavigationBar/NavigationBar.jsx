import { AppBar, Toolbar, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavLink from './NavLink';

const FixedAppBar = styled(AppBar)(({ theme, scrolled }) => ({
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(36, 4, 85, 1)' : 'transparent',
    boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    position: 'sticky',
    top: 0,
    marginTop: theme.spacing(4),
    zIndex: theme.zIndex.drawer + 1
}));

const NavigationBar = ({ activeSection, sectionRefs }) => {
    const sections = ['Categorías de proyectos', 'Por qué elegirnos', 'Preguntas frecuentes'];

    const handleScroll = (section) => {
        const ref = sectionRefs[section];
        if (ref?.current) {
            const yOffset = -80; // Ajuste para el navbar sticky
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <FixedAppBar scrolled={activeSection !== 'Categorías de proyectos'}>
            <Toolbar disableGutters>
                <Container
                    maxWidth="800px"
                    sx={{
                        px: { xs: 2, sm: 4, md: 6 },
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        margin: '0 auto'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            py: 1,
                            gap: 2,
                            position: 'relative',
                            overflow: 'hidden'
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
                                        md: '1rem'
                                    },
                                    flex: '1 1 auto',
                                    textAlign: 'center',
                                    maxWidth: 'max-content',
                                    mx: 'auto',
                                    px: { xs: 0.5, sm: 1 },
                                    '&:hover': {
                                        transform: 'translateY(-2px)'
                                    }
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