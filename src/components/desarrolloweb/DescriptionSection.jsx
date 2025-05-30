import React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';

const DescriptionSection = ({ title, content }) => {
  const SectionContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(10, 2.5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 2.5),
    },
  }));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: { xs: '40px 20px', md: '80px 20px' } }}>
      <SectionContainer maxWidth="lg" sx={{ maxWidth: '1146px' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '24px', sm: '28px', md: '36px' },
            fontWeight: 600,
            mb: 5,
            color: 'text.primary',
            textAlign: { xs: 'center', md: 'left' },
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px', md: '20px' },
            lineHeight: { xs: '24px', md: '28px' },
            fontWeight: { xs: 400, md: 600 },
            color: 'text.primary',
            textAlign: 'left',
            pr: { xs: 0, md: '30px' },
          }}
        >
          {content}
        </Typography>
      </SectionContainer>
    </Box>
  );
};

export default DescriptionSection;