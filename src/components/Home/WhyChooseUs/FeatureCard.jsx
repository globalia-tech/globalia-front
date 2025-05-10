import { Card, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)'
    }
}));

const FeatureCard = ({ feature }) => {
    const theme = useTheme();

    return (
        <StyledCard>
            <Box sx={{ mr: 3, flexShrink: 0 }}>
                {feature.icon(theme.palette.primary.main)}
            </Box>
            <Box>
                <Typography variant="h5" gutterBottom>
                    {feature.title}
                </Typography>
                <Typography variant="body1">
                    {feature.content}
                </Typography>
            </Box>
        </StyledCard>
    );
};

export default FeatureCard;