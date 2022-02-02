import { useContext } from 'react';
import { ThemeContext } from './theme-provider';

export const useThemeChange = () => {
  return useContext(ThemeContext);
};
