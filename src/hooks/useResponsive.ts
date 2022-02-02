import { useMediaQuery, useTheme } from '@mui/material';
import findLast from 'lodash/findLast';

type Breakpoint = 'xs' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type ResponsiveValues<P> = {
  [key in Breakpoint]?: P;
};

export const useResponsive = () => {
  const theme = useTheme();

  const matches: any = {
    xs: useMediaQuery(theme.breakpoints.up('xs')),
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    md: useMediaQuery(theme.breakpoints.up('md')),
    lg: useMediaQuery(theme.breakpoints.up('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl')),
    xxl: useMediaQuery(theme.breakpoints.up('xxl')),
  };

  return function <P>(responsiveValues: ResponsiveValues<P> | any) {
    const match: any = findLast(
      theme.breakpoints.keys,
      (breakpoint) => matches[breakpoint] && responsiveValues[breakpoint] != null
    );

    return match && responsiveValues[match];
  };
};
