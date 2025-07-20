// theme/lightTheme.ts
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2eb437',
      light: '#57c35f',
      dark: '#207d26',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff8a33',
      light: '#ffa15b',
      dark: '#b26023',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#f57c00',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4d4d4d',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: { fontSize: '2.2rem', fontWeight: 600 },
    h2: { fontSize: '1.8rem', fontWeight: 600 },
    h3: { fontSize: '1.6rem', fontWeight: 500 },
    h4: { fontSize: '1.4rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default lightTheme;
