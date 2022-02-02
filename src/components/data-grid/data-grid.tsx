import { Grid } from '@mui/material';
import { GridSpacing } from '@mui/material/Grid/Grid';
import { FlexboxProps, GridProps, ResponsiveStyleValue } from '@mui/system';
import clsx from 'clsx';
import { isEmpty, map } from 'lodash';
import React, { ComponentType, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Annunciator } from '../annunciator';
import { Loader } from '../loader';

export interface DataGridProps extends GridProps, FlexboxProps {
  className?: string;
  isLoading?: boolean;
  data: any[];
  itemProps?: { [key: string]: any };
  itemClassName?: string;
  spacing?: GridSpacing;
  columnSpacing?: ResponsiveStyleValue<GridSpacing>;
  hiddenCondition?: (item: any) => boolean;
  renderItem: (item: any, idx: number) => ReactNode;
}

export const DataGrid: ComponentType<DataGridProps> = ({
  data,
  renderItem,
  hiddenCondition,
  itemClassName,
  itemProps,
  isLoading = false,
  ...props
}) => {
  const { t } = useTranslation();

  const items = map(data, (item: any, idx: number) => (
    <Grid
      item
      {...itemProps}
      className={clsx(itemClassName)}
      key={idx}
      hidden={hiddenCondition && hiddenCondition(item)}
    >
      {renderItem(item, idx)}
    </Grid>
  ));

  if (isLoading) {
    return <Loader minHeight="50vh" />;
  }

  if (isEmpty(data)) {
    return (
      <Annunciator title={t('results.not.found.title', 'По вашему запросу ничего не найдено')} />
    );
  }

  return (
    <Grid container {...props}>
      {items}
    </Grid>
  );
};
