//import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'about-target-audience',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    title: {
      fontWeight: 600,
    },
    text: {
      fontWeight: 500,
    },
    media: {},
    img: {
      display: 'block',
    },
    quote: {
      position: 'relative',
      '&::before': {
        position: 'absolute',
        top: -6,
        left: -30,
        display: 'block',
        content: '"“"',
        fontSize: 74,
        lineHeight: 1,
        background: theme.palette.gradient.main,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
    cite: {
      display: 'block',
      marginTop: 10,
    },
    item: {
      paddingRight: 20,
      flex: '0 0 270px',
      maxWidth: 270,
    },
  }),
  options
);

export default useStyles;
