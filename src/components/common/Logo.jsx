import React from 'react';
import { Box } from '@mui/material';

// Logo SVG seguro y simple
const Logo = ({ width = 48, height = 36 }) => (
  <Box
    component="svg"
    width={width}
    height={height}
    viewBox="0 0 62 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      display: 'block',
      maxWidth: { xs: 40, sm: 48, md: 62 },
      height: { xs: 32, sm: 36, md: 48 }
    }}
  >
    <rect width="62" height="48" rx="12" fill="#771DFA" />
    <circle cx="31" cy="24" r="14" fill="#01C2E1" />
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" dy=".3em" fontFamily="Inter, sans-serif">G</text>
  </Box>
);

export default Logo;