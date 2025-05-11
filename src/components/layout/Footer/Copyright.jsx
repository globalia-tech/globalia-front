import { Box, Typography, useTheme } from '@mui/material';

/**
 * Copyright section for the footer
 */
export default function Copyright() {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <Box sx={{
            borderTop: `1px solid ${theme.palette.text.secondary}`,
            mt: 4,
            pt: 2,
            textAlign: 'center'
        }}>
            <Typography variant="body2">
                &copy; Globalia Tech {currentYear}
            </Typography>
        </Box>
    );
}