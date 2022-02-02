import React, { ComponentType } from 'react';
import dataSource from '../../data-sources/resources-links-source.json';
import { useResponsive } from '../../hooks';
import { DataGrid } from '../data-grid';
import useStyles from '../logo/styles';
import { ResourcesLinksCard } from './resources-links-card';

interface ResourcesLinksProps {}

export const ResourcesLinks: ComponentType<ResourcesLinksProps> = () => {
  const r = useResponsive();

  const classes = useStyles();

  return (
    <DataGrid
      data={dataSource}
      spacing={r({ xs: 2, sm: 3 })}
      itemProps={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      renderItem={(item) => <ResourcesLinksCard item={item} />}
    />
  );
};
