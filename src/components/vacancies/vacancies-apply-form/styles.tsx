import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'vacancies-apply-from',
};
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
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
