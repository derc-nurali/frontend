import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'input-date-range',
};
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    paper: {
      padding: theme.spacing(0, 3, 3),
      borderRadius: 0,
      borderBottomLeftRadius: 60,
      '&>div': {
        overflow: 'visible',
      },
    },
    textField: {
      userSelect: 'none',
    },
    calendar: {
      margin: theme.spacing(0, -3, 0),
      '&>div': {
        '&>div': {
          borderRight: '0 !important',
          '&>div': {
            '&:not(.PrivatePickersSlideTransition-root)': {
              '& .MuiButtonBase-root': {
                color: theme.palette.primary.main,
              },
              '& .MuiTypography-subtitle1': {
                fontSize: 18,
                fontWeight: 600,
                color: theme.palette.primary.dark,
              },
            },
          },
        },
      },
    },
    [theme.breakpoints.up('lg')]: {
      paper: {
        padding: theme.spacing(0, 5, 5),
      },
      calendar: {
        margin: theme.spacing(0, -5, 0),
      },
    },
  }),
  options
);

export default useStyles;
