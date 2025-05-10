import { forwardRef } from 'react';
import { Grid, Typography, Card, Box } from '@mui/material';
import FeatureCard from './FeatureCard';
import { features } from './featuresData.jsx';

const WhyChooseUs = forwardRef((props, ref) => (
    <Box
        ref={ref}
        sx={{
            my: 8,
            px: { xs: 2, sm: 4, md: 6 },
            color: 'text.primary'
        }}
        {...props}
    >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            ¿Por qué elegir{' '}
            <Box component="span" color="primary.main">
                Globalia Tech
            </Box>?
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
            {features.map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <FeatureCard feature={feature} />
                </Grid>
            ))}
        </Grid>
    </Box>
));

export default WhyChooseUs;