import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
    },
    secondary: {
      main: '#212121',
    },
    accent: {
      main: '#ffa000',
    },
  },

  typography: {
    fontFamily: [
      'Montserrat',
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
          color: '#232323',
          padding: '20px',
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: '#232323',
          fontWeight: 700,
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: '0.1s',

          '&:hover': {
            borderBottom: '3px solid #ffb300',
          },

          '&.Mui-focusVisible': {
            border: '3px solid #0d47a1',
          },
        },
      },
    },
  },
});

export default GlobalTheme;
