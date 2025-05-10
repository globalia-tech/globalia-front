import { AppBar, Toolbar, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavLink from './NavLink';

const FixedAppBar = styled(AppBar)(({ theme, scrolled }) => ({
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? theme.palette.background.paper : 'transparent',
    boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    color: scrolled ? theme.palette.text.primary : theme.palette.common.white,
    position: 'sticky',
    top: 0
}));

const NavigationBar = ({ activeSection, sectionRefs, isMobile }) => {
    const sections = ['Categorías de proyectos', 'Por que elegirnos', 'Preguntas frecuentes'];

    const handleScroll = (section) => {
        const ref = sectionRefs[section];
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <FixedAppBar scrolled={activeSection !== 'Categorías de proyectos'}>
            <Toolbar>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%',
                        py: 2
                    }}>
                        {sections.map((section) => (
                            <NavLink
                                key={section}
                                active={activeSection === section}
                                onClick={() => handleScroll(section)}
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