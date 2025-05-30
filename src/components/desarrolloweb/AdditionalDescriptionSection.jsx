import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AdditionalDescriptionSection = ({ title, content }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: { xs: '0 20px', md: '40px 20px' },
      backgroundColor: 'background.default'
    }}>
      <Container
        maxWidth="lg"
        sx={{
          maxWidth: '1146px',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 0, md: '60px' }
        }}
      >
        <Box sx={{ padding: { xs: 0, md: '40px' } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '24px', sm: '28px', md: '36px' },
              fontWeight: 600,
              mb: { xs: 2, md: 3.75 },
              color: 'text.primary',
              textAlign: { xs: 'center', md: 'left' },
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '14px', md: '18px' },
              lineHeight: 1.8,
              fontWeight: { xs: 400, md: 500 },
              color: 'text.primary',
              pr: { xs: 0, md: '60px' },
            }}
          >
            {content}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default AdditionalDescriptionSection;
