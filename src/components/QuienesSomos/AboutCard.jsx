import { CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 348,
    backgroundColor: 'rgba(22, 19, 59, 1)',
    color: 'white',
    boxShadow: '0px 5px 11px 3px rgba(0, 0, 0, 0.759)',
    borderRadius: '16px',
    padding: theme.spacing(4),
}));

const AboutCard = ({ title, description }) => (
    <StyledCard>
        <CardContent sx={{ padding: 0 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FCFCFC', fontSize: '24px' }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'start', fontSize: '16px' }}>
                {description}
            </Typography>
        </CardContent>
    </StyledCard>
);

export default AboutCard;
