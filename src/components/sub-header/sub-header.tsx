import { ComponentType } from 'react';
import { BoxProps, Grid, Typography } from '@mui/material';
import { useResponsive } from '../../hooks';
import { FilterTabs } from '../filter-tabs';
import useStyles from './styles';

interface SubHeaderProps {
  title?: string;
  text?: string;
  actions?: any;
}

export const SubHeader: ComponentType<SubHeaderProps & BoxProps> = ({ title, text, actions }) => {
  const classes = useStyles();
  const r = useResponsive();

  return (
    <>
      <Grid container rowSpacing={3.75}>
        <Grid
          item
          xs={12}
          lg
          sx={{
            maxWidth: r({ lg: '50%' }),
          }}
        >
          {title && (
            <Typography
              className={classes.title}
              variant={r({ xs: 'h3', lg: 'h1' })}
              color="gradient"
              textAlign={r({ xs: 'center', lg: 'left' })}
              component="h1"
            >
              <div>{title}</div>
            </Typography>
          )}
        </Grid>
        {text && r({ lg: true }) && (
          <Grid item lg={6} alignSelf="center">
            <Typography
              className={classes.text}
              variant="subtitle1"
              component="div"
              sx={{
                color: 'primary.dark',
              }}
            >
              {text}
            </Typography>
          </Grid>
        )}
        {actions && (
          <Grid item lg="auto" alignSelf="center" ml={r({ lg: 'auto' })}>
            <FilterTabs links={actions} />
          </Grid>
        )}
      </Grid>
    </>
  );
};
