import { Box, Typography, Button, Container, useMediaQuery, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Import assets
import imagenSocialMedia from "../assets/social-media.png";
import imagenSocialMediaMobile from "../assets/social-media-mobile.png";
import imagenCommunityManager from "../assets/community-manager-service.png";
import imagenRedesVideo01 from "../assets/redes-video01.mp4";
import imagenRedesImg01 from "../assets/redes-img01.jpg";

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '729px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '100vh !important',
  }
}));

const HeroBackground = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'relative',
});

const HeroImage = styled('img')(({ theme, isMobile }) => ({
  display: isMobile ? 'none' : 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  [theme.breakpoints.down('md')]: {
    display: isMobile ? 'block' : 'none',
  }
}));

const HeroTextContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: '710px',
  zIndex: 1,
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    left: '50%',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 20px',
    left: '55%',
    textAlign: 'center',
    marginTop: '-30%',
  }
}));

const SectionContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '80px 20px 40px 20px',
  [theme.breakpoints.down('md')]: {
    padding: '40px 20px',
  }
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: '1146px',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    padding: '0px',
  }
}));

const GradientSubtitle = styled(Box)(({ theme }) => ({
  width: '806px',
  height: '67px',
  background: 'linear-gradient(90deg, #1A1E29 0%, #771DFA 29.5%, #2E84EB 68.5%, #01C2E1 93%)',
  padding: '16px',
  borderRadius: '4px',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    padding: '10px 0',
  }
}));

const CTASection = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '316px',
  background: 'linear-gradient(180deg, rgba(1, 194, 225, 0.50) 0.5%, #01C2E1 28%, #1A1E29 100%)',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    height: 'auto',
    padding: '40px 0',
  },
  [theme.breakpoints.down('md')]: {
    padding: '20px 0',
  }
}));

const CTAContainer = styled(Box)({
  width: '100%',
  height: '100%',
  maxWidth: '1146px',
  margin: '0 auto',
  position: 'relative',
});

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.down('lg')]: {
    position: 'relative',
    top: 0,
    padding: '20px',
  }
}));

const ResponsiveImage = styled('img')(({ theme }) => ({
  width: '649px',
  height: '338px',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '649px',
    height: 'auto',
  }
}));

const VideoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '18px',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '0 20px',
  }
}));

const VideoItem = styled('video')(({ theme }) => ({
  width: '649px',
  height: '338px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '649px',
    height: 'auto',
    aspectRatio: '16/9',
  }
}));

const ImageItem = styled('img')(({ theme }) => ({
  width: '649px',
  height: '338px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '649px',
    height: 'auto',
    aspectRatio: '16/9',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '300px',
  }
}));

const Spacer = styled(Box)({
  height: '206px',
});

export default function SocialMedia() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <>
        <HeroSection>
          <HeroBackground>
            <HeroImage
                src={imagenSocialMedia}
                alt="Social Media GlobaliaTech"
                isMobile={false}
            />
            <HeroImage
                src={imagenSocialMediaMobile}
                alt="Social Media GlobaliaTech Mobile"
                isMobile={true}
            />
          </HeroBackground>

          <HeroTextContainer>
            <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '28px', sm: '32px', md: '56px' },
                  lineHeight: { xs: '36px', sm: '40px', md: '64px' },
                  textAlign: 'center',
                  margin: { xs: '40px auto 0', md: 0 },
                  width: { xs: '80%', md: 'auto' },
                  color: 'black',
                }}
            >
              Nuestros servicios en Redes Sociales
            </Typography>
            <Typography
                variant="h2"
                sx={{
                  width: { xs: '80%', md: '732px' },
                  margin: { xs: '20px auto 0', md: '40px auto 0' },
                  fontSize: { xs: '20px', sm: '24px', md: '36px' },
                  fontWeight: 600,
                  lineHeight: { xs: '28px', sm: '32px', md: '44px' },
                  textAlign: 'center',
                  color: 'black',
                }}
            >
              Facilitamos que las personas usuarias conozcan tu marca a través de
              las redes sociales y logren su fidelización
            </Typography>
          </HeroTextContainer>
        </HeroSection>

        <SectionContainer>
          <ContentContainer>
            <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '28px', md: '36px' },
                  fontWeight: 600,
                  marginBottom: '40px',
                  color: 'text.primary',
                  textAlign: 'center',
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  lineHeight: { xs: '36px', md: 'inherit' },
                }}
            >
              Social Media
            </Typography>
            <GradientSubtitle>
              <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '18px', sm: '28px', md: '24px' },
                    fontWeight: 600,
                    color: 'white',
                    textAlign: 'left',
                    margin: 0,
                    lineHeight: { xs: '28px', md: '32px' },
                  }}
              >
                Servicios de Community <Box component="span" sx={{ color: { xs: 'black', md: 'white' } }}>Manager</Box>
              </Typography>
            </GradientSubtitle>
            <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '16px', md: '20px' },
                  lineHeight: { xs: '22px', sm: '24px', md: '28px' },
                  fontWeight: 600,
                  color: 'text.primary',
                  textAlign: 'left',
                  maxWidth: '1068px',
                  marginBottom: 0,
                  padding: { xs: '0 20px', md: 0 },
                }}
            >
              Gestionamos la presencia online de tu marca a través de diferentes
              canales, trazando estrategias de acuerdo a los delineamientos de la
              misma. Además, te ayudamos a definir la identidad corporativa,
              marcar los objetivos, elegir las redes sociales, establecer pautas,
              crear una imagen de tu marca y más
            </Typography>
          </ContentContainer>
        </SectionContainer>

        <CTASection>
          <CTAContainer>
            <ImageContainer>
              <ResponsiveImage
                  src={imagenCommunityManager}
                  alt="Call to action social media"
              />
              <StyledButton>
                Quiero saber más
              </StyledButton>
            </ImageContainer>
          </CTAContainer>
        </CTASection>

        <SectionContainer sx={{ pt: { xs: '40px', md: '238px' } }}>
          <ContentContainer>
            <GradientSubtitle>
              <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '18px', sm: '28px', md: '24px' },
                    fontWeight: 600,
                    color: 'white',
                    textAlign: 'left',
                    margin: 0,
                    lineHeight: { xs: '28px', md: '32px' },
                  }}
              >
                Creación de <Box component="span" sx={{ color: { xs: 'black', md: 'white' } }}>imágenes y videos</Box> publicitarios para{" "}
                <Box component="span" sx={{ color: { xs: 'black', md: 'white' } }}>Redes Sociales</Box>
              </Typography>
            </GradientSubtitle>
            <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '16px', md: '20px' },
                  lineHeight: { xs: '22px', sm: '24px', md: '28px' },
                  fontWeight: 600,
                  color: 'text.primary',
                  textAlign: 'left',
                  maxWidth: '1068px',
                  marginBottom: 0,
                  padding: { xs: '0 20px', md: 0 },
                }}
            >
              Generamos ideas para el contenido de tus redes sociales y lo
              desarrollamos para establecer vínculos y relaciones con tu audiencia
            </Typography>
          </ContentContainer>
        </SectionContainer>

        <CTASection className="videos-cta">
          <CTAContainer>
            <ImageContainer>
              <VideoWrapper>
                <VideoItem controls muted loop playsInline>
                  <source src={imagenRedesVideo01} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </VideoItem>
                <ImageItem
                    src={imagenRedesImg01}
                    alt="Call to action social media"
                />
              </VideoWrapper>
              <StyledButton>
                Quiero saber más
              </StyledButton>
            </ImageContainer>
          </CTAContainer>
        </CTASection>
        <Spacer />
      </>
  );
}