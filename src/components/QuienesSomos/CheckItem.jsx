import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

const CheckItem = ({ children }) => {
    const theme = useTheme();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    padding: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: '16px',
                    minHeight: { xs: '60px', sm: '70px', md: '80px' }
                }}
            >
                <Box
                    component="p"
                    sx={{
                        margin: 0,
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        fontSize: { 
                            xs: '0.875rem', 
                            sm: '0.9375rem', 
                            md: '1rem',
                            lg: '1.0625rem'
                        },
                        lineHeight: 1.4,
                        wordBreak: 'break-word',
                        hyphens: 'auto'
                    }}
                >
                    {children}
                </Box>
                <Box
                    sx={{
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 61 61" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            width: 'clamp(40px, 8vw, 61px)',
                            height: 'clamp(40px, 8vw, 61px)',
                            maxWidth: '61px',
                            maxHeight: '61px'
                        }}
                    >
                        <path 
                            d="M36.2188 7.625H16.2031C11.4656 7.625 7.625 11.4655 7.625 16.2031V44.7969C7.625 49.5345 11.4656 53.375 16.2031 53.375H44.7969C49.5344 53.375 53.375 49.5345 53.375 44.7969V29.0702M50.5156 14.7734L30.5 34.7889L24.7813 29.0702" 
                            stroke="#738bec" 
                            strokeWidth="4" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </Box>
            </Box>
        </Grid>
    );
};

export default CheckItem;