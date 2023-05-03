import React, { useState, useMemo, ReactNode } from 'react'
import { ColorContext } from './ColorContext';
import { createTheme, ThemeProvider, CssBaseline, PaletteMode } from '@mui/material';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

const themeCollection = {
  light: lightTheme,
  dark: darkTheme
}

const ColorContextProvider = ({ children }: { children: ReactNode }) => {
  const [ mode, setMode ] = useState<PaletteMode>("light");

  const theme = useMemo(() => createTheme(themeCollection[mode]), [mode]);

  const colorMode = useMemo(() => ({
    toggleTheme: () => {
      setMode(prevMode => prevMode === "light" ? "dark" : "light");
    }
  }), []);

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        { children }
      </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default ColorContextProvider