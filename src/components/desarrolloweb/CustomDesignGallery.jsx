import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomDesignGallery = ({ 
  designs, 
  isMobile, 
  activeHover, 
  onHoverChange 
}) => {
  const GalleryContainer = styled(Box)(({ theme }) => ({
    minHeight: '400px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(270deg, rgba(151, 71, 255, 0.81) 4.23%, rgba(151, 71, 255, 0.60) 23.23%, rgba(46, 132, 235, 0.80) 46.54%, rgba(46, 132, 235, 0.61) 58.2%, rgba(46, 132, 235, 0.40) 70.29%, rgba(46, 132, 235, 0.20) 81.51%, rgba(46, 132, 235, 0.10) 90.15%)',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      minHeight: '500px',
    },
  }));

  const DevicesGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(8),
    maxWidth: '1200px',
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: theme.spacing(4),
    },
  }));

  const DeviceSet = styled(Box)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '350px',
    },
  }));

  const LaptopContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    '& img': {
      width: '560px',
      height: '400',
      borderRadius: '12px',
      //boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        maxWidth: '350px',
      },
    },
  }));

  const MobileContainer = styled(Box)(({ theme, position }) => ({
    position: 'absolute',
    top: '30%',
    zIndex: 2,
    ...(position === 'left' && {
      left: '-80px',
      [theme.breakpoints.down('md')]: {
        left: '-30px',
      },
    }),
    ...(position === 'right' && {
      right: '-80px',
      [theme.breakpoints.down('md')]: {
        right: '-30px',
      },
    }),
    '& img': {
      width: '180px',
      height: 'auto',
      borderRadius: '8px',
      //boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
      transition: 'all 0.3s ease',
      [theme.breakpoints.down('md')]: {
        width: '80px',
      },
    },
  }));

  const HoverContent = styled(Box)(({ theme, position, active }) => ({
    position: 'absolute',
    width: '320px',
    padding: '24px',
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
    zIndex: 10,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Desktop positioning
    [theme.breakpoints.up('md')]: {
      top: '50%',
      ...(position === 'left' && {
        right: '105%',
        transform: active 
          ? 'translateY(-50%) translateX(0)' 
          : 'translateY(-50%) translateX(20px)',
      }),
      ...(position === 'right' && {
        left: '105%',
        transform: active 
          ? 'translateY(-50%) translateX(0)' 
          : 'translateY(-50%) translateX(-20px)',
      }),
      opacity: active ? 1 : 0,
      visibility: active ? 'visible' : 'hidden',
    },
    
    // Mobile positioning
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      width: '100%',
      marginTop: theme.spacing(2),
      transform: active ? 'translateY(0)' : 'translateY(-10px)',
      opacity: active ? 1 : 0,
      visibility: active ? 'visible' : 'hidden',
      maxHeight: active ? '200px' : '0',
      overflow: 'hidden',
    },
  }));

  const HoverArrow = styled(Box)(({ theme, position }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    ...(position === 'left' && {
      left: '100%',
      borderTop: '12px solid transparent',
      borderBottom: '12px solid transparent',
      borderLeft: '12px solid rgba(255, 255, 255, 0.95)',
    }),
    ...(position === 'right' && {
      right: '100%',
      borderTop: '12px solid transparent',
      borderBottom: '12px solid transparent',
      borderRight: '12px solid rgba(255, 255, 255, 0.95)',
    }),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const HoverText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: 1.6,
    color: theme.palette.text.primary,
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  }));

  const CTAButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(4),
    padding: '14px 32px',
    borderRadius: '50px',
    background: 'linear-gradient(45deg, #7C3AED 30%, #3B82F6 90%)',
    color: 'white',
    fontSize: '16px',
    fontWeight: 600,
    textTransform: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(124, 58, 237, 0.4)',
    },
  }));

  // Crear pares de dispositivos: laptop con su móvil correspondiente
  const devicePairs = [
    {
      laptop: designs.find(d => d.position === 'mid' && d.alt === "Diseño personalizado 2"), // customdesign02
      mobile: designs.find(d => d.position === 'topLeft'), // customdesign01
      position: 'left',
      laptopIndex: designs.findIndex(d => d.position === 'mid' && d.alt === "Diseño personalizado 2")
    },
    {
      laptop: designs.find(d => d.position === 'mid' && d.alt === "Diseño personalizado 3"), // customdesign03
      mobile: designs.find(d => d.position === 'bottomRight'), // customdesign04
      position: 'right',
      laptopIndex: designs.findIndex(d => d.position === 'mid' && d.alt === "Diseño personalizado 3")
    }
  ];

  return (
    <Box>
    <GalleryContainer>
      <DevicesGrid>
        {devicePairs.map((pair, index) => {
          if (!pair.laptop || !pair.mobile) return null;
          
          const isActive = activeHover === pair.laptopIndex;
          
          return (
            <DeviceSet
              key={index}
              onMouseEnter={() => !isMobile && onHoverChange(pair.laptopIndex)}
              onMouseLeave={() => !isMobile && onHoverChange(null)}
              onClick={() => isMobile && onHoverChange(pair.laptopIndex)}
            >
              {/* Laptop */}
              <LaptopContainer>
                <img 
                  src={pair.laptop.src} 
                  alt={pair.laptop.alt}
                />
              </LaptopContainer>
              
              {/* Mobile Device */}
              <MobileContainer position={pair.position}>
                <img 
                  src={pair.mobile.src} 
                  alt={pair.mobile.alt}
                />
              </MobileContainer>
              
              {/* Hover Content */}
              <HoverContent 
                position={pair.position}
                active={isActive}
              >
                <HoverArrow position={pair.position} />
                <HoverText>
                  {pair.laptop.hoverText}
                </HoverText>
              </HoverContent>
            </DeviceSet>
          );
        })}
      </DevicesGrid>

     
      
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />
    </GalleryContainer>
     {/* CTA Button */}
     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
  <CTAButton
    variant="contained"
    component={Link}
    to="/contactenos"
    endIcon={
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path 
          d="M17 8l4 4m0 0l-4 4m4-4H3" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    }
  >
    Quiero saber más
  </CTAButton>
</Box>

   
    </Box>
  );
};

export default CustomDesignGallery;