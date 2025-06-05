import { Box, Container, useTheme, Stack } from '@mui/material';
import LogoSection from './LogoSection';
import ContactSection from './ContactSection';
import SocialSection from './SocialSection';
import Copyright from './Copyright';

/**
 * Footer component containing company information, contact details, and social links
 * Mobile-first: usa Stack en mobile y grid en desktop
 */
export default function Footer() {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{ width: '100%', bgcolor: theme.palette.primary.footer, color: theme.palette.text.secondary, mt: 4 }}>
            <Container sx={{ py: 5 }}>
                {/* Layout responsive: Stack en mobile, grid en md+ */}
                <Box sx={{
                    display: { xs: 'flex', md: 'grid' },
                    flexDirection: { xs: 'column', md: 'unset' },
                    gridTemplateColumns: { md: 'repeat(3, 1fr)' },
                    gap: { xs: 3, md: 4 },
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    mb: 2
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