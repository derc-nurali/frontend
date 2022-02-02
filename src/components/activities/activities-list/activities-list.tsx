import { ComponentType } from 'react';
import { ActivitiesCard } from '../activities-card';
import { DataGrid, DataGridProps } from '../../data-grid';

interface ActivitiesListProps extends Omit<DataGridProps, 'renderItem'> {}

export const ActivitiesList: ComponentType<ActivitiesListProps> = ({ ...props }) => {
  return <DataGrid {...props} renderItem={(item) => <ActivitiesCard item={item} />} />;
};
