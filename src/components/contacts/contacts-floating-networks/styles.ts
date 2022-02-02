import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'contacts-floating-networks',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 200,
      right: 0,
      zIndex: 19,
      padding: theme.spacing(1.5),
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      boxShadow: '0px 4px 14px rgba(41, 67, 61, 0.08)',
      background: theme.palette.common.white,
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(2.5),
      },
    },
    btn: {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.primary.dark,
      },
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.up('lg')]: {
        width: 44,
        height: 44,
      },
    },
  }),
  options
);

export default useStyles;
