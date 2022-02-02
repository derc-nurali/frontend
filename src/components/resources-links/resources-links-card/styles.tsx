import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { themeBreakpoints } from '../../../common/theme/breakpoints';

const options = {
  name: 'resources-links-card',
};
const transition = 'all .2s ease-in-out';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        '& $img > .default': {
          opacity: 0,
        },
        '& $img > .hover': {
          opacity: 1,
        },
      },
    },
    title: {
      paddingLeft: theme.spacing(2),
      flex: '0 0 calc(100% - 40px)',
      textTransform: 'uppercase',
      [themeBreakpoints.up('lg')]: {
        flex: '0 0 calc(100% - 80px)',
      },
    },
    media: {
      fill: 'currentcolor',
      color: 'currentcolor',
      flex: '0 0 40px',
      [themeBreakpoints.up('lg')]: {
        flex: '0 0 80px',
      },
    },
    img: {
      display: 'block',
      fill: 'currentcolor',
      color: 'currentcolor',
      maxWidth: '100%',
      height: 'auto',
      '& > .default': {
        opacity: 1,
        transition: transition,
      },
      '& > .hover': {
        opacity: 0,
        transition: transition,
      },
    },
  }),
  options
);

export default useStyles;
