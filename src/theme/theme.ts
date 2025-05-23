
"use client";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2', // Your light mode primary color
        },
        secondary: {
          main: '#9c27b0', // Your light mode secondary color
        },
        background: {
          default: '#f5f5f5', // Light mode background
          paper: '#ffffff',   // Light mode paper
        },
        // Add other light mode palette colors as needed
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9', // Your dark mode primary color
        },
        secondary: {
          main: '#ce93d8', // Your dark mode secondary color
        },
        background: {
          default: '#121212', // Dark mode background
          paper: '#1e1e1e',   // Dark mode paper
        },
        // Add other dark mode palette colors as needed
      },
    }

  },
});

export default theme;
