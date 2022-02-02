//import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'filter-tabs',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    link: {
      cursor: 'pointer',
      color: theme.palette.common.white,
      letterSpacing: '-0.02em',
      textDecoration: 'none',
      textTransform: 'uppercase',
      '&:not($active)': {
        textShadow: `1px 0 0 ${theme.palette.primary.main}, -1px 0 0 ${theme.palette.primary.main}, 0 1px 0 ${theme.palette.primary.main}, 0 -1px 0 ${theme.palette.primary.main}, 1px 1px ${theme.palette.primary.main}, -1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px 1px 0 ${theme.palette.primary.main}`,
      },
    },

    active: {},
  }),
  options
);

export default useStyles;
