import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'contacts-from',
};
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(6, 8.5),
      // @ts-ignore
      background: theme.palette.rinatBlue.light,
    },
    title: {
      textTransform: 'uppercase',
    },
  }),
  options
);

export default useStyles;
