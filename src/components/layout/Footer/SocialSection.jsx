import { Box, Typography, useTheme } from '@mui/material';
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';

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
                    icon={<Instagram fontSize="small" />}
                    label="Instagram"
                />
                <SocialLink
                    href="https://facebook.com/globaliatech"
                    icon={<Facebook fontSize="small" />}
                    label="Facebook"
                />
                <SocialLink
                    href="https://www.linkedin.com/company/globalia-tech/"
                    icon={<LinkedIn fontSize="small" />}
                    label="LinkedIn"
                />
            </Box>
        </Box>
    );
}

function SocialLink({ href, icon, label }) {
    const theme = useTheme();

    return (
        <Box component="li" sx={{ mb: 2 }}>
            <Box
                component="a"
                href={href}
                target="_blank"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: theme.palette.text.secondary,
                    textDecoration: 'none',
                    '&:hover': {
                        color: theme.palette.secondary.main
                    }
                }}
            >
                {icon}
                <Typography variant="body1">{label}</Typography>
            </Box>
        </Box>
    );
}