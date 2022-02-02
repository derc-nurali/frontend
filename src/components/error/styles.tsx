import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'error-page',
};
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 500,
      height: 'calc(100vh - 58px)',

      [theme.breakpoints.up('sm')]: {
        minHeight: 300,
        height: 'calc(100vh - 92px)',
      },
    },
    errorText: {},
    button: {},
  }),
  options
);

export default useStyles;
