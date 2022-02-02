import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'staff-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    figure: {
      margin: 0,
      '& img': {
        // @ts-ignore
        border: `1px solid ${theme.palette.rinatBlue.light} !important`,
        borderBottomLeftRadius: 20,
      },
    },
  }),
  options
);

export default useStyles;
