import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'home',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& $title': {
        marginBottom: 0,
      },
    },
    list: {
      overflow: 'hidden',
      overflowX: 'auto',
      padding: '30px 30px 30px',
      margin: '-30px -30px -30px',
    },
    title: {
      display: 'block',
      textTransform: 'uppercase',
      marginBottom: theme.spacing(8),
    },
    actions: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    btn: {
      padding: 0,
      height: 32,
      width: 32,
      minWidth: 32,
    },
    icon: {
      verticalAlign: 'top',
      height: 32,
      width: 32,
    },
    __right: {
      transform: 'rotate(180deg)',
    },
    welcome: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 calc(100% - 246px)',
      backgroundImage: `url('/images/bg_waves.svg')`,
      backgroundSize: '1440px 636px',
    },
    activities: {
      background: (props: any) =>
        props.a11yMode
          ? theme.palette.primary.dark
          : `url(/images/bg_activity.png) no-repeat 0 100% ${theme.palette.primary.dark}`,
      backgroundImage: (props: any) =>
        props.a11yMode
          ? 'none'
          : `image-set(
        url(/images/bg_activity.png) 1x,
        url(/images/bg_activity.png) 2x,
      );`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    },
    achievements: {},
    news: {},
  }),
  options
);

export default useStyles;
