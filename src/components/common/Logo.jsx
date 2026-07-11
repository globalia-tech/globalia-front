import { Box } from '@mui/material';
import isotipoAegaWhite from '../../assets/isotipo-aega-white.png';

const Logo = ({ width = 48, height = 36 }) => (
  <Box
    component="img"
    src={isotipoAegaWhite}
    alt="AegaTech"
    width={width}
    height={height}
    sx={{
      display: 'block',
      objectFit: 'contain'
    }}
  />
);

export default Logo;
