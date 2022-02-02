import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'posts-list',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    grid: {},
    item: {},
  }),
  options
);

export default useStyles;
