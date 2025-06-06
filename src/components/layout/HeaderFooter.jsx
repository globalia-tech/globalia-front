import { Box, Stack } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

// Alturas de las barras (deben coincidir con Header)
const CONTACT_BAR_HEIGHT = { xs: 32, md: 40 };
const APP_BAR_HEIGHT = { xs: 56, md: 72 };
function getTotalHeaderHeight() {
  // Suma ambas alturas para cada breakpoint
  return {
    xs: CONTACT_BAR_HEIGHT.xs + APP_BAR_HEIGHT.xs,
    md: CONTACT_BAR_HEIGHT.md + APP_BAR_HEIGHT.md,
  };
}

/**
 * Main layout component that wraps the application content with header and footer
 * Usa Stack para estructura flexible y padding responsive en el main
 * NO agrega un Box spacer, el HeroSection manejará su propio padding superior
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered inside the layout
 */
export default function HeaderFooter({ children }) {
    const totalHeaderHeight = getTotalHeaderHeight();
    return (
        <Stack direction="column" minHeight="100vh" sx={{ width: '100%' }}>
            <Header />
            {/* No spacer here. HeroSection will handle its own top padding. */}
            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, width: '100%', mx: 'auto' }}>
                {children}
            </Box>
            <Footer />
            <BackToTop />
        </Stack>
    );
}