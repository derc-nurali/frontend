import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'vacancies-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'block',
      padding: theme.spacing(6),
      borderBottomLeftRadius: 60,
      background: theme.palette.common.white,
    },
    form: {
      padding: theme.spacing(6),
      margin: theme.spacing(0, -6, 4),
    },
    toggler: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: 0,
      fontWeight: '600',
      cursor: 'pointer',
      textAlign: 'left',
      border: 0,
      background: 'transparent',
      '& svg': {
        marginLeft: theme.spacing(1),
        fontSize: 12,
        transform: 'rotate(270deg)',
      },
    },
    togglerInverse: {
      '& svg': {
        transform: 'rotate(90deg)',
      },
    },
    text: {
      padding: theme.spacing(5, 0),
      '& h1, & h2, & h3, & h4,& h5, & h6': {
        margin: theme.spacing(0, 0, 3, 0),
        fontSize: 20,
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: 'Oswald',
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
        '& *': {
          color: 'inherit !important',
        },
      },
      '& ul, & ol': {
        padding: 0,
        margin: 0,
        listStylePosition: 'inside',
        '&:not(:last-child)': {
          marginBottom: theme.spacing(5),
        },
      },
      '& ul': {
        listStyle: 'none !important',
        '& li': {
          position: 'relative',
          paddingLeft: theme.spacing(2),
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 6,
            left: 0,
            width: 0,
            height: 0,
            borderTop: '4px solid transparent',
            borderBottom: '4px solid transparent',
            borderLeft: `8px solid ${theme.palette.primary.main}`,
          },
        },
      },
      '& li': {
        '&:not(:last-child)': {
          marginBottom: theme.spacing(3.75),
        },
      },
    },
  }),
  options
);

export default useStyles;
