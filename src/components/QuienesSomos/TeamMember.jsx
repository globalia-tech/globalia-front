import { Box, Typography } from '@mui/material';

const TeamMember = ({ image, name }) => (
    <Box
        sx={{
            width: 120,
            height: 236,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: 2,
            paddingTop: 1
        }}
    >
        <Box
            component="img"
            src={image}
            alt={name}
            sx={{
                height: 130,
                width: 130,
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '1000px',
                mb: 1
            }}
        />
        <Typography
            variant="body1"
            sx={{
                fontSize: '19px',
                lineHeight: '29px',
                px: 0.5,
                textAlign: 'center'
            }}
        >
            {name}
        </Typography>
    </Box>
);

export default TeamMember;
