import { Box, Typography } from '@mui/material';

/**
 * Contact information section for the footer
 */
export default function ContactSection() {
    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'left' }}>
                ¡Contactanos!
            </Typography>
            <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
                <ContactItem
                    label="Email:"
                    icon="bi bi-envelope"
                    text="info@globalia-tech.com"
                />
                <ContactItem
                    label="WhatsApp:"
                    icon="bi bi-whatsapp"
                    text="+123 456 7890"
                />
            </Box>
        </Box>
    );
}

/**
 * Individual contact item with label and icon
 * @param {Object} props - Component props
 * @param {string} props.label - Contact label
 * @param {string} props.icon - Icon class name
 * @param {string} props.text - Contact text
 */
function ContactItem({ label, icon, text }) {
    return (
        <Box component="li" sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <Typography variant="body1" component="strong">{label}</Typography>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <i className={icon}></i> {text}
            </Typography>
        </Box>
    );
}