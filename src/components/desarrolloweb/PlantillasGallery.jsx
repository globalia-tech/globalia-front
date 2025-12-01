import React from 'react';
import { Box, styled } from '@mui/material';

const PlantillasGallery = ({ 
  plantillas, 
  isMobile, 
  currentSlide, 
  onSlideChange 
}) => {
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

  if (!isMobile) {
    return (
      <PlantillasGaleria>
        <Box sx={{ display: 'flex', gap: '18px' }}>
          {plantillas.slice(0, 3).map((img, index) => (
            <PlantillaItem key={index}>
              <PlantillaImage src={img} alt={`Plantilla web ${index + 1}`} />
            </PlantillaItem>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: '18px' }}>
          {plantillas.slice(3, 5).map((img, index) => (
            <PlantillaItem key={index}>
              <PlantillaImage src={img} alt={`Plantilla web ${index + 4}`} />
            </PlantillaItem>
          ))}
        </Box>
      </PlantillasGaleria>
    );
  }

  return (
    <PlantillasGaleria>
      <PlantillaSlider translate={currentSlide}>
        {plantillas.map((img, index) => (
          <PlantillaItemMobile key={index}>
            <img 
              src={img} 
              alt={`Plantilla web ${index + 1}`} 
              style={{ 
                width: '100%', 
                maxWidth: '300px', 
                height: 'auto', 
                borderRadius: '8px' 
              }} 
            />
          </PlantillaItemMobile>
        ))}
      </PlantillaSlider>
      <SliderControls>
        {plantillas.map((_, index) => (
          <SliderDot
            key={index}
            active={currentSlide === index}
            onClick={() => onSlideChange(index)}
          />
        ))}
      </SliderControls>
    </PlantillasGaleria>
  );
};

export default PlantillasGallery;
