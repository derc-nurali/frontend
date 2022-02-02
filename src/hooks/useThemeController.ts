import { useEffect, useState } from 'react';
import { get } from 'lodash';
import Cookies from 'js-cookie';
import { APP_THEME, APP_DEFAULT_THEME } from '../constants/base.constants';
import { themeMap } from '../common/theme/theme-provider';

export const useThemeController = () => {
  const [themeName, setThemeName] = useState(APP_DEFAULT_THEME);

  useEffect(() => {
    setThemeName(Cookies.get(APP_THEME) || APP_DEFAULT_THEME);
  }, []);

  const theme = get(themeMap, themeName, themeMap[APP_DEFAULT_THEME]);

  const onChangeTheme = (name: string) => {
    Cookies.set(APP_THEME, name);
    setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: onChangeTheme,
  };

  return { theme, contextValue };
};
