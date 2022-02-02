import React, { ComponentType } from 'react';
import { IconArrowSmall } from '../icons';
import clsx from 'clsx';
import Link from 'next/link';
import { map } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useResponsive } from '../../hooks';
import useStyles from './styles';
import { Typography, Breadcrumbs as MuiBreadcrumbs, SvgIcon } from '@mui/material';

export interface CrumbProps {
  path?: string;
  label: string;
}

interface BreadcrumbsProps {
  crumbs: CrumbProps[];
  homePageLabel?: string;
  lightMode?: boolean;
}

export const Breadcrumbs: ComponentType<BreadcrumbsProps> = ({ crumbs, lightMode }) => {
  const classes = useStyles();
  const r = useResponsive();
  const { t } = useTranslation();

  const renderItem = ({ path, label }: CrumbProps, idx: number) => {
    if (path) {
      return (
        <Link href={path} key={idx} passHref>
          <Typography variant={r({ xs: 'caption', sm: 'body2' })} component="a" key={idx}>
            {label}
          </Typography>
        </Link>
      );
    }

    return (
      <Typography variant={r({ xs: 'caption', sm: 'body1' })} key={idx} component="span">
        {label}
      </Typography>
    );
  };
  const homepageCrumbsLink = {
    path: '/',
    label: t('breadcrumb.main', 'Главная'),
  };
  const items = map([homepageCrumbsLink, ...crumbs], (item: CrumbProps, idx: number) =>
    renderItem(item, idx)
  );
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      classes={{
        root: clsx(classes.root, { [classes.light]: lightMode }),
        ol: classes.list,
        li: classes.item,
        separator: classes.separator,
      }}
      separator={
        <SvgIcon className={clsx(classes.icon)} component={IconArrowSmall} viewBox="0 0 24 24" />
      }
    >
      {items}
    </MuiBreadcrumbs>
  );
};
