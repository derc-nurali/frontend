import { Stack, Typography } from '@mui/material';
import clsx from 'clsx';
import { get, map } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ComponentType } from 'react';
import useStyles from './styles';

export interface FilterTabsItemProps {
  label: string;
  path: string;
}

export interface FilterTabsProps {
  className?: string;
  links: FilterTabsItemProps[];
}

export const FilterTabs: ComponentType<FilterTabsProps> = ({ className, links }) => {
  const classes = useStyles();
  const router = useRouter();
  const asPath = get(router, ['asPath'], '/');
  const routerPath = asPath.includes('?') ? asPath.substring(0, asPath.indexOf('?')) : asPath;

  const items = map(links, ({ label, path }, idx) => {
    return (
      <Link href={path} key={idx} passHref>
        <Typography
          color={path === routerPath ? 'gradient' : 'inherit'}
          variant="h3"
          component="a"
          className={clsx(classes.link, { [classes.active]: path === routerPath })}
        >
          <div>{label}</div>
        </Typography>
      </Link>
    );
  });
  return (
    <Stack className={clsx(className, classes.root)} direction="row" spacing={8} component="nav">
      {items}
    </Stack>
  );
};
