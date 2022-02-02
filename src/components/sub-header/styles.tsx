import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'sub-header',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    container: {},
    title: {},
    text: {},
    actions: {},
  }),
  options
);

export default useStyles;
