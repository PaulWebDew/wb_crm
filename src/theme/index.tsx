import { createTheme } from '@mui/material/styles';
const customBreakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1920, // ← новое значение
  },
};

export const lightTheme = createTheme({
  breakpoints: customBreakpoints,
  palette: {
    mode: 'light',

    primary: {
      main: '#3F8CFF',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },

    secondary: {
      main: '#4ac41b',
      contrastText: '#fff',
    },

    error: {
      main: '#FF4000',
    },

    warning: {
      main: '#ff9800',
    },

    info: {
      main: '#2196f3',
    },

    success: {
      main: '#4caf50',
      contrastText: '#ffffff',
      light: '#c4f0c2',
    },

    background: {
      default: '#f4f9fd', // фон страницы
      paper: '#ffffff', // фон карточек, диалогов и пр.
    },

    text: {
      primary: '#1e1d1d',
      secondary: '#7d8592',
      disabled: '#afafaf',
    },

    divider: 'rgba(157,108,108,1)',
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  palette: {
    mode: 'dark', // или 'light'

    primary: {
      main: '#1976d2', // основной цвет (например, кнопки)
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },

    secondary: {
      main: '#9c27b0',
      contrastText: '#fff',
    },

    error: {
      main: '#f44336',
    },

    warning: {
      main: '#ff9800',
    },

    info: {
      main: '#2196f3',
    },

    success: {
      main: '#4caf50',
    },

    background: {
      default: '#121212', // фон страницы
      paper: '#1e1e1e', // фон карточек, диалогов и пр.
    },

    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
      disabled: '#666666',
    },

    divider: 'rgba(255,255,255,0.12)',
  },
});
