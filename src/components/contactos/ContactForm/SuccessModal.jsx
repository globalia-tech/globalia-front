import React from 'react';
import { 
    Modal, 
    Box, 
    Typography, 
    Button,
    Backdrop,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const SuccessModal = ({ open, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Cambiado a 'sm' para mejor control
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    
    // Logging para seguir el debugging
    React.useEffect(() => {
        console.log('🎭 SuccessModal - Estado:', { open, isMobile, isTablet });
    }, [open, isMobile, isTablet]);

    // Estilos del modal completamente responsivos
    const modalStyle = {
        // Centrado responsivo usando flexbox y transform
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centra perfectamente el modal
        
        // Dimensiones responsivas basadas en tus especificaciones
        width: isMobile ? '312px' : isTablet ? '350px' : '400px',
        height: isMobile ? '240px' : 'auto',
        minHeight: '240px',
        maxWidth: '90vw', // Evita que se salga en pantallas muy pequeñas
        maxHeight: '90vh', // Evita que se salga verticalmente
        
        // Estilos visuales según tus especificaciones
        borderRadius: '28px',
        background: '#240455', // Tu color violeta específico
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        
        // Layout interno con flexbox
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centrar contenido horizontalmente
        justifyContent: 'space-between', // Distribuir contenido verticalmente
        
        // Padding responsivo
        padding: isMobile ? '16px 16px 30px 16px' : '24px',
        gap: '16px',
        
        // Propiedades adicionales para mejor presentación
        outline: 'none',
        color: 'white',
        zIndex: theme.zIndex.modal,
        overflow: 'hidden', // Evita scroll interno
        
        // Transición suave para cambios de tamaño
        transition: 'all 0.3s ease-in-out',
    };

    // Logging mejorado para debugging
    React.useEffect(() => {
        if (open) {
            console.log('🎨 Estilos aplicados al modal:', modalStyle);
            console.log('📱 Breakpoints activos:', { isMobile, isTablet });
            
            // Verificación post-renderizado
            setTimeout(() => {
                const modalContainer = document.querySelector('[data-testid="modal-container"]');
                if (modalContainer) {
                    console.log('✅ Modal container encontrado');
                    const rect = modalContainer.getBoundingClientRect();
                    console.log('📐 Posición del modal:', {
                        top: rect.top,
                        left: rect.left,
                        width: rect.width,
                        height: rect.height,
                        centeredX: Math.abs(rect.left + rect.width/2 - window.innerWidth/2) < 10,
                        centeredY: Math.abs(rect.top + rect.height/2 - window.innerHeight/2) < 10,
                        visible: rect.top >= 0 && rect.left >= 0 && 
                                rect.bottom <= window.innerHeight && 
                                rect.right <= window.innerWidth
                    });
                } else {
                    console.log('❌ Modal container no encontrado');
                }
            }, 200);
        }
    }, [open, modalStyle, isMobile, isTablet]);

    // Backdrop mejorado con mejor blur
    const CustomBackdrop = (props) => {
        return (
            <Backdrop
                {...props}
                sx={{
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    transition: 'all 0.3s ease-in-out',
                }}
            />
        );
    };

    const handleClose = (event, reason) => {
        console.log('❌ Cerrando modal - Razón:', reason);
        if (onClose) {
            onClose(event, reason);
        }
    };

    if (!open) {
        return null;
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            BackdropComponent={CustomBackdrop}
            // Configuración optimizada para responsividad
            disablePortal={false}
            disableAutoFocus={false}
            disableEnforceFocus={false}
            keepMounted={false}
            // Mejora la accesibilidad
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box 
                sx={modalStyle}
                data-testid="modal-container"
            >
                {/* Sección superior con ícono */}
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    flex: '0 0 auto' // No crece, tamaño fijo
                }}>
                    <CheckCircle 
                        sx={{ 
                            fontSize: isMobile ? 40 : 48, 
                            color: 'white',
                            marginBottom: 1,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' // Sombra sutil
                        }} 
                    />
                </Box>

                {/* Sección de contenido central */}
                <Box sx={{ 
                    flex: '1 1 auto', // Crece para ocupar espacio disponible
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    paddingX: isMobile ? 1 : 2
                }}>
                    <Typography 
                        id="modal-title"
                        variant={isMobile ? "subtitle1" : "h6"}
                        align="center" 
                        gutterBottom
                        sx={{ 
                            fontWeight: 'bold',
                            marginBottom: 2,
                            fontSize: isMobile ? '1.1rem' : '1.25rem',
                            lineHeight: 1.3
                        }}
                    >
                        ¡Tu consulta ha sido enviada correctamente!
                    </Typography>

                    <Typography 
                        id="modal-description"
                        variant="body2" 
                        align="center" 
                        sx={{ 
                            opacity: 0.9,
                            lineHeight: 1.4,
                            fontSize: isMobile ? '0.875rem' : '0.9rem',
                            marginBottom: 1
                        }}
                    >
                        Nos pondremos en contacto contigo en un plazo máximo de 24 horas
                    </Typography>
                </Box>

                {/* Sección inferior con botón */}
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flex: '0 0 auto' // No crece, tamaño fijo
                }}>
                    <Button
                        variant="contained"
                        onClick={(e) => {
                            console.log('🔘 Botón Aceptar clickeado');
                            handleClose(e, 'buttonClick');
                        }}
                        sx={{
                            backgroundColor: 'white',
                            color: '#240455', // Mismo color que el fondo para contraste
                            borderRadius: '25px',
                            paddingX: isMobile ? 3 : 4,
                            paddingY: isMobile ? 1 : 1.5,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            minWidth: isMobile ? '100px' : '120px',
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                            },
                            '&:active': {
                                transform: 'translateY(0px)',
                            },
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        Aceptar
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default SuccessModal;