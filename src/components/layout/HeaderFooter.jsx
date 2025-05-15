import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

/**
 * Main layout component that wraps the application content with header and footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered inside the layout
 */
export default function HeaderFooter({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            <Footer />
            <BackToTop />
        </Box>
    );
}