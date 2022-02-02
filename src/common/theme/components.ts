import { Components } from '@mui/material';
import { createTheme } from '@mui/system';
import { IconArrowLarge } from '../../components/icons';
import { themeBreakpoints } from './breakpoints';
import typography from './typography';

export const themeComponents = (palette: any): Components => {
  const theme = createTheme();

  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: '100vh',
          height: '100%',
        },
        body: {
          minHeight: '100vh',
          height: '100%',
          fontFeatureSettings: `'pnum' on, 'lnum' on`,
          [themeBreakpoints.up('xxl')]: {
            paddingLeft: theme.spacing(30),
            '&:before': {
              position: 'absolute',
              top: 42,
              left: 0,
              content: '""',
              width: 2930,
              height: 1053,
              background:
                palette.type === 'a11y' ? 'none' : 'url("/images/bg_waves.svg") no-repeat 0 241px',
              backgroundSize: 'cover',
              transformOrigin: '0 0',
              transform: 'rotate(90deg) translate(0%, -100%)',
            },
          },
        },
        '#__next': {},
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          paddingLeft: 30,
          paddingRight: 30,
          margin: '0 auto',
          maxWidth: 1230,
          [themeBreakpoints.up('xxl')]: {
            paddingLeft: 50,
            paddingRight: 50,
            maxWidth: 1270,
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {},
      variants: [
        {
          props: { color: 'gradient' },
          style: {
            '& > div': {
              display: 'inline-block',
              paddingRight: 4,
              verticalAlign: 'top',
              textTransform: 'uppercase',
              color: palette.primary.main,
              background: palette.gradient.main,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
          },
        },
      ],
      styleOverrides: {},
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: 18,
          fontWeight: 400,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          lineHeight: '2.389em',
        },
        input: {
          display: 'block',
          // padding: '12px 16px',
          height: '2.889em',
          boxSizing: 'border-box',
        },
        inputSizeSmall: {
          padding: '6px 22px',
          minHeight: 32,
        },
      },
    },
    MuiSelect: {
      variants: [
        {
          props: { size: 'medium' },
          style: {},
        },
      ],
      styleOverrides: {},
    },
    MuiTextField: {
      defaultProps: {
        helperText: ' ',
        fullWidth: true,

        variant: 'standard',
      },
      variants: [
        {
          props: { size: 'medium' },
          style: {},
        },
      ],
      styleOverrides: {},
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            border: `1px solid ${palette.primary.main}`,
            color: palette.primary.main,
            borderRadius: 0,
            padding: '14px 28px',
            background: '#FFF',
            '&:hover': {
              color: palette.primary.contrastText,
              background: palette.primary.main,
            },
            '&:focus, &:hover:focus': {
              borderColor: palette.primary.light,
              color: palette.primary.contrastText,
              background: palette.primary.light,
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            borderRadius: 26,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '14px 28px',
        },
        endIcon: {
          '& > *:nth-of-type(1)': {
            fontSize: 24,
          },
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        color: 'inherit',
      },
      styleOverrides: {
        root: {
          color: 'inherit',
          fill: 'currentcolor',
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        color: 'inherit',
        className: 'MuiSvgIcon-root',
      },
      styleOverrides: {
        root: {
          color: 'inherit',
          fill: 'currentcolor',
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        shape: 'rounded',
        size: 'large',
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: palette.primary.main,
          },
        },
      ],
      styleOverrides: {
        root: {},
        ul: {
          '& li:last-child': {
            '& .MuiPaginationItem-icon': {
              transform: 'rotate(180deg)',
            },
          },
        },
      },
    },
    MuiPaginationItem: {
      defaultProps: {
        components: {
          previous: IconArrowLarge,
          next: IconArrowLarge,
        },
      },
      variants: [
        {
          props: { color: 'primary', shape: 'rounded' },
          style: {
            '& .MuiPaginationItem-icon': {
              color: palette.primary.main,
              fill: palette.primary.main,
            },
            '&.Mui-selected, &:hover, &:hover:focus': {
              color: palette.primary.contrastText,
              background: palette.primary.main,
            },
            '&.MuiPaginationItem-previousNext': {
              color: `${palette.primary.main} !important`,
              fill: `${palette.primary.main} !important`,
              background: 'transparent !important',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderBottomLeftRadius: 8,
          margin: '0 4px',
          color: 'inherit',
          ...typography.body3,
          fontWeight: 500,
        },
        sizeLarge: {},
        // selected: {
        //   color: palette.primary.contrastText,
        //   background: palette.primary.main,
        // },
      },
    },
  };
};
