import { Box, Container, useTheme } from '@mui/material';
import LogoSection from './LogoSection';
import ContactSection from './ContactSection';
import SocialSection from './SocialSection';
import Copyright from './Copyright';

/**
 * Footer component containing company information, contact details, and social links
 */
export default function Footer() {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{ width: '100%', bgcolor: theme.palette.primary.dark, color: theme.palette.text.secondary, mt: 4 }}>
            <Container sx={{ py: 5 }}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 4
                }}>
                    <LogoSection />
                    <ContactSection />
                    <SocialSection />
                </Box>

                <Copyright />
            </Container>
        </Box>
    );
}