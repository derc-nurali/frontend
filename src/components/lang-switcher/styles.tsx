import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import typography from '../../common/theme/typography';

const options = {
  name: 'lang-switcher',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    btn: {
      padding: theme.spacing(1),
      fontSize: 16,
      fontWeight: 500,
      '& .MuiButton-endIcon': {
        margin: theme.spacing(0, -0.5, 0, -0.25),
      },
    },
    menu: {
      padding: theme.spacing(3, 0),
    },
    paper: {
      borderRadius: 0,
      borderBottomLeftRadius: theme.spacing(5),
    },
    list: {
      padding: theme.spacing(3, 0),
    },
    item: {
      padding: 0,
    },
    link: {
      padding: theme.spacing(1, 5),
      color: theme.palette.primary.main,
      ...typography.caption,
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
    default: {},
  }),
  options
);

export default useStyles;
