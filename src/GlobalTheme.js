import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: '#3949ab',
    },
  },

  typography: {
    fontFamily: [
      'Montserrat',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
  },

  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#232323',
          padding: '20px',
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: '#232323',
          textDecoration: 'none',
        },
      },
    },
  },
});

export default GlobalTheme;
