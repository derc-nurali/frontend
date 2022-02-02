import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'achievements-card',
};
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      color: 'inherit',
      textDecoration: 'none',
      maxWidth: 363,
      paddingRight: theme.spacing(10),
    },
    date: {
      display: 'flex',
      alignItems: 'flex-end',
      height: 92,
      width: '100%',
      opacity: '.7',
    },
    year: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      opacity: '.7',
      overflow: 'hidden',
      marginRight: theme.spacing(-10),
      width: `calc(100% + ${theme.spacing(10)})`,
      '&::after': {
        content: '""',
        display: 'block',
        flex: '0 0 312px',
        borderTop: '3px solid',
        marginLeft: 'auto',
        height: 1,
        width: 312,
        opacit: '.2',
      },
    },
    title: {
      display: '-webkit-box',
      '-webkit-line-clamp': '4',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      height: 92,
      width: '100%',
      '& > *': {
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    default: {},
    inverse: {
      flexDirection: 'column-reverse',
      '& $date': {
        alignItems: 'flex-start',
      },
    },
  }),
  options
);

export default useStyles;
