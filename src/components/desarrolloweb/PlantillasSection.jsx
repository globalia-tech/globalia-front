import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import PrimaryButton, { ArrowIcon } from '../common/PrimaryButton.jsx';
import { Link } from 'react-router-dom';


import PlantillasGallery from './PlantillasGallery';const PlantillasSection = ({ 
  title, 
  subtitle, 
  buttonText, 
  plantillas,
  isMobile,
  currentSlide,
  onSlideChange
}) => {
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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '-100px' }}>
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
          {title}
        </Typography>
        
        <PlantillasGallery 
          plantillas={plantillas}
          isMobile={isMobile}
          currentSlide={currentSlide}
          onSlideChange={onSlideChange}
        />
        
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
            {subtitle}
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
                    Quiero saber más
                </PrimaryButton>
        </TituloBotonContainer>
      </Box>
    </Box>
  );
};

export default PlantillasSection;