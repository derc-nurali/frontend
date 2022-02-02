import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'subdivisions-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(6, 8),
      borderBottomLeftRadius: 40,
      background: theme.palette.common.white,
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
