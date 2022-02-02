import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const options = {
  name: 'structure-schema',
};

const spacing = 40;

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    list: {
      '& $list': {
        paddingLeft: theme.spacing(5),
        overflow: 'hidden',
      },
    },
    item: {
      paddingTop: spacing / 2,
    },
    __parent: {},
    __child: {},
    box: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid',
      borderBottomLeftRadius: 20,
      textAlign: 'center',
      padding: theme.spacing(2.5),
      width: '100%',
    },
    branch: {
      '&::before, &::after': {
        position: 'absolute',
        bottom: '50%',
        display: 'block',
        border: '1px solid',
        borderTop: 0,
        height: 10 * spacing,
        width: `calc(${spacing / 2}px + 1px)`,
      },
      '&:before': {
        right: `calc(100% + 1px)`,
        borderRight: 0,
        borderBottomLeftRadius: spacing / 2,
      },
      '&:after': {
        left: `calc(100%)`,
        borderLeft: 0,
        borderBottomRightRadius: spacing / 2,
      },
    },
    __center: {
      '&::before': {
        content: '""',
        bottom: 'calc(100% + 1px)',
        left: '50%',
        borderBottomLeftRadius: 0,
        height: spacing + 1,
        width: 1,
      },
    },
    __left: {
      '&::before': {
        content: '""',
      },
    },
    __right: {
      '&::after': {
        content: '""',
      },
    },
    __reverse: {
      '&::before, &::after': {
        content: 'none',
        userSelect: 'none',
        transform: 'scale(1, -1)',
        top: '50%',
        height: 2 * spacing,
      },
    },
    [theme.breakpoints.up('lg')]: {
      item: {
        paddingTop: spacing,
      },
      list: {
        padding: 0,
        '& $list': {
          paddingLeft: 0,
        },
        '&$__parent > $item': {
          paddingLeft: 0,
        },
        '&$__parent > $item > $list': {
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 1fr)',
          columnGap: 2 * spacing,
          overflow: 'hidden',
        },
      },
      branch: {
        '&::before, &::after': {
          borderTop: 0,
          height: 5 * spacing,
          width: `calc(${spacing}px + 1px)`,
        },
        '&:before': {
          borderRight: 0,
          borderBottomLeftRadius: spacing / 2,
        },
        '&:after': {
          borderLeft: 0,
          borderBottomRightRadius: spacing / 2,
        },
      },
      __reverse: {
        '&::before, &::after': {
          content: '""',
        },
      },
      __center: {
        '&::before': {
          borderBottomLeftRadius: 0,
          height: spacing + 1,
          width: 1,
        },
      },
    },
  }),
  options
);

export default useStyles;
