import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'activities-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      userSelect: 'none',
      display: 'block',
      overflow: 'hidden',
      borderBottomLeftRadius: 60,
      color: theme.palette.primary.main,
      textDecoration: 'none',
      maxWidth: 370,
      background: theme.palette.background.paper,
    },
    media: {
      '& > *': {
        verticalAlign: 'top',
      },
    },
    body: {
      padding: theme.spacing(5, 5, 5, 6.25),
    },
    title: {
      lineHeight: 1.3,
    },
  }),
  options
);

export default useStyles;
