import { createTheme } from '@mui/material/styles';
import { Box, styled } from '@mui/material';

export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#ffa000',
    },
    neutral: {
      main: '#f5f5f5',
    },
  },

  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'sans-serif',
    ].join(','),

    h1: {
      fontSize: '5rem',
      fontFamily: [
        '"Orelega One"',
        'Garamond',
        'serif',
      ].join(','),
    },

    h2: {
      fontSize: '3rem',
      fontFamily: [
        '"Orelega One"',
        'Garamond',
        'serif',
      ].join(','),
    },

    subtitle1: {
      fontSize: '1rem',
      fontWeight: '600',
    },

    subtitle2: {
      fontSize: '1.1rem',
      fontWeight: '700',
    },

    body1: {
      fontSize: '0.9rem',
    },
  },

});

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
