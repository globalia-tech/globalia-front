import React from 'react';
import { 
    Grid, 
    Button, 
    Box, 
    Typography, 
    Alert,
    CircularProgress 
} from '@mui/material';
import ContactFormField from './ContactFormField';
import { COUNTRY_CODES, SERVICE_TYPES } from '../constants/formConstants';
import { ContactService } from '../service/contactService';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = ({ onSubmitSuccess }) => {
    const {
        formData,
        errors,
        isSubmitting,
        setIsSubmitting,
        validateForm,
        handleInputChange,
        resetForm
    } = useContactForm();

    const [submitMessage, setSubmitMessage] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const result = await ContactService.submitContactForm(formData);
            
            if (result.success) {
                setSubmitMessage(result.message);
                resetForm();
                onSubmitSuccess?.(formData);
            } else {
                setSubmitMessage(result.message);
            }
        } catch (error) {
            setSubmitMessage('Error inesperado. Por favor, inténtalo de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="h3" align="center" gutterBottom>
                Solicita una Consulta Gratuita
            </Typography>
            <Typography 
                variant="h6" 
                align="center" 
                gutterBottom 
                sx={{ fontWeight: 600, mb: 4 }}
            >
                Todas tus dudas te las responderemos a la brevedad
            </Typography>

            {submitMessage && (
                <Alert 
                    severity={submitMessage.includes('Error') ? 'error' : 'success'} 
                    sx={{ mb: 3 }}
                >
                    {submitMessage}
                </Alert>
            )}

            <Grid container spacing={3}>
                {/* Información Personal */}
                <Grid item xs={12} md={6}>
                    <ContactFormField
                        name="nombre"
                        label="Nombre completo"
                        placeholder="Ej: Juan Pérez"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        error={errors.nombre}
                        required
                    />
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <ContactFormField
                        name="negocio"
                        label="Nombre de tu negocio"
                        placeholder="Ej: Mi Empresa SRL"
                        value={formData.negocio}
                        onChange={handleInputChange}
                        error={errors.negocio}
                        required
                    />
                </Grid>

                {/* Información de Contacto */}
                <Grid item xs={12} md={3}>
                    <ContactFormField
                        type="select"
                        name="codigoPais"
                        label="Código de país"
                        placeholder="Selecciona tu país"
                        value={formData.codigoPais}
                        onChange={handleInputChange}
                        error={errors.codigoPais}
                        options={COUNTRY_CODES}
                        required
                    />
                </Grid>
                
                <Grid item xs={12} md={4}>
                    <ContactFormField
                        type="tel"
                        name="numeroTelefonico"
                        label="Número de WhatsApp"
                        placeholder="Ej: 70123456"
                        value={formData.numeroTelefonico}
                        onChange={handleInputChange}
                        error={errors.numeroTelefonico}
                        required
                    />
                </Grid>
                
                <Grid item xs={12} md={5}>
                    <ContactFormField
                        type="email"
                        name="email"
                        label="Correo electrónico"
                        placeholder="Ej: juan@miempresa.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        required
                    />
                </Grid>

                {/* Tipo de Servicio */}
                <Grid item xs={12}>
                    <ContactFormField
                        type="select"
                        name="tipoServicio"
                        label="Tipo de servicio"
                        placeholder="¿Qué tipo de servicio necesitas?"
                        value={formData.tipoServicio}
                        onChange={handleInputChange}
                        error={errors.tipoServicio}
                        options={SERVICE_TYPES}
                        required
                    />
                </Grid>

                {/* Motivo de Contacto */}
                <Grid item xs={12}>
                    <ContactFormField
                        name="motivo"
                        label="Motivo de contacto"
                        placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                        value={formData.motivo}
                        onChange={handleInputChange}
                        error={errors.motivo}
                        multiline
                        rows={6}
                        required
                    />
                </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{ px: 6, mx: 'auto' }}
                >
                    {isSubmitting ? (
                        <>
                            <CircularProgress size={20} sx={{ mr: 1 }} />
                            Enviando...
                        </>
                    ) : (
                        'Enviar Mensaje'
                    )}
                </Button>
            </Box>

            <Typography variant="body2" align="center" sx={{ mt: 3, color: 'text.secondary' }}>
                Nos pondremos en contacto contigo en un plazo máximo de 24 horas
            </Typography>
        </Box>
    );
};

export default ContactForm;