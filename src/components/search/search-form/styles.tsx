import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'search-form',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    datePaper: {
      padding: theme.spacing(5),
      borderRadius: 0,
      borderBottomLeftRadius: 60,
    },
    icon: {
      color: theme.palette.primary.main,
      transform: 'rotate(270deg)',
      '&.MuiSelect-iconOpen': {
        transform: 'rotate(90deg)',
      },
    },
    btn: {},
    search: {
      '& $icon': {
        transform: 'rotate(0)',
      },
      [theme.breakpoints.up('lg')]: {
        '& .MuiInput-root': {
          fontSize: 25,
          lineHeight: '4em',
        },
        '& .MuiInput-input': {
          height: '4em',
        },
        '& $btn': {
          padding: theme.spacing(1.25),
          marginRight: theme.spacing(-1.25),
        },
      },
    },
  }),
  options
);

export default useStyles;
