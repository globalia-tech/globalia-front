import { Box, Typography, useTheme } from '@mui/material';

/**
 * Social media links section for the footer
 */
export default function SocialSection() {
    const theme = useTheme();

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'left' }}>
                ¡Seguinos!
            </Typography>
            <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
                <SocialLink
                    href="https://instagram.com/globaliatech"
                    icon="fab fa-instagram"
                    label="Instagram"
                    theme={theme}
                />
                <SocialLink
                    href="https://facebook.com/globaliatech"
                    icon="fab fa-facebook"
                    label="Facebook"
                    theme={theme}
                />
                <SocialLink
                    href="https://www.linkedin.com/company/globalia-tech/"
                    icon="fab fa-linkedin"
                    label="LinkedIn"
                    theme={theme}
                />
            </Box>
        </Box>
    );
}

/**
 * Individual social media link with icon
 * @param {Object} props - Component props
 * @param {string} props.href - Social media URL
 * @param {string} props.icon - Icon class name
 * @param {string} props.label - Social media platform name
 * @param {Object} props.theme - MUI theme object
 */
function SocialLink({ href, icon, label, theme }) {
    return (
        <Box component="li" sx={{ mb: 2 }}>
            <Box
                component="a"
                href={href}
                target="_blank"
                sx={{
                    display: 'flex',
                    gap: 1,
                    color: theme.palette.text.secondary,
                    textDecoration: 'none',
                    '&:hover': {
                        color: theme.palette.secondary.main
                    }
                }}
            >
                <i className={icon}></i>
                <Typography variant="body1">{label}</Typography>
            </Box>
        </Box>
    );
}