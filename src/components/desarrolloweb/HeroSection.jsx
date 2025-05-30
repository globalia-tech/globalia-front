import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const HeroSection = ({ title, subtitle, backgroundImage }) => {
  const HeroContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '729px',
    width: '100%',
    overflow: 'hidden',
  }));

  const HeroBackground = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
  }));

  const HeroImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }));

  const HeroTextContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1027px',
    zIndex: 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('lg')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      top: '45%',
      padding: theme.spacing(0.625),
    },
  }));

  const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: '56px',
    fontWeight: 700,
    lineHeight: '64px',
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: '36px',
      marginBottom: theme.spacing(2.5),
    },
  }));

  const HeroSubtitle = styled(Typography)(({ theme }) => ({
    width: '732px',
    margin: '40px auto 0',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '44px',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      width: '100%',
    },
  }));

  return (
    <HeroContainer>
      <HeroBackground>
        <HeroImage src={backgroundImage} alt="Desarrollo Web GlobaliaTech" />
      </HeroBackground>
      <HeroTextContainer>
        <HeroTitle variant="h1">{title}</HeroTitle>
        <HeroSubtitle variant="h4">{subtitle}</HeroSubtitle>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default HeroSection;