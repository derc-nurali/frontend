import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { themeBreakpoints } from '../../common/theme/breakpoints';

const options = {
  name: 'section',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      overflow: 'hidden',
    },
    container: {},
    default: {},
    rounded: {
      borderBottomLeftRadius: theme.spacing(7.5),
      [themeBreakpoints.up('lg')]: {
        borderBottomLeftRadius: theme.spacing(15),
      },
    },
  }),
  options
);

export default useStyles;
