'use client';
import { ThemeProvider } from '@mui/material/styles';
import React, { ReactNode } from 'react';
import { lightTheme } from '@/theme';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};
