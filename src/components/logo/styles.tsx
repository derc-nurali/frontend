import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'logo',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      position: 'relative',
    },
    default: {},
    inherit: {
      color: 'inherit',
    },
    link: {
      display: 'block',
    },
    img: {
      display: 'block',
      color: 'inherit',
      fill: 'currentColor',
    },
    '@global': {
      '.logo': {
        display: 'inline-flex',
        position: 'relative',
      },
      '.logo-part': {
        fill: 'currentcolor',
      },
      '.logo-part-1': {
        color: theme.palette.primary.light,
      },
      '.logo-part-2': {
        color: theme.palette.primary.main,
      },
      '.logo-part-3': {
        color: theme.palette.primary.dark,
      },
      '.logo-text': {
        display: 'none',
      },
      // modificators
      '.logo--inherit': {
        '& .logo-part': {
          color: 'inherit',
        },
      },

      '.logo--en': {
        '& .logo-text-en': {
          display: 'block',
        },
      },

      '.logo--ru': {
        '& .logo-text-ru': {
          display: 'block',
        },
      },

      '.logo--uz': {
        '& .logo-text-uz': {
          display: 'block',
        },
      },
    },
  }),
  options
);

export default useStyles;
