import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'documents-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'block',
      padding: theme.spacing(3.75, 5),
      borderBottomLeftRadius: 60,
      color: theme.palette.primary.dark,
      textDecoration: 'none',
      width: '100%',
      background: theme.palette.background.paper,
      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
    text: {
      textDecoration: 'none',
    },
  }),
  options
);

export default useStyles;
