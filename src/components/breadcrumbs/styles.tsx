import { alpha, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'breadcrumbs',
};

const transition = 'all .2s ease-in-out';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: theme.spacing(6),
      },
    },

    list: {
      flexWrap: 'wrap',
    },

    item: {
      marginBottom: theme.spacing(1),
      display: 'block',
      '&:last-child': {
        overflow: 'hidden',
      },
      '& a, & span': {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      '& a': {
        color: theme.palette.secondary.main,
        transition: transition,
        '&:hover': {
          color: theme.palette.secondary.light,
        },
        '&:active, &:focus': {
          color: theme.palette.secondary.dark,
        },
      },
      '& span': {
        color: alpha(theme.palette.text.primary, 0.8),
      },
    },

    light: {
      '& svg': {
        color: theme.palette.primary.main,
      },
      '& a': {
        marginTop: 0,
      },

      '& $item': {
        '& span': {
          color: theme.palette.primary.light,
        },

        '& a': {
          color: theme.palette.primary.main,
          '&:hover': {
            color: theme.palette.primary.light,
          },
        },
      },
    },

    separator: {
      margin: theme.spacing(0, 1, 1),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(0, 1.5, 1),
      },
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(0, 2.5, 1),
      },
    },
    icon: {
      fontSize: 16,
      transform: 'rotate(-90deg)',
      color: theme.palette.grey[600],
    },
  }),
  options
);

export default useStyles;
