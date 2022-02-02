//import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'filter-tabs',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    nav: {
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(0, 3.75),
        margin: theme.spacing(0, -3.75),
        overflowX: 'auto',
      },
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      userSelect: 'none',
      cursor: 'pointer',
      color: theme.palette.common.white,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      '&:not($active)': {
        textShadow: `1px 0 0 ${theme.palette.primary.main}, -1px 0 0 ${theme.palette.primary.main}, 0 1px 0 ${theme.palette.primary.main}, 0 -1px 0 ${theme.palette.primary.main}, 1px 1px ${theme.palette.primary.main}, -1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px 1px 0 ${theme.palette.primary.main}`,
      },
    },

    active: {
      '& > $icon': {
        transform: 'rotate(180deg)',
        opacity: 1,
        // transition: theme.transitions.create([''transform']),
      },
    },
    icon: {
      position: 'absolute',
      right: '-1em',
      opacity: 0,
      color: theme.palette.primary.main,
      fontSize: 32,
      transform: 'rotate(0)',
    },
  }),
  options
);

export default useStyles;
