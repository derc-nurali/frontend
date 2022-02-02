import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'posts-slider',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    slider: {},
    slide: {
      width: 270,
    },
  }),
  options
);

export default useStyles;
