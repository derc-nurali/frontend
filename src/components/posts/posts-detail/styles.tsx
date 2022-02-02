import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'posts-detail',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    wrapper: {},
  }),
  options
);

export default useStyles;
