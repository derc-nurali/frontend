//import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import { themeBreakpoints } from '../../../common/theme/breakpoints';
import { shadows } from '../../../common/theme/shadows';

const options = {
  name: 'base-layout',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      // boxShadow: theme.shadows[2],
      background: theme.palette.background.paper,
      [themeBreakpoints.up('lg')]: {
        boxShadow: shadows[1],
      },
    },
    header: {},
    footer: {},
    main: {},
    drawerRoot: {},
    drawerPaper: {
      paddingTop: theme.spacing(8.5),
      paddingBottom: theme.spacing(8.5),
      borderBottomLeftRadius: 60,
      color: theme.palette.primary.dark,
      [themeBreakpoints.up('lg')]: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
      },
    },
    drawerModal: {},
    close: {},
  }),
  options
);

export default useStyles;
