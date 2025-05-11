import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  useMediaQuery,
  Stack
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// You'll need to import your images - these are placeholders
import imagenDesarrolloWeb from "../assets/desarrollo-web.png";
import imagenPlantilla01 from "../assets/plantilla01.png";
import imagenPlantilla02 from "../assets/plantilla02.png";
import imagenPlantilla03 from "../assets/plantilla03.png";
import imagenPlantilla04 from "../assets/plantilla04.png";
import imagenPlantilla05 from "../assets/plantilla05.png";
import imagenCustomDesign01 from "../assets/customdesign01.png";
import imagenCustomDesign02 from "../assets/customdesign02.png";
import imagenCustomDesign03 from "../assets/customdesign03.png";
import imagenCustomDesign04 from "../assets/customdesign04.png";

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '729px',
  width: '100%',
  overflow: 'hidden',
}));

const HeroBackground = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const HeroTextContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1027px',
  zIndex: 1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('lg')]: {
    width: '90%',
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
    top: '45%',
    padding: theme.spacing(0.625),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '56px',
  fontWeight: 700,
  lineHeight: '64px',
  textAlign: 'center',
  margin: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
    lineHeight: '36px',
    marginBottom: theme.spacing(2.5),
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  width: '732px',
  margin: '40px auto 0',
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: '44px',
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    width: '100%',
  },
}));

const SectionContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 2.5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5, 2.5),
  },
}));

const PlantillasGaleria = styled(Box)(({ theme }) => ({
  height: '583px',
  background: 'linear-gradient(90deg, rgba(151, 71, 255, 0.81) 0.49%, rgba(151, 71, 255, 0.60) 22.14%, rgba(46, 132, 235, 0.80) 48.71%, rgba(46, 132, 235, 0.61) 61.99%, rgba(46, 132, 235, 0.40) 75.77%, rgba(46, 132, 235, 0.20) 88.56%, rgba(46, 132, 235, 0.10) 98.4%)',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '18px',
  padding: theme.spacing(2.5),
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    padding: theme.spacing(2.5, 0),
  },
}));

const PlantillaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const PlantillaImage = styled('img')(({ theme }) => ({
  width: '435.768px',
  height: '245px',
  objectFit: 'cover',
  borderRadius: theme.spacing(1),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
  },
}));

const PlantillaSlider = styled(Box)(({ theme, translate }) => ({
  display: 'flex',
  transition: 'transform 0.3s ease',
  width: '100%',
  transform: `translateX(-${translate * 100}%)`,
}));

const PlantillaItemMobile = styled(Box)(({ theme }) => ({
  minWidth: '100%',
  width: '100%',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SliderControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1.25),
  marginTop: theme.spacing(2.5),
  position: 'relative',
  zIndex: 2,
}));

const SliderDot = styled(Box)(({ theme, active }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: active ? 'white' : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
}));

const TituloBotonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: theme.spacing(5, 25),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.between('md', 'lg')]: {
    padding: theme.spacing(5, 2.5),
    flexDirection: 'column',
    gap: theme.spacing(2.5),
    textAlign: 'center',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5, 6.25),
    flexFlow: 'column',
    gap: theme.spacing(2),
  },
}));

const CustomDesignGaleria = styled(Box)(({ theme }) => ({
  height: '478px',
  background: 'linear-gradient(90deg, rgba(117, 0, 255, 0.81) 0.49%, rgba(117, 0, 255, 0.60) 22.14%, rgba(71, 142, 229, 0.80) 48.71%, rgba(71, 142, 229, 0.61) 61.99%, rgba(71, 142, 229, 0.40) 75.77%, rgba(71, 142, 229, 0.20) 88.56%, rgba(71, 142, 229, 0.10) 98.4%)',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5),
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    padding: theme.spacing(2.5),
    flexFlow: 'column',
  },
}));

const DesignItem = styled(Box)(({ theme, position }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  ...(position === 'topLeft' && {
    position: 'absolute',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('md')]: {
      top: '120px',
      left: '0px',
      zIndex: 1,
      height: '150px',
    },
  }),
  ...(position === 'bottomRight' && {
    position: 'absolute',
    bottom: 0,
    right: 0,
    [theme.breakpoints.down('md')]: {
      bottom: '60px',
    },
  }),
  ...(position === 'mid' && {
    [theme.breakpoints.down('md')]: {
      height: '286px',
    },
  }),
}));

const DesignImage = styled('img')(({ theme, position }) => ({
  objectFit: 'cover',
  cursor: position === 'topLeft' || position === 'bottomRight' ? 'default' : 'pointer',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    ...(position === 'topLeft' && {
      height: '150px',
    }),
    ...(position === 'bottomRight' && {
      height: '150px',
    }),
  },
}));

const HoverContent = styled(Box)(({ theme, position, active }) => ({
  position: 'absolute',
  width: '477px',
  height: '305px',
  padding: '56.5px 38px',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease',
  zIndex: 10,
  backgroundColor: position === 'right' ? '#60A1EF' : '#B990FD',
  ...(position === 'right' && {
    left: 'calc(100% - 70px)',
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  ...(position === 'left' && {
    right: 'calc(100% - 70px)',
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(1.25),
    transform: 'none',
    opacity: active ? 1 : 0,
    visibility: active ? 'visible' : 'hidden',
    left: 0,
    right: 0,
    top: '200px',
  },
}));

const HoverContentText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '24px',
  lineHeight: '32px',
  color: theme.palette.text.primary,
  margin: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '24px',
  },
}));

const SoporteSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(5, 2.5),
  backgroundColor: 'rgba(119, 29, 250, 0.20)',
  height: '382px',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  border: 'none',
  borderRadius: '30px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('md')]: {
    width: '186px',
  },
}));

export default function DesarrolloWeb() {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeHover, setActiveHover] = useState(null);
  const totalSlides = 5;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((current) => (current + 1) % totalSlides);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleImageClick = (index) => {
    if (isMobile) {
      setActiveHover(activeHover === index ? null : index);
    }
  };

  // Desktop/Mobile conditional rendering for Plantillas gallery
  const renderPlantillasGallery = () => {
    if (!isMobile) {
      // Desktop view
      return (
          <PlantillasGaleria>
            <Box sx={{ display: 'flex', gap: '18px' }}>
              <PlantillaItem>
                <PlantillaImage src={imagenPlantilla01} alt="Plantilla web 1" />
              </PlantillaItem>
              <PlantillaItem>
                <PlantillaImage src={imagenPlantilla02} alt="Plantilla web 2" />
              </PlantillaItem>
              <PlantillaItem>
                <PlantillaImage src={imagenPlantilla03} alt="Plantilla web 3" />
              </PlantillaItem>
            </Box>
            <Box sx={{ display: 'flex', gap: '18px' }}>
              <PlantillaItem>
                <PlantillaImage src={imagenPlantilla04} alt="Plantilla web 4" />
              </PlantillaItem>
              <PlantillaItem>
                <PlantillaImage src={imagenPlantilla05} alt="Plantilla web 5" />
              </PlantillaItem>
            </Box>
          </PlantillasGaleria>
      );
    } else {
      // Mobile view
      return (
          <PlantillasGaleria>
            <PlantillaSlider translate={currentSlide}>
              <PlantillaItemMobile>
                <img src={imagenPlantilla01} alt="Plantilla web 1" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
              </PlantillaItemMobile>
              <PlantillaItemMobile>
                <img src={imagenPlantilla02} alt="Plantilla web 2" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
              </PlantillaItemMobile>
              <PlantillaItemMobile>
                <img src={imagenPlantilla03} alt="Plantilla web 3" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
              </PlantillaItemMobile>
              <PlantillaItemMobile>
                <img src={imagenPlantilla04} alt="Plantilla web 4" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
              </PlantillaItemMobile>
              <PlantillaItemMobile>
                <img src={imagenPlantilla05} alt="Plantilla web 5" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
              </PlantillaItemMobile>
            </PlantillaSlider>
            <SliderControls>
              {[...Array(totalSlides)].map((_, index) => (
                  <SliderDot
                      key={index}
                      active={currentSlide === index}
                      onClick={() => handleDotClick(index)}
                  />
              ))}
            </SliderControls>
          </PlantillasGaleria>
      );
    }
  };

  return (
      <Box>
        {/* Hero Section */}
        <HeroSection>
          <HeroBackground>
            <HeroImage
                src={imagenDesarrolloWeb}
                alt="Desarrollo Web GlobaliaTech"
            />
          </HeroBackground>

          <HeroTextContainer>
            <HeroTitle variant="h1">Nuestros servicios en Desarrollo Web</HeroTitle>
            <HeroSubtitle variant="h4">
              Creamos experiencias digitales únicas adaptadas a tus necesidades
            </HeroSubtitle>
          </HeroTextContainer>
        </HeroSection>

        {/* Description Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: { xs: '40px 20px', md: '80px 20px' } }}>
          <Container maxWidth="lg" sx={{ maxWidth: '1146px' }}>
            <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '24px', sm: '28px', md: '36px' },
                  fontWeight: 600,
                  mb: 5,
                  color: 'text.primary',
                  textAlign: { xs: 'center', md: 'left' },
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
            >
              ¿Qué es un sitio web, una web app y una sección?
            </Typography>
            <Typography
                sx={{
                  fontSize: { xs: '14px', md: '20px' },
                  lineHeight: { xs: '24px', md: '28px' },
                  fontWeight: { xs: 400, md: 600 },
                  color: 'text.primary',
                  textAlign: 'left',
                  pr: { xs: 0, md: '30px' },
                }}
            >
              La diferencia principal entre un sitio web y una aplicación web es
              su nivel de interacción. Un sitio web suele ser estático y está
              diseñado para mostrar información, como datos de contacto, productos
              o servicios. <br />
              En cambio, una aplicación web es dinámica e interactiva, permitiendo
              acciones como comprar en línea, consultar el saldo de una cuenta
              bancaria o buscar y filtrar productos. <br />
              Por otro lado, las secciones en un sitio o aplicación web agrupan
              contenido relacionado y cumplen una función tanto en el diseño como
              en la organización de la información, ayudando a que la experiencia
              del usuario sea más clara y ordenada. <br />
              Queremos compartir esta información contigo para que conozcas todas
              las opciones que tenemos para ti.
            </Typography>
          </Container>
        </Box>

        {/* Plantillas Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%' }}>
            <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '24px', sm: '24px', md: '36px' },
                  fontWeight: 600,
                  mb: 5,
                  color: 'text.primary',
                  textAlign: { xs: 'center', md: 'left' },
                  ml: { xs: 0, md: '195px' },
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
            >
              Diseñemos juntos desde plantillas pre-realizadas
            </Typography>
            {renderPlantillasGallery()}
            <TituloBotonContainer>
              <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '20px', md: '24px' },
                    fontWeight: 600,
                    color: 'text.primary',
                    lineHeight: { xs: '28px', md: 'inherit' },
                    textAlign: { xs: 'center', md: 'left' },
                    m: 0,
                  }}
              >
                Cuando nos contrates te mostraremos más plantillas para que elijas
              </Typography>
              <PrimaryButton>
                Quiero saber más
              </PrimaryButton>
            </TituloBotonContainer>
          </Box>
        </Box>

        {/* Additional Description Section */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: '0 20px', md: '40px 20px' },
          backgroundColor: 'background.default'
        }}>
          <Container
              maxWidth="lg"
              sx={{
                maxWidth: '1146px',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 0, md: '60px' }
              }}
          >
            <Box sx={{ padding: { xs: 0, md: '40px' } }}>
              <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '24px', sm: '28px', md: '36px' },
                    fontWeight: 600,
                    mb: { xs: 2, md: 3.75 },
                    color: 'text.primary',
                    textAlign: { xs: 'center', md: 'left' },
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
              >
                Imagina tu producto y lo diseñamos juntos (personalizado)
              </Typography>
              <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '18px' },
                    lineHeight: 1.8,
                    fontWeight: { xs: 400, md: 500 },
                    color: 'text.primary',
                    pr: { xs: 0, md: '60px' },
                  }}
              >
                Cuando diseñamos de manera personalizada, tenemos en cuenta tus
                necesidades, incluyendo el contenido, diseño y varios aspectos
                más. Creamos juntos desde cero, sin usar plantillas prediseñadas.
                Por ello, el resultado final será único, diferenciándolo de tu
                competencia y mejorando la experiencia de las personas usuarias
                para que fortalezcas las relaciones con tu público y clientela.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Custom Design Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexFlow: 'column' }}>
          <CustomDesignGaleria>
            <DesignItem position="topLeft">
              <DesignImage src={imagenCustomDesign01} alt="Diseño personalizado 1" position="topLeft" />
            </DesignItem>
            <DesignItem position="mid">
              <DesignImage
                  src={imagenCustomDesign02}
                  alt="Diseño personalizado 2"
                  position="mid"
                  onClick={() => handleImageClick(1)}
              />
              <HoverContent position="right" active={activeHover === 1}>
                <HoverContentText>
                  Foredu es una app dedicada a la educación permitiendo
                  administrar de manera fácil y ágil las actividades escolares
                  de las personas que estudian
                </HoverContentText>
              </HoverContent>
            </DesignItem>
            <DesignItem position="mid">
              <DesignImage
                  src={imagenCustomDesign03}
                  alt="Diseño personalizado 3"
                  position="mid"
                  onClick={() => handleImageClick(2)}
              />
              <HoverContent position="left" active={activeHover === 2}>
                <HoverContentText>
                  Petopia es una web app que permite generar un QR para la
                  identificación de la mascota, además de tener una historia de
                  salud, recordatorios de vacunaciones y visitas con veterinario
                </HoverContentText>
              </HoverContent>
            </DesignItem>
            <DesignItem position="bottomRight">
              <DesignImage src={imagenCustomDesign04} alt="Diseño personalizado 4" position="bottomRight" />
            </DesignItem>
          </CustomDesignGaleria>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: { xs: '40px 50px', md: '40px 200px' },
            backgroundColor: 'background.default',
          }}>
            <PrimaryButton>
              Quiero saber más
            </PrimaryButton>
          </Box>
        </Box>

        {/* Final Description Section */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 20px',
          backgroundColor: 'background.default',
        }}>
          <Box sx={{
            padding: { xs: 0, md: '40px' },
            textAlign: 'center'
          }}>
            <Typography
                sx={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: 600,
                  width: { xs: '100%', md: '722px' },
                  padding: { xs: 0, md: '0 60px 0 0' },
                }}
            >
              Globalia Tech ofrece una amplia gama de servicios tecnológicos
              diseñados para ayudarte a alcanzar tus objetivos de negocio con
              soluciones innovadoras y personalizadas
            </Typography>
          </Box>
        </Box>

        {/* Soporte Section */}
        <SoporteSection>
          <Box sx={{
            padding: { xs: 0, md: '40px' },
            textAlign: 'center'
          }}>
            <Typography
                variant="h2"
                sx={{
                  fontSize: '36px',
                  fontWeight: 600,
                  mb: 2.5,
                  color: 'text.primary',
                }}
            >
              SOPORTE GLOBALIA TECH
            </Typography>
            <Typography
                sx={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: 600,
                  width: { xs: '100%', md: '722px' },
                  padding: { xs: 0, md: '0 60px 0 0' },
                }}
            >
              Si ya eres nuestro cliente, puedes comunicarte con nosotros por
              cualquier duda o inconveniente, a la brevedad te estaremos
              respondiendo.
              <br /> <br />
              Nuestro mail:
              <br />
              <a href="mailto:info@globalia-tech.com" style={{ color: theme.palette.primary.main }}>
                info@globalia-tech.com
              </a>
            </Typography>
          </Box>
        </SoporteSection>
      </Box>
  );
}