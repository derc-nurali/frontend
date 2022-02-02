import { Button, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import clsx from 'clsx';
import { get, map, isEmpty } from 'lodash';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { ComponentType, useState } from 'react';
import { useResponsive } from '../../../hooks';
import { IconArrowLarge } from '../../icons';
import useStyles from './styles';

export interface AboutBranchProps {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  path: string;
}

interface AboutBranchesProps {
  data: AboutBranchProps[];
}

export const AboutBranches: ComponentType<AboutBranchesProps> = ({ data }) => {
  const { t } = useTranslation();
  const r = useResponsive();
  const classes = useStyles();
  const [active, setActive] = useState(0);

  if (isEmpty(data)) return null;

  const title = map(data, (item, idx) => (
    <Typography
      color={active === idx ? 'gradient' : 'inherit'}
      variant={r({ xs: 'h2', lg: 'h2' })}
      className={clsx(classes.link, {
        [classes.active]: active === idx,
      })}
      onClick={() => setActive(idx)}
      component="span"
      role="button"
      key={item.id}
    >
      <div>{item.title}</div>
      {r({ lg: true }) && (
        <SvgIcon className={classes.icon} component={IconArrowLarge} viewBox="0 0 32 32" />
      )}
    </Typography>
  ));

  const activeDescription = get(data, [active, 'description'], '');
  const activePath = get(data, [active, 'path'], '');

  return (
    <Grid container>
      <Grid
        item
        lg="auto"
        container
        mb={r({
          xs: 5,
          lg: 0,
        })}
      >
        <Stack
          className={classes.nav}
          spacing={r({ xs: 6, lg: 0 })}
          direction={r({ xs: 'row', lg: 'column' })}
          component="nav"
        >
          {title}
        </Stack>
      </Grid>
      <Grid
        item
        lg={6}
        sx={{
          ml: 'auto',
        }}
      >
        <Typography variant="subtitle1" mb={4.625}>
          {activeDescription}
        </Typography>

        <Link href={activePath} passHref>
          <Button component="span">{t('action.more', 'Подробнее')}</Button>
        </Link>
      </Grid>
    </Grid>
  );
};
