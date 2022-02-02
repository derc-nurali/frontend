import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { themeBreakpoints } from '../../common/theme/breakpoints';
import typography from '../../common/theme/typography';

const options = {
  name: 'header',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      paddingTop: theme.spacing(7.5),
      paddingBottom: theme.spacing(9.5),
      [themeBreakpoints.up('lg')]: {
        paddingBottom: theme.spacing(12.75),
      },
    },
    container: {},
    logo: {},
    nav: {},
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      ...typography.body2,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    btn: {},
    lang: {},
    toolbar: {},
    search: {
      [themeBreakpoints.up('lg')]: {
        margin: theme.spacing(3.5, 0, 9),
      },
    },
    megaMenu: {
      [themeBreakpoints.up('lg')]: {
        marginTop: theme.spacing(1),
      },
    },
  }),
  options
);

export default useStyles;
