//import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'loader',
};

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  options
);

export default useStyles;
