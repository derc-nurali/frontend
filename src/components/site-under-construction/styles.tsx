import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'site-under-construction',
};
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
      justifyContent: 'center',
      minHeight: 500,
      height: 'calc(100vh - 58px)',

      [theme.breakpoints.up('sm')]: {
        minHeight: 300,
        height: 'calc(100vh - 92px)',
      },
    },
    button: {
      color: theme.palette.common.white,
    },
  }),
  options
);

export default useStyles;
