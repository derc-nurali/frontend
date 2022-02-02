import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import Cookies from 'js-cookie';
import { get } from 'lodash';
import { ComponentType, createContext, useEffect, useState } from 'react';
import { APP_DEFAULT_THEME, APP_THEME } from '../../constants/base.constants';
import { breakpoints } from './breakpoints';
import { themeComponents } from './components';
import { a11yPalette, darkPalette, lightPalette } from './palettes';
import { shadows } from './shadows';
import { shape } from './shape';
import { typography } from './typography';

const a11yTheme = createTheme({
  palette: a11yPalette,
  typography,
  shape,
  shadows,
  breakpoints,
  components: themeComponents(a11yPalette),
});

const darkTheme = createTheme({
  palette: darkPalette,
  typography,
  shape,
  shadows,
  breakpoints,
  components: themeComponents(darkPalette),
});

const lightTheme = createTheme({
  palette: lightPalette,
  typography,
  shape,
  shadows,
  breakpoints,
  components: themeComponents(lightPalette),
});

export const themeMap: { [key: string]: Theme } = {
  a11y: a11yTheme,
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeType = keyof typeof themeMap;

export const themes = Object.keys(themeMap) as ThemeType[];
export const defaultTheme: ThemeType = APP_DEFAULT_THEME;

export interface ThemeContextProps {
  theme: ThemeType;
  handleTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  handleTheme: () => {},
});

export const ThemeProvider: ComponentType = ({ children }: Record<string, any>) => {
  const [theme, setTheme] = useState<ThemeType>(APP_DEFAULT_THEME as ThemeType);
  const currentTheme = get(themeMap, theme, themeMap[APP_DEFAULT_THEME]);

  useEffect(() => {
    setTheme(Cookies.get(APP_THEME) || APP_DEFAULT_THEME);
  }, []);

  const handleTheme = (theme: ThemeType) => {
    Cookies.set(APP_THEME, theme as string);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme,
      }}
    >
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={currentTheme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};
