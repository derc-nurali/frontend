import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'annunciator',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
      minHeight: 160,
    },
    title: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
  options
);

export default useStyles;
