import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'about',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    text: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5,
      '& h1,& h2,& h3,& h4,& h5,& h6': {
        lineHeight: '1.3',
        margin: theme.spacing(0, 0, 3),
        fontSize: 40,
        fontFamily: 'Oswald',
        textTransform: 'uppercase',
        letterSpacing: '-0.04em',
        color: theme.palette.primary.main,
      },
      '& p': {
        '&:not(:last-child)': {
          marginBottom: theme.spacing(3),
        },
      },
    },
    figure: {
      margin: 0,
      borderBottomLeft: 40,
    },
  }),
  options
);

export default useStyles;
