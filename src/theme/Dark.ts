import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#06a3da', // lighter blue for contrast
      light: '#33bfff', // brighter accent blue
      dark: '#0d487c', // deep navy for emphasis
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#b388ff', // softer purple accent
      light: '#d1a9ff',
      dark: '#7c4dff',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef5350', // softened red for dark bg
    },
    warning: {
      main: '#ffb74d', // amber shade
    },
    info: {
      main: '#4fc3f7', // sky blue
    },
    success: {
      main: '#81c784', // green that pops on dark
    },
    background: {
      default: '#121212', // MUI standard dark bg
      paper: '#1e1e1e', // card/dialog background
    },
    text: {
      primary: '#ffffff', // strong contrast
      secondary: '#b0b0b0', // muted grey
    },
    divider: '#333333',
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

export default darkTheme;
