import { ComponentType } from 'react';
import clsx from 'clsx';
import { StaffLeaderCard } from '../staff-leader-card';
import { DataGrid } from '../../data-grid';

interface StaffLeaderGridProps {
  className?: string;
  data: any[];
}

export const StaffLeaderGrid: ComponentType<StaffLeaderGridProps> = ({ className, data }) => {
  return (
    <DataGrid
      className={clsx(className)}
      data={data}
      flexDirection="column"
      columnSpacing={2}
      renderItem={(item) => <StaffLeaderCard item={item} />}
    />
  );
};
