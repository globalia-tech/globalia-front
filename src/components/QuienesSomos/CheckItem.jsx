import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

const CheckItem = ({ children }) => {
    const theme = useTheme();

    return (
        <Grid item xs={12} sm={5} md={3}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    padding: 3,
                    borderRadius: '16px',
                    backgroundColor: theme.palette.background.paper
                }}
            >
                <Box
                    component="p"
                    sx={{
                        margin: 0,
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        fontSize: '1rem'
                    }}
                >
                    {children}
                </Box>
                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.2188 7.625H16.2031C11.4656 7.625 7.625 11.4655 7.625 16.2031V44.7969C7.625 49.5345 11.4656 53.375 16.2031 53.375H44.7969C49.5344 53.375 53.375 49.5345 53.375 44.7969V29.0702M50.5156 14.7734L30.5 34.7889L24.7813 29.0702" stroke="#738bec" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Box>
        </Grid>
    );
};

export default CheckItem;