import { ComponentType } from 'react';
import clsx from 'clsx';
import { Typography } from '@mui/material';
import { map } from 'lodash';
import { DataGrid } from '../../data-grid';
import useStyles from './styles';

interface ActivitiesGridProps {
  className?: string;
  data: any[];
}

export const ActivitiesGrid: ComponentType<ActivitiesGridProps> = ({ className, data }) => {
  const classes = useStyles();

  return (
    <DataGrid
      className={clsx(classes.root, className)}
      data={data}
      spacing={8}
      itemProps={{ xs: 12, md: 4 }}
      renderItem={(item) => (
        <div className={clsx(classes.item)}>
          <Typography
            variant="h4"
            component="h5"
            color="primary.main"
            mb={3.5}
            sx={{ textTransform: 'uppercase' }}
          >
            {item.title}
          </Typography>
          <ul className={clsx(classes.list)}>
            {map(item.steps, (step, idx) => (
              <li key={idx}>
                <Typography variant="body2" component="span" sx={{ fontWeight: 500 }}>
                  {step}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};
