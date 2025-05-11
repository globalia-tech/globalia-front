import { Box, Typography } from '@mui/material';

const ValueCard = ({ icon, title }) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: 200
        }}>
            <Box sx={{ width: 69, height: 89 }}>
                {icon}
            </Box>
            <Typography variant="h6" sx={{ mt: 1 }}>{title}</Typography>
        </Box>
    );
};


export default ValueCard;