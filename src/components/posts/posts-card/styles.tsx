import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'posts-card',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'block',
      color: 'inherit',
      textDecoration: 'none',
      //width: 270,
    },
    title: {
      color: theme.palette.primary.main,
    },
    media: {
      overflow: 'hidden',
      borderBottomLeftRadius: 60,
    },
    text: {},
  }),
  options
);

export default useStyles;
