import { useState } from 'react';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        negocio: '',
        codigoPais: '',
        numeroTelefonico: '',
        email: '',
        tipoServicio: '',
        motivo: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        }

        if (!formData.negocio.trim()) {
            newErrors.negocio = 'El nombre del negocio es requerido';
        }

        if (!formData.codigoPais) {
            newErrors.codigoPais = 'Selecciona un código de país';
        }

        if (!formData.numeroTelefonico.trim()) {
            newErrors.numeroTelefonico = 'El número de teléfono es requerido';
        } else if (!/^\d{7,15}$/.test(formData.numeroTelefonico)) {
            newErrors.numeroTelefonico = 'Ingresa un número válido (7-15 dígitos)';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido';
        }

        if (!formData.tipoServicio) {
            newErrors.tipoServicio = 'Selecciona un tipo de servicio';
        }

        if (!formData.motivo.trim()) {
            newErrors.motivo = 'El motivo de contacto es requerido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: '',
            negocio: '',
            codigoPais: '',
            numeroTelefonico: '',
            email: '',
            tipoServicio: '',
            motivo: ''
        });
        setErrors({});
    };

    return {
        formData,
        errors,
        isSubmitting,
        setIsSubmitting,
        validateForm,
        handleInputChange,
        resetForm
    };
};