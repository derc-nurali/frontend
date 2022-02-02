import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'mega-menu',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
    },
    item: {
      marginBottom: theme.spacing(2.5),
      '&:last-child': {
        marginBottom: 0,
      },
    },
    open: {
      '& $submenu': {
        display: 'block',
      },
      '& $button': {
        '&:after': {
          width: '100%',
        },
      },
      '& $icon': {
        opacity: 1,
      },
    },
    active: {
      borderBottom: (props: any) =>
        props.a11yMode ? `4px solid ${theme.palette.primary.main}` : 0,
      color: theme.palette.primary.main,
      background: theme.palette.gradient.main,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    button: {
      cursor: 'pointer',
      textTransform: 'uppercase',
      textDecoration: 'none',
      maxWidth: '75%',

      '& div': {
        display: 'inline-block',
      },
    },
    submenu: {
      display: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 0,
      margin: 0,
      listStyle: 'none',
      width: '25%',
    },
    subitem: {
      marginBottom: theme.spacing(3.75),
      '&:last-child': {
        marginBottom: 0,
      },
    },
    link: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      userSelect: 'none',
    },
    icon: {
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, 4px) rotate(180deg)',
      color: theme.palette.primary.main,
      fontSize: 32,
      opacity: 0,
    },
    __right: {},
  }),
  options
);

export default useStyles;
