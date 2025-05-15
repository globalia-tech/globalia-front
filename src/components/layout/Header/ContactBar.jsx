import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import {
    WhatsApp,
    Email,
    Instagram,
    Facebook,
    LinkedIn
} from '@mui/icons-material';

export default function ContactBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            bgcolor: theme.palette.background.header,
            py: 1,
            px: 2,
            width: '100%',
            display: 'block'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '12px 0'
            }}>
                {/* Contact Info */}
                <Box sx={{ display: 'flex', gap: 3 }}>
                    <ContactInfo
                        href="https://wa.me/5491176255393"
                        icon={<WhatsApp fontSize={isMobile ? "small" : "medium"} />}
                        text="+54 9 11 7625 5393"
                    />
                    <ContactInfo
                        href="mailto:info@globalia-tech.com"
                        icon={<Email fontSize={isMobile ? "small" : "medium"} />}
                        text="info@globalia-tech.com"
                    />
                </Box>

                {/* Social Icons */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <SocialIcon
                        href="https://www.instagram.com/globaliatech/"
                        icon={<Instagram fontSize={isMobile ? "small" : "medium"} />}
                    />
                    <SocialIcon
                        href="https://www.facebook.com/globaliatech/"
                        icon={<Facebook fontSize={isMobile ? "small" : "medium"} />}
                    />
                    <SocialIcon
                        href="https://www.linkedin.com/company/globalia-tech/"
                        icon={<LinkedIn fontSize={isMobile ? "small" : "medium"} />}
                    />
                </Box>
            </Box>
        </Box>
    );
}

function ContactInfo({ href, icon, text }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="a"
            href={href}
            sx={{
                color: theme.palette.text.secondary,
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': { opacity: 0.8 }
            }}
        >
            {icon}
            {!isMobile && (
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                    {text}
                </Typography>
            )}
        </Box>
    );
}

function SocialIcon({ href, icon }) {
    const theme = useTheme();

    return (
        <IconButton
            href={href}
            target="_blank"
            sx={{
                color: theme.palette.text.secondary,
                padding: '6px',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
        >
            {icon}
        </IconButton>
    );
}