import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { get } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentType } from 'react';
import { toUrl } from '../../../common/utils/format-utils';
import { PHOTO_PLACEHOLDER } from '../../../constants/base.constants';
import { ROUTES } from '../../../constants/routes.constants';
import useStyles from './styles';

interface ActivitiesCardProps {
  className?: string;
  item: Record<string, any>;
}

export const ActivitiesCard: ComponentType<ActivitiesCardProps> = ({ className, item }) => {
  const { title, cover } = item;
  const img = get(cover, 'thumbnails.medium.url', PHOTO_PLACEHOLDER);
  const url = toUrl(ROUTES.ACTIVITIES.ROOT, item);
  const classes = useStyles();

  return (
    <Box component={Link} href={url}>
      <a className={clsx(classes.root, className)} title={title}>
        <div className={classes.media}>
          <Image src={img} width={370} height={249} alt={title} />
        </div>
        <div className={classes.body}>
          <Typography className={classes.title} variant="subtitle2" component="div">
            {title}
          </Typography>
        </div>
      </a>
    </Box>
  );
};
