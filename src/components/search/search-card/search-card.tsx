import React, { ComponentType } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { get } from 'lodash';
import { toUrl } from '../../../common/utils/format-utils';
import { IconArrowSmall } from '../../icons';
import { Box, SvgIcon, Typography } from '@mui/material';
import { ROUTES } from '../../../constants/routes.constants';
import { CATEGORY_NEWS } from '../../../constants/posts-categories.constants';
import useStyles from './styles';

interface SearchCardProps {
  className?: string;
  item: Record<string, any>;
}

export const SearchCard: ComponentType<SearchCardProps> = ({ className, item }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { title, shortDescription } = item;

  const category = get(item, ['categories', 0, 'id'], '');
  const route = category === CATEGORY_NEWS ? ROUTES.NEWS.ROOT : ROUTES.SCIENCE.ROOT;
  const url = toUrl(route, item);

  return (
    <Box component={Link} href={url}>
      <a className={clsx(classes.root, className)}>
        <Typography variant="subtitle2" color="primary.main" mb={2}>
          {title}
        </Typography>
        <Typography variant="body2" fontWeight="500" color="primary.dark" component="p" mb={3}>
          {shortDescription}
        </Typography>
        <Typography
          variant="body3"
          color="primary.main"
          className={clsx(classes.more)}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          {t('action.more', 'Подробнее')}
          <SvgIcon component={IconArrowSmall} viewBox="0 0 24 24" />
        </Typography>
      </a>
    </Box>
  );
};
