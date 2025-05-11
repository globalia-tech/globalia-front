import { Box } from '@mui/material';
import ContactBar from './ContactBar';
import Navigation from './Navigation';

/**
 * Header component that includes contact information and navigation
 */
export default function Header() {
    return (
        <Box sx={{ position: 'relative',
            display: 'flex',
            flexDirection: 'column' }}>
            <ContactBar />
            <Navigation />
        </Box>
    );
}
