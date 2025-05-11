import React from 'react';
import { useTheme } from '@mui/material/styles';

export const EntregaIcon = ({ size = 57, color }) => {
    const theme = useTheme();
    return (
        <svg width={size} height={size * (54/57)} viewBox="0 0 57 54" fill="none">
            <path d="M36.146 33.375L26.5835 30.1875V16.8591M52.0835 27C52.0835 12.9167 40.6668 1.5 26.5835 1.5C12.5002 1.5 1.0835 12.9167 1.0835 27C1.0835 41.0833 12.5002 52.5 26.5835 52.5C28.2177 52.5 29.816 52.3463 31.3648 52.0525M37.7398 44.5312L42.521 49.3125L55.271 36.5625"
                  stroke={color || theme.palette.text.primary}
                  strokeOpacity="0.87"
                  strokeWidth="2"
            />
        </svg>
    );
};