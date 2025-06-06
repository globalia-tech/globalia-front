import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomDesignGallery = ({ 
  designs, 
  isMobile, 
  activeHover, 
  onHoverChange 
}) => {
  // Hook para detectar el tamaño de pantalla de forma más granular
  const [screenSize, setScreenSize] = React.useState('desktop');
  
  React.useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const GalleryContainer = styled(Box)(({ theme }) => ({
    minHeight: '400px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(270deg, rgba(151, 71, 255, 0.81) 4.23%, rgba(151, 71, 255, 0.60) 23.23%, rgba(46, 132, 235, 0.80) 46.54%, rgba(46, 132, 235, 0.61) 58.2%, rgba(46, 132, 235, 0.40) 70.29%, rgba(46, 132, 235, 0.20) 81.51%, rgba(46, 132, 235, 0.10) 90.15%)',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'visible',
    // Responsive padding que se adapta mejor a cada tamaño
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(3),
      minHeight: '350px',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      minHeight: '500px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
      minHeight: '400px',
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
    position: 'relative',
    zIndex: 1,
    // Responsive gaps que se ajustan progresivamente
    [theme.breakpoints.down('lg')]: {
      gap: theme.spacing(6),
      maxWidth: '900px',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: theme.spacing(4),
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(3),
    },
  }));

  const DeviceSet = styled(Box)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    zIndex: 2,
    // En desktop, permitimos que el hover eleve el z-index
    '&:hover': {
      transform: screenSize === 'desktop' ? 'scale(1.02)' : 'scale(1.01)',
      zIndex: screenSize === 'desktop' ? 10 : 2,
    },
    // Responsive sizing para diferentes pantallas
    [theme.breakpoints.down('lg')]: {
      '&:hover': {
        transform: 'scale(1.01)',
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '320px',
    },
  }));

  const DeviceWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  }));

  const LaptopContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 3, // Base z-index para laptops
    '& img': {
      width: '560px',
      height: 'auto', // Cambio importante: altura automática para mejor responsividad
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      display: 'block', // Evita espacios en blanco debajo de la imagen
      // Sistema de escalado progresivo y suave
      [theme.breakpoints.down('lg')]: {
        width: '480px',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        maxWidth: '400px',
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: '320px',
        borderRadius: '8px',
      },
    },
  }));

  const MobileContainer = styled(Box)(({ theme, position }) => ({
    position: 'absolute',
    top: '30%',
    // Z-index alto para que aparezca "delante" de la laptop como solicitas
    zIndex: 4, // Más alto que la laptop para crear el efecto de superposición
    // Posicionamiento responsivo que se ajusta según el tamaño de pantalla
    ...(position === 'left' && {
      left: '-80px',
      [theme.breakpoints.down('lg')]: {
        left: '-60px',
      },
      [theme.breakpoints.down('md')]: {
        left: '-40px',
      },
      [theme.breakpoints.down('sm')]: {
        left: '-25px',
      },
    }),
    ...(position === 'right' && {
      right: '-80px',
      [theme.breakpoints.down('lg')]: {
        right: '-60px',
      },
      [theme.breakpoints.down('md')]: {
        right: '-40px',
      },
      [theme.breakpoints.down('sm')]: {
        right: '-25px',
      },
    }),
    '& img': {
      width: '180px',
      height: 'auto',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      // Añadimos una sombra sutil para reforzar el efecto de profundidad
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      // Escalado progresivo para diferentes tamaños de pantalla
      [theme.breakpoints.down('lg')]: {
        width: '150px',
      },
      [theme.breakpoints.down('md')]: {
        width: '120px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90px',
        borderRadius: '6px',
      },
    },
  }));

  // Portal de hover solo para desktop
  const HoverPortal = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    pointerEvents: 'none',
    overflow: 'visible',
    // Solo se muestra en desktop
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  // Hover content completamente responsivo con diferentes comportamientos por tamaño
  const HoverContent = styled(Box)(({ theme, position, active, deviceSetRect, isDesktop }) => {
    const backgroundColor = position === 'left' ? '#60A1EF' : '#B990FD';
    const hoverPosition = position === 'left' ? 'right' : 'left';
    
    // Función para calcular posicionamiento absoluto en desktop
    const getDesktopPosition = () => {
      if (!deviceSetRect || !isDesktop) return {};
      
      const baseTop = deviceSetRect.top + (deviceSetRect.height / 2);
      const spacing = 20; // Espacio entre dispositivo y hover
      
      if (hoverPosition === 'right') {
        return {
          top: baseTop,
          left: deviceSetRect.right + spacing,
          transform: active 
            ? 'translateY(-50%) translateX(0) scale(1)'
            : 'translateY(-50%) translateX(-30px) scale(0.95)',
        };
      } else {
        return {
          top: baseTop,
          right: `calc(100% - ${deviceSetRect.left}px + ${spacing}px)`,
          transform: active 
            ? 'translateY(-50%) translateX(0) scale(1)'
            : 'translateY(-50%) translateX(30px) scale(0.95)',
        };
      }
    };
    
    if (isDesktop) {
      // Comportamiento para desktop (usando portal)
      return {
        position: 'absolute',
        width: '320px',
        padding: '24px',
        borderRadius: '16px',
        backgroundColor: backgroundColor,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        zIndex: 1,
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden',
        pointerEvents: 'none',
        ...getDesktopPosition(),
        // Responsive para desktop grande vs laptop
        [theme.breakpoints.down('lg')]: {
          width: '280px',
          padding: '20px',
        },
      };
    } else {
      // Comportamiento para mobile/tablet (debajo del dispositivo)
      return {
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        marginTop: theme.spacing(3),
        padding: '20px',
        borderRadius: '16px',
        backgroundColor: backgroundColor,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: active ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.98)',
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden',
        maxHeight: active ? '200px' : '0',
        overflow: 'hidden',
        // Responsive para diferentes tamaños móviles
        [theme.breakpoints.down('sm')]: {
          padding: '16px',
          marginTop: theme.spacing(2),
          maxWidth: '320px',
        },
      };
    }
  });

  const HoverArrow = styled(Box)(({ theme, position }) => {
    const hoverPosition = position === 'left' ? 'right' : 'left';
    const arrowColor = position === 'left' ? '#60A1EF' : '#B990FD';
    
    return {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      zIndex: 2,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      ...(hoverPosition === 'right' && {
        right: '100%',
        borderTop: '12px solid transparent',
        borderBottom: '12px solid transparent',
        borderRight: `12px solid ${arrowColor}`,
      }),
      ...(hoverPosition === 'left' && {
        left: '100%',
        borderTop: '12px solid transparent',
        borderBottom: '12px solid transparent',
        borderLeft: `12px solid ${arrowColor}`,
      }),
      // Escalado de flecha para pantallas más pequeñas
      [theme.breakpoints.down('lg')]: {
        ...(hoverPosition === 'right' && {
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderRight: `10px solid ${arrowColor}`,
        }),
        ...(hoverPosition === 'left' && {
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderLeft: `10px solid ${arrowColor}`,
        }),
      },
    };
  });

  const HoverText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: 1.6,
    color: 'white',
    textAlign: 'center',
    margin: 0,
    fontWeight: 500,
    // Texto responsivo
    [theme.breakpoints.down('lg')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: 1.5,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
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
    // CTA responsivo
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
      padding: '12px 24px',
      fontSize: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 20px',
      fontSize: '14px',
    },
  }));

  // Sistema de referencias y tracking de posiciones (solo para desktop)
  const [deviceRects, setDeviceRects] = React.useState({});
  const deviceRefs = React.useRef({});
  const isDesktop = screenSize === 'desktop';

  React.useEffect(() => {
    if (!isDesktop) return; // Solo necesario en desktop
    
    const updatePositions = () => {
      const newRects = {};
      Object.keys(deviceRefs.current).forEach(key => {
        const element = deviceRefs.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = element.closest('[data-gallery-container]')?.getBoundingClientRect();
          if (containerRect) {
            newRects[key] = {
              top: rect.top - containerRect.top,
              left: rect.left - containerRect.left,
              right: rect.right - containerRect.left,
              bottom: rect.bottom - containerRect.top,
              width: rect.width,
              height: rect.height,
            };
          }
        }
      });
      setDeviceRects(newRects);
    };

    updatePositions();
    const debounceUpdate = setTimeout(updatePositions, 100); // Debounce para performance
    window.addEventListener('resize', updatePositions);
    
    return () => {
      clearTimeout(debounceUpdate);
      window.removeEventListener('resize', updatePositions);
    };
  }, [isDesktop]);

  // Crear pares de dispositivos
  const devicePairs = [
    {
      laptop: designs.find(d => d.position === 'mid' && d.alt === "Diseño personalizado 2"),
      mobile: designs.find(d => d.position === 'topLeft'),
      position: 'left',
      laptopIndex: designs.findIndex(d => d.position === 'mid' && d.alt === "Diseño personalizado 2")
    },
    {
      laptop: designs.find(d => d.position === 'mid' && d.alt === "Diseño personalizado 3"),
      mobile: designs.find(d => d.position === 'bottomRight'),
      position: 'right',
      laptopIndex: designs.findIndex(d => d.position === 'mid' && d.alt === "Diseño personalizado 3")
    }
  ];

  return (
    <Box>
      <GalleryContainer data-gallery-container>
        <DevicesGrid>
          {devicePairs.map((pair, index) => {
            if (!pair.laptop || !pair.mobile) return null;
            
            const isActive = activeHover === pair.laptopIndex;
            
            return (
              <Box key={index}>
                <DeviceSet
                  ref={el => deviceRefs.current[`device-${index}`] = el}
                  onMouseEnter={() => onHoverChange(pair.laptopIndex)}
                  onMouseLeave={() => onHoverChange(null)}
                >
                  <DeviceWrapper>
                    {/* Laptop */}
                    <LaptopContainer>
                      <img 
                        src={pair.laptop.src} 
                        alt={pair.laptop.alt}
                      />
                    </LaptopContainer>
                    
                    {/* Mobile Device - ahora con z-index más alto para aparecer "delante" */}
                    <MobileContainer position={pair.position}>
                      <img 
                        src={pair.mobile.src} 
                        alt={pair.mobile.alt}
                      />
                    </MobileContainer>
                  </DeviceWrapper>
                </DeviceSet>
                
                {/* Hover Content para mobile/tablet - aparece debajo */}
                {!isDesktop && (
                  <HoverContent
                    position={pair.position}
                    active={isActive}
                    isDesktop={false}
                  >
                    <HoverText>
                      {pair.laptop.hoverText}
                    </HoverText>
                  </HoverContent>
                )}
              </Box>
            );
          })}
        </DevicesGrid>

        {/* Portal de Hover solo para Desktop */}
        {isDesktop && (
          <HoverPortal>
            {devicePairs.map((pair, index) => {
              if (!pair.laptop || !pair.mobile) return null;
              
              const isActive = activeHover === pair.laptopIndex;
              const deviceRect = deviceRects[`device-${index}`];
              
              return (
                <HoverContent
                  key={`hover-${index}`}
                  position={pair.position}
                  active={isActive}
                  deviceSetRect={deviceRect}
                  isDesktop={true}
                >
                  <HoverArrow position={pair.position} />
                  <HoverText>
                    {pair.laptop.hoverText}
                  </HoverText>
                </HoverContent>
              );
            })}
          </HoverPortal>
        )}

        {/* Decorative Background Elements - también responsivos */}
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
            // Elementos decorativos más pequeños en móvil
            [theme => theme.breakpoints.down('md')]: {
              width: '60px',
              height: '60px',
              filter: 'blur(25px)',
            },
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
            [theme => theme.breakpoints.down('md')]: {
              width: '80px',
              height: '80px',
              filter: 'blur(30px)',
            },
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