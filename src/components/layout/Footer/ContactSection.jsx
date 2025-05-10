import { Box, Typography } from '@mui/material';

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
                    href="mailto:info@globalia-tech.com"
                />
                <ContactItem
                    label="WhatsApp:"
                    icon="bi bi-whatsapp"
                    text="+54 9 11 7625-5393"
                    href="https://wa.me/5491176255393"
                />
            </Box>
        </Box>
    );
}

function ContactItem({ label, icon, text, href }) {
    return (
        <Box component="li" sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <Typography variant="body1" component="strong">{label}</Typography>
            <Typography
                variant="body1"
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                        textDecoration: 'underline'
                    }
                }}
            >
                <i className={icon}></i> {text}
            </Typography>
        </Box>
    );
}