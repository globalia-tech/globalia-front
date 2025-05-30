import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import PrimaryButton, { ArrowIcon } from '../common/PrimaryButton.jsx';
import { Link } from 'react-router-dom';

const CustomDesignGallery = ({ 
  designs, 
  isMobile, 
  activeHover, 
  onHoverChange 
}) => {
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
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      flexFlow: 'column',
      overflow: 'hidden'
    }}>
      <CustomDesignGaleria>
        {designs.map((design, index) => (
          <DesignItem key={index} position={design.position}>
            <DesignImage 
              src={design.src}
              alt={design.alt}
              position={design.position}
              height={design.position === 'mid' ? undefined : 353}
              onClick={() => design.position === 'mid' && onHoverChange(index)}
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: design.position === 'mid' ? 'scale(1.03)' : 'scale(1.05)',
                  filter: design.position === 'mid' ? 'brightness(1.1)' : 'none',
                  zIndex: 2
                }
              }}
            />
            
            {design.position === 'mid' && (
              <HoverContent 
                position={index === 1 ? 'right' : 'left'}
                active={activeHover === index}
                sx={{
                  position: 'absolute',
                  transition: 'all 0.4s ease-in-out',
                  backgroundColor: 'rgba(124, 58, 237, 0.95)',
                  borderRadius: '12px',
                  padding: { xs: '16px', md: '24px' },
                  backdropFilter: 'blur(10px)',
                  
                  // Desktop
                  '@media (min-width: 768px)': {
                    top: '50%',
                    [index === 1 ? 'left' : 'right']: '105%',
                    transform: activeHover === index 
                      ? 'translateY(-50%) translateX(0)' 
                      : `translateY(-50%) translateX(${index === 1 ? '-20px' : '20px'})`,
                    opacity: activeHover === index ? 1 : 0,
                    visibility: activeHover === index ? 'visible' : 'hidden',
                    width: '280px',
                    maxWidth: '280px'
                  },
                  
                  // Mobile
                  '@media (max-width: 767px)': {
                    top: '105%',
                    left: '0',
                    right: '0',
                    transform: activeHover === index ? 'translateY(0)' : 'translateY(-10px)',
                    opacity: activeHover === index ? 1 : 0,
                    visibility: activeHover === index ? 'visible' : 'hidden',
                    width: '100%',
                    maxWidth: 'none'
                  }
                }}
              >
                <HoverContentText sx={{
                  color: 'white',
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: 1.5,
                  fontWeight: 400
                }}>
                  {design.hoverText}
                </HoverContentText>
              </HoverContent>
            )}
          </DesignItem>
        ))}
      </CustomDesignGaleria>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: { 
          xs: '30px 20px', 
          sm: '35px 40px', 
          md: '40px 100px',
          lg: '40px 200px' 
        },
        backgroundColor: 'background.default',
      }}>
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
      </Box>
    </Box>
  );
};
export default CustomDesignGallery;
