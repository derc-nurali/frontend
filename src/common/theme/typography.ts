import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: ['Raleway', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontFamily: 'Oswald',
    fontSize: 70,
    fontWeight: 'bold',
    lineHeight: 1.3,
    letterSpacing: '-0.04em',
  },
  h2: {
    fontFamily: 'Oswald',
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: 'Oswald',
    fontSize: 40,
    fontWeight: 500,
    lineHeight: 1.3,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontFamily: 'Oswald',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.3,
    letterSpacing: '-0.02em',
  },
  // not used
  h5: undefined,
  // not used
  h6: undefined,
  subtitle1: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 1.267,
  },
  subtitle2: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body1: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.278,
  },
  body2: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.375,
  },
  // body 4
  body3: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.2,
  },
  button: {
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 1.2,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  overline: {
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 1.35,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
  },
};

export default typography;
