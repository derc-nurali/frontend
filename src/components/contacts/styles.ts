import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'contacts',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(6, 8.5),
      background: theme.palette.common.white,
    },
    map: {
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.4,
        pointerEvents: 'none',
        background: theme.palette.primary.main,
      },
    },
  }),
  options
);

export default useStyles;
