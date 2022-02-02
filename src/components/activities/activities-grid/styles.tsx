import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'activities-grid',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    item: {},
    list: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '& li': {
        position: 'relative',
        paddingLeft: theme.spacing(2),
        '&:not(:last-child)': {
          marginBottom: theme.spacing(3),
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 8,
          left: 0,
          width: 0,
          height: 0,
          borderTop: '4px solid transparent',
          borderBottom: '4px solid transparent',
          borderLeft: `8px solid ${theme.palette.primary.main}`,
        },
      },
    },
  }),
  options
);

export default useStyles;
