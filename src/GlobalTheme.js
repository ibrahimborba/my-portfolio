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
      fontFamily: [
        '"Orelega One"',
        'Garamond',
        'serif',
      ].join(','),
    },

    h2: {
      fontFamily: [
        '"Orelega One"',
        'Garamond',
        'serif',
      ].join(','),
    },

    subtitle2: {
      fontSize: '1rem',
    },

    body2: {
      fontSize: '1.1rem',
      fontWeight: '700',
    },
  },

});

export default GlobalTheme;
