import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
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

    h3: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },

    h5: {
      fontSize: '2rem',
      fontFamily: [
        '"Orelega One"',
        'Garamond',
        'serif',
      ].join(','),
    },

    subtitle1: {
      fontSize: '1rem',
      fontWeight: '500',
    },

    subtitle2: {
      fontSize: '1.1rem',
      fontWeight: '700',
    },

    body1: {
      fontSize: '0.9rem',
    },

    body2: {
      fontSize: '0.7rem',
    },
  },

});

export default GlobalTheme;
