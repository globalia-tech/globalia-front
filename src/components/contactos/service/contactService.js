export class ContactService {
    static async submitContactForm(formData) {
        const payload = {
            Nombre: formData.nombre,
            Negocio: formData.negocio,
            Telefono: formData.codigoPais + formData.numeroTelefonico,
            Email: formData.email,
            TipoServicio: formData.tipoServicio,
            Motivo: formData.motivo
        };

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbxduCLmtJXsyNmeZgu6uA27zBykzc9K7zDyP8nb1XFdQz1x2sIKzN4tJKHhSYmcS_OuFw/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }
            );

            return { success: true, message: 'Mensaje enviado correctamente' };
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            return { success: false, message: 'Error al enviar el mensaje. Inténtalo de nuevo.' };
        }
    }
}