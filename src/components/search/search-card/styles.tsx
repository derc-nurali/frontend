import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'search-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'block',
      padding: theme.spacing(6),
      textDecoration: 'none',
      borderBottomLeftRadius: 60,
      background: theme.palette.common.white,
      '& a': {},
    },
    more: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: 0,
      fontWeight: '600',
      cursor: 'pointer',
      textAlign: 'left',
      border: 0,
      background: 'transparent',
      '& svg': {
        marginLeft: theme.spacing(0.5),
        fontSize: 24,
        transform: 'rotate(180deg)',
      },
    },
  }),
  options
);

export default useStyles;
