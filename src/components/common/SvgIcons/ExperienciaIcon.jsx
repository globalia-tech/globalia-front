import React from 'react';
import { useTheme } from '@mui/material/styles';

export const ExperienciaIcon = () => {
    const theme = useTheme();

    return (
        <svg width="63" height="50" viewBox="0 0 63 50" fill="none">
            <path
                d="M20.0705 11.9875V4.69334C20.0705 2.67912 21.7762 1.04626 23.8804 1.04626H37.215C39.3192 1.04626 41.0249 2.67912 41.0249 4.69334V11.9875M8.64079 48.4583H54.3595C58.5678 48.4583 61.9793 45.1926 61.9793 41.1641V19.2817C61.9793 15.2532 58.5678 11.9875 54.3595 11.9875H8.64079C4.43249 11.9875 1.021 15.2532 1.021 19.2817V41.1641C1.021 45.1926 4.43249 48.4583 8.64079 48.4583Z"
                stroke={theme.palette.text.primary}
                strokeOpacity="0.87"
                strokeWidth="2"
            />
        </svg>
    );
};