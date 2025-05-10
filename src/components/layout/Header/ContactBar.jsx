import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';

/**
 * Contact information bar displayed at the top of the page
 */
export default function ContactBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            bgcolor: theme.palette.background.header,
            py: 1,
            px: 2,
            width: '100%',
            // Eliminar la propiedad que oculta en móviles
            display: 'block'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 0'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap : 2,
                    alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                    <ContactInfo
                        href="tel:+58999999999"
                        icon="bi bi-telephone"
                        text="+58 999 999 999"
                        theme={theme}
                    />
                    <ContactInfo
                        href="mailto:info@globalia-tech.com"
                        icon="bi bi-envelope"
                        text="info@globalia-tech.com"
                        theme={theme}
                    />
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <SocialIcon
                        href="https://www.instagram.com/globaliatech/"
                        icon="bi bi-instagram"
                        theme={theme}
                    />
                    <SocialIcon
                        href="https://www.facebook.com/globaliatech/"
                        icon="bi bi-facebook"
                        theme={theme}
                    />
                    <SocialIcon
                        href="https://www.linkedin.com/company/globalia-tech/"
                        icon="bi bi-linkedin"
                        theme={theme}
                    />
                </Box>
            </Box>
        </Box>
    );
}

/**
 * Contact information item with icon and text
 * @param {Object} props - Component props
 * @param {string} props.href - Contact link URL
 * @param {string} props.icon - Icon class name
 * @param {string} props.text - Contact text
 * @param {Object} props.theme - MUI theme object
 */
function ContactInfo({ href, icon, text, theme }) {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box component="a" href={href} sx={{
            color: theme.palette.text.secondary,
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: isMobile ? '0.9rem' : 'inherit' // Reducir tamaño en móvil
        }}>
            <i className={icon}></i>
            {!isMobile && (
                <Typography variant="body2">{text}</Typography>
            )}
        </Box>
    );
}

/**
 * Social media icon button
 * @param {Object} props - Component props
 * @param {string} props.href - Social media link URL
 * @param {string} props.icon - Icon class name
 * @param {Object} props.theme - MUI theme object
 */
function SocialIcon({ href, icon, theme }) {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <IconButton
            href={href}
            target="_blank"
            sx={{
                color: theme.palette.text.secondary,
                padding: isMobile ? '4px' : '8px' // Reducir padding en móvil
            }}
        >
            <i className={icon} style={{
                fontSize: isMobile ? '1rem' : '1.25rem' // Reducir tamaño en móvil
            }}></i>
        </IconButton>
    );
}