import { useTheme, useMediaQuery } from '@mui/material';

/**
 * Hook para detectar tipo de dispositivo según breakpoints MUI
 * Uso: const { isMobile, isTablet, isDesktop } = useDevice();
 */
export function useDevice() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return { isMobile, isTablet, isDesktop };
} 