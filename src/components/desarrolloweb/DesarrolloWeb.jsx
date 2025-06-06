import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

// Componentes
import HeroSection from './HeroSection';
import DescriptionSection from './DescriptionSection';
import PlantillasSection from './PlantillasSection';
import AdditionalDescriptionSection from './AdditionalDescriptionSection';
import CustomDesignGallery from './CustomDesignGallery';
import FinalDescriptionSection from './FinalDescriptionSection';
import SoporteSection from './SoporteSection';

// Importación de imágenes
import imagenDesarrolloWeb from "../../assets/desarrollo-web.png";
import imagenPlantilla01 from "../../assets/plantilla01.png";
import imagenPlantilla02 from "../../assets/plantilla02.png";
import imagenPlantilla03 from "../../assets/plantilla03.png";
import imagenPlantilla04 from "../../assets/plantilla04.png";
import imagenPlantilla05 from "../../assets/plantilla05.png";
import imagenCustomDesign01 from "../../assets/customdesign01.png";
import imagenCustomDesign02 from "../../assets/customdesign02.png";
import imagenCustomDesign03 from "../../assets/customdesign03.png";
import imagenCustomDesign04 from "../../assets/customdesign04.png";

const DesarrolloWeb = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Estados para controlar el slider y los hovers
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeHover, setActiveHover] = useState(null);
  
  // Datos de las plantillas
  const plantillas = [
    imagenPlantilla01,
    imagenPlantilla02,
    imagenPlantilla03,
    imagenPlantilla04,
    imagenPlantilla05
  ];
  
  // Datos para la galería de diseños personalizados
  const customDesigns = [
    { 
      src: imagenCustomDesign01, 
      position: 'topLeft', 
      alt: "Diseño personalizado 1", 
      hoverText: "" 
    },
    { 
      src: imagenCustomDesign02, 
      position: 'mid', 
      alt: "Diseño personalizado 2", 
      hoverText: "Foredu es una app dedicada a la educación permitiendo administrar de manera fácil y ágil las actividades escolares de las personas que estudian" 
    },
    { 
      src: imagenCustomDesign03, 
      position: 'mid', 
      alt: "Diseño personalizado 3", 
      hoverText: "Petopia es una web app que permite generar un QR para la identificación de la mascota, además de tener una historia de salud, recordatorios de vacunaciones y visitas con veterinario" 
    },
    { 
      src: imagenCustomDesign04, 
      position: 'bottomRight', 
      alt: "Diseño personalizado 4", 
      hoverText: "" 
    }
  ];

  // Efecto para el slider automático en móviles
  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % plantillas.length);
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile, plantillas.length]);

  // Handlers para interactividad
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleHoverChange = (index) => {
    setActiveHover(index);
  };

  return (
    <Box>
      {/* Sección Hero */}
      <HeroSection
        title="Nuestros servicios en Desarrollo Web"
        subtitle="Creamos experiencias digitales únicas adaptadas a tus necesidades"
        backgroundImage={imagenDesarrolloWeb}
      />

      {/* Sección de Descripción */}
      <DescriptionSection
        title="¿Qué es un sitio web, una web app y una sección?"
        content="La diferencia principal entre un sitio web y una aplicación web es su nivel de interacción. Un sitio web suele ser estático y está diseñado para mostrar información, como datos de contacto, productos o servicios. En cambio, una aplicación web es dinámica e interactiva, permitiendo acciones como comprar en línea, consultar el saldo de una cuenta bancaria o buscar y filtrar productos. Por otro lado, las secciones en un sitio o aplicación web agrupan contenido relacionado y cumplen una función tanto en el diseño como en la organización de la información, ayudando a que la experiencia del usuario sea más clara y ordenada. Queremos compartir esta información contigo para que conozcas todas las opciones que tenemos para ti."
      />

      {/* Sección de Plantillas */}
      <PlantillasSection
        title="Diseñemos juntos desde plantillas pre-realizadas"
        subtitle="Cuando nos contrates te mostraremos más plantillas para que elijas"
        buttonText="Quiero saber más"
        plantillas={plantillas}
        isMobile={isMobile}
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
      />

      {/* Sección de Descripción Adicional */}
      <AdditionalDescriptionSection
        title="Imagina tu producto y lo diseñamos juntos (personalizado)"
        content="Cuando diseñamos de manera personalizada, tenemos en cuenta tus necesidades, incluyendo el contenido, diseño y varios aspectos más. Creamos juntos desde cero, sin usar plantillas prediseñadas. Por ello, el resultado final será único, diferenciándolo de tu competencia y mejorando la experiencia de las personas usuarias para que fortalezcas las relaciones con tu público y clientela."
      />

      {/* Galería de Diseños Personalizados */}
      <CustomDesignGallery
        designs={customDesigns}
        isMobile={isMobile}
        activeHover={activeHover}
        onHoverChange={handleHoverChange}
      />

      {/* Descripción Final */}
      <FinalDescriptionSection
        content="Globalia Tech ofrece una amplia gama de servicios tecnológicos diseñados para ayudarte a alcanzar tus objetivos de negocio con soluciones innovadoras y personalizadas"
      />

      {/* Sección de Soporte */}
      <SoporteSection
        title="SOPORTE GLOBALIA TECH"
        content="Si ya eres nuestro cliente, puedes comunicarte con nosotros por cualquier duda o inconveniente, a la brevedad te estaremos respondiendo."
        email="info@globalia-tech.com"
      />
    </Box>
  );
};

export default DesarrolloWeb;