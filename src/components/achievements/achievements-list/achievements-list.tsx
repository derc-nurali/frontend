import { ComponentType } from 'react';
import { DataGrid, DataGridProps } from '../../data-grid';
import { AchievementsCard } from '../achievements-card';

interface AchievementsListProps extends Omit<DataGridProps, 'renderItem'> {}

export const AchievementsList: ComponentType<AchievementsListProps> = ({ ...props }) => {
  return (
    <DataGrid
      {...props}
      renderItem={(item, idx) => (
        <AchievementsCard item={item} variant={(idx + 1) % 2 ? 'inverse' : 'default'} />
      )}
    />
  );
};
