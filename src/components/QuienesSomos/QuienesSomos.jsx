import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useTheme
} from '@mui/material';
import { keyframes } from '@emotion/react';
import TeamMember from '../QuienesSomos/TeamMember.jsx';
import ValueCard from '../QuienesSomos/ValueCard.jsx';

import imagen from '../../assets/imagen-seccion_historia.webp';
import imagen2 from '../../assets/imagen-fondo-seccion-nosotros.webp';
import imagenAgustin from '../../assets/perfiles/1617110579258.jpeg';
import imagenIlena from '../../assets/perfiles/Ileana.jpg';
import imagenEli from '../../assets/perfiles/eli.webp';
import imagenYohan from '../../assets/perfiles/yohan.jpg';
import imagenCesar from '../../assets/perfiles/cesar.jpeg';
import imagenRaul from '../../assets/perfiles/Raul.jpeg';


import {CalidadIcon} from '../common/SvgIcons/CalidadIcon.jsx';
import {InnovacionIcon} from '../common/SvgIcons/InnovacionIcon.jsx';
import {CompromisoIcon} from '../common/SvgIcons/CompromisoIcon.jsx';
import {ConfianzaIcon} from '../common/SvgIcons/ConfianzaIcon.jsx';
import {ColaboracionIcon} from '../common/SvgIcons/ColaboracionIcon.jsx';
import AboutCard from "./AboutCard.jsx";
import PrimaryButton, {ArrowIcon} from "../common/PrimaryButton.jsx";
import {Link} from "react-router-dom";
import CheckItem from "./CheckItem.jsx";
import TecnologiasSection from "./TecnologiasSection.jsx";
import {ReactIcon} from "../common/SvgIcons/ReactIcon.jsx";
import {AngularIcon} from "../common/SvgIcons/AngularIcon.jsx";
import {JavaIcon} from "../common/SvgIcons/JavaIcon.jsx";
import {PhpIcon} from "../common/SvgIcons/PhpIcon.jsx";
import {NextIcon} from "../common/SvgIcons/NextIcon.jsx";
import {FigmaIcon} from "../common/SvgIcons/FigmaIcon.jsx";

const revealAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const QuienesSomos = () => {
    const theme = useTheme();

    const valores = [
        { icon: <CalidadIcon />, title: 'Calidad' },
        { icon: <InnovacionIcon />, title: 'Innovación' },
        { icon: <CompromisoIcon />, title: 'Compromiso' },
        { icon: <ConfianzaIcon />, title: 'Confianza' },
        { icon: <ColaboracionIcon />, title: 'Colaboración' },
    ];

    const teamMembers = [
        { image: imagenIlena, name: 'Ileana Nieto' },
        { image: imagenYohan, name: 'Yohan J Rodriguez Sosa' },
        { image: imagenAgustin, name: 'Agustín Moldavsky Rodoni' },
        { image: imagenEli, name: 'Eli Lucero' },
        { image: imagenCesar, name: 'Cesar Maldonado' },
        { image: imagenRaul, name: 'Raul Madero' },
    ];

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            {/* Sección Hero */}
            <Box sx={{
                position: 'relative',
                textAlign: 'center',
                height: '100vh',
                background: `url(${imagen2}) top/cover`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Container>
                    <Typography variant="h1" sx={{ color: 'common.white', mb: 4 }}>
                        ¿Quiénes Somos?
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'common.white', mt: 4 }}>
                        Un equipo de expertos dedicados a transformar tus ideas en realidades digitales
                    </Typography>
                </Container>
            </Box>

            {/* Sección Historia */}
            <Container sx={{ my: 15, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Historia
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 1038, mx: 'auto', mb: 10 }}>
                    Nos conocimos en una plataforma de hackatones,
                    donde logramos una gran sinergia técnica y un fuerte sentido de compañerismo,
                    lo que nos permitió entregar un producto digital ampliamente elogiado.
                    Desde entonces, decidimos seguir colaborando para crear más soluciones innovadoras
                    y ofrecer servicios que optimicen las actividades de nuestros clientes,
                    ayudándolos a organizar y priorizar sus tareas con mayor eficiencia
                </Typography>

                <Box sx={{
                    height: 412,
                    maxWidth: 1156,
                    mx: 'auto',
                    animation: `${revealAnimation} 1s ease-out`
                }}>
                    <img
                        src={imagen}
                        alt="Historia"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '20px'
                        }}
                    />
                </Box>
            </Container>

            {/* Sección Valores */}
            <Container sx={{ textAlign: 'center', my: 10 }}>
    <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
            marginTop: '30px',
            marginBottom: { xs: '40px', sm: '50px', md: '60px' }
        }}
    >
        Nuestros valores
    </Typography>
    <Grid container justifyContent="center" spacing={4}>
        {valores.map((valor) => (
            <Grid item key={valor.title}>
                <ValueCard {...valor} />
            </Grid>
        ))}
    </Grid>
</Container>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    mb: 6,
                }}
            >
                <AboutCard
                    title="Nuestra Misión:"
                    description="Desarrollamos soluciones de software innovadoras, útiles, confiables y personalizadas que impulsan la transformación digital, facilitando el crecimiento de los clientes, su competitividad y éxito en el mercado."
                />
                <AboutCard
                    title="Nuestra Visión:"
                    description="Convertirnos en un referente global y principal aliado tecnológico de empresas y personas, respondiendo a las necesidades del mercado."
                />
            </Box>

            {/* Sección Equipo */}
            <Container sx={{ textAlign: 'center', my: 10 }}>
                <Typography variant="h4" gutterBottom>
                    Nuestro equipo
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'center',
                    my: 10
                }}>
                    {teamMembers.map((member) => (
                        <TeamMember key={member.name} {...member} />
                    ))}
                </Box>
            </Container>
            <TecnologiasSection
                iconos={[
                    <JavaIcon/>,
                    <ReactIcon/>,
                   <AngularIcon/>,
                    <PhpIcon/>,
                    <NextIcon/>,
                    <FigmaIcon/>
                ]}
            />

            {/* Sección CTA */}
            <Box sx={{
                bgcolor: 'rgba(46, 132, 235, 0.2)',
                borderRadius: '20px',
                maxWidth: 702,
                mx: 'auto',
                py: 5,
                textAlign: 'center'
            }}>
                <Typography variant="h6" sx={{ maxWidth: 440, mx: 'auto', mb: 5 }}>
                    ¡Aprovecha esta oportunidad única para tu negocio!
                </Typography>
                <PrimaryButton
                    variant="contained"
                    endIcon={<ArrowIcon />}
                    component={Link}
                    to="/contactenos"
                    sx={{
                        '&:hover': { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }
                    }}
                >
                    Empieza ahora
                </PrimaryButton>
            </Box>
            {/* Sección de Checks */}
            <Grid container spacing={4} justifyContent="center" sx={{ py: 8 }}>
                <CheckItem>Creatividad</CheckItem>
                <CheckItem>Innovación</CheckItem>
                <CheckItem>Experiencia</CheckItem>
            </Grid>
        </Box>
    );
};

export default QuienesSomos;