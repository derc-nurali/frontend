import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'staff-leader-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    figure: {
      margin: 0,
      textAlign: 'center',
      '& img': {
        borderBottomLeftRadius: 40,
      },
    },
    contact: {
      display: 'flex',
      alignItems: 'center',
      '& svg': {
        marginRight: theme.spacing(1.5),
        fontSize: 20,
        color: theme.palette.primary.main,
      },
      '& a': {
        textDecoration: 'none',
      },
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
  }),
  options
);

export default useStyles;
