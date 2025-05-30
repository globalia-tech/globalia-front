import React from 'react';
import { Box, Typography } from '@mui/material';

const FinalDescriptionSection = ({ content }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 20px',
      backgroundColor: 'background.default',
    }}>
      <Box sx={{
        padding: { xs: 0, md: '40px' },
        textAlign: 'center'
      }}>
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
        </Typography>
      </Box>
    </Box>
  );
};
export default FinalDescriptionSection;
