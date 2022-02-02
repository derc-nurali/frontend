import { ComponentType } from 'react';
import { DocumentsCard } from '../documents-card';
import { DataGrid, DataGridProps } from '../../data-grid';

interface DocumentsListProps extends Omit<DataGridProps, 'renderItem'> {}

export const DocumentsList: ComponentType<DocumentsListProps> = ({ ...props }) => {
  return <DataGrid {...props} renderItem={(item) => <DocumentsCard item={item} />} />;
};
