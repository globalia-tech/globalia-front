import { Box, Typography } from '@mui/material';
import Logo from '../../common/Logo';

/**
 * Logo section for the footer with company name and tagline
 */
export default function LogoSection() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Logo width={91} height={71} />
            <Typography variant="h4" sx={{ mb: 2 }}>
                Globalia Tech
            </Typography>
            <Typography variant="body1" sx={{
                fontSize: '20px',
                lineHeight: '28px',
                textAlign: 'center',
                fontWeight: 600
            }}>
                Soluciones integrales para potenciar tu marca
            </Typography>
        </Box>
    );
}