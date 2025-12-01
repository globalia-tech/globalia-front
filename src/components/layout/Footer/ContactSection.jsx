import { Box, Typography } from '@mui/material';
import { Email, WhatsApp } from '@mui/icons-material';

export default function ContactSection() {
    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'left' }}>
                ¡Contáctanos!
            </Typography>
            <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
                <ContactItem
                    label="Email:"
                    icon={<Email fontSize="small" />}
                    text="info@globalia-tech.com"
                    href="mailto:info@globalia-tech.com"
                />
                <ContactItem
                    label="WhatsApp:"
                    icon={<WhatsApp fontSize="small" />}
                    text="+54 9 11 2492 6505"
                    href="https://wa.me/5491124926505"
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
                {icon} {text}
            </Typography>
        </Box>
    );
}