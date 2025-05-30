import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SoporteSection = ({ title, content, email }) => {
  const theme = useTheme();
  
  const SoporteContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(5, 2.5),
    backgroundColor: 'rgba(119, 29, 250, 0.20)',
    height: '382px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  }));

  return (
    <SoporteContainer>
      <Box sx={{
        padding: { xs: 0, md: '40px' },
        textAlign: 'center'
      }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '36px',
            fontWeight: 600,
            mb: 2.5,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: 600,
            width: { xs: '100%', md: '722px' },
            padding: { xs: 0, md: '0 60px 0 0' },
          }}
        >
          {content}
          <br /> <br />
          Nuestro mail:
          <br />
          <a href={`mailto:${email}`} style={{ color: theme.palette.primary.main }}>
            {email}
          </a>
        </Typography>
      </Box>
    </SoporteContainer>
  );
};
export default SoporteSection;
