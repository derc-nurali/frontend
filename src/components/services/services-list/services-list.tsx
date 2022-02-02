import React, { ComponentType } from 'react';
import { DataGrid, DataGridProps } from '../../data-grid';
import { ServicesCard } from '../services-card';

interface ServicesListProps extends Omit<DataGridProps, 'renderItem'> {}

export const ServicesList: ComponentType<ServicesListProps> = (props) => {
  return <DataGrid {...props} renderItem={(item) => <ServicesCard item={item} />} />;
};
