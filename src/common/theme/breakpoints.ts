import { createBreakpoints } from '@mui/system';

export const breakpoints = {
  values: {
    xs: 0,
    xsm: 360,
    sm: 480,
    md: 640,
    lg: 960,
    xl: 1440,
    xxl: 1920,
  },
};

export const themeBreakpoints = createBreakpoints(breakpoints);
