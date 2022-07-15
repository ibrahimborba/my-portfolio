import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      main: '#ffb300',
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
        },

        focusVisible: {
          border: '3px solid #0d47a1',
        },
      },
    },
  },
});

export default GlobalTheme;
