import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import typography from '../../common/theme/typography';

const options = {
  name: 'footer',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      color: theme.palette.primary.contrastText,
      ...typography.body3,
      lineHeight: 1.15,
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
    logo: {
      color: 'inherit',
    },
    copy: {
      opacity: 0.5,
    },
    title: {
      display: 'block',
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    text: {},
    nav: {
      '& $link': {
        display: 'inline-flex',
        alignItems: 'center',
      },
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
    icon: {
      opacity: 0.5,
      marginRight: 0.5,
      '&:last-child': {
        marginRight: 0,
      },
    },
  }),
  options
);

export default useStyles;
