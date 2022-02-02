import React, { ComponentType } from 'react';
import Link from 'next/link';
import { toUrl } from '../../../common/utils/format-utils';
import { ROUTES } from '../../../constants/routes.constants';
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import { get } from 'lodash';
import { PHOTO_PLACEHOLDER } from '../../../constants/base.constants';
import Image from 'next/image';

interface ServicesCardProps {
  className?: string;
  item: Record<string, any>;
}

export const ServicesCard: ComponentType<ServicesCardProps> = ({ className, item }) => {
  const { title, cover } = item;
  const img = get(cover, 'thumbnails.medium.url', PHOTO_PLACEHOLDER);
  const url = toUrl(ROUTES.SERVICES.ROOT, item);

  return (
    <Link href={url}>
      <a className={clsx(className)} title={title}>
        <Box mb={2.125}>
          <Image layout="responsive" src={img} width={270} height={180} alt={title} />
        </Box>
        <Typography variant="body1" component="div" mb={1.875}>
          {title}
        </Typography>
      </a>
    </Link>
  );
};
