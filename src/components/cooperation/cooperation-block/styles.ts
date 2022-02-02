import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'cooperation-block',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      '& p': {
        marginTop: 0,
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    figure: {
      margin: 0,
      textAlign: 'center',
      '& img': {
        borderBottomLeftRadius: 40,
      },
    },
  }),
  options
);

export default useStyles;
