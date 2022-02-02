import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { format } from 'date-fns';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentType } from 'react';
import { useThemeChange } from '../../../common/theme/useThemeChange';
import { toUrl } from '../../../common/utils/format-utils';
import { PHOTO_PLACEHOLDER } from '../../../constants/base.constants';
import { ROUTES } from '../../../constants/routes.constants';
import useStyles from './styles';

export type PostVariants = 'news' | 'science';

interface PostsCardProps {
  className?: string;
  item: Record<string, any>;
  variant?: PostVariants;
}

export const PostsCard: ComponentType<PostsCardProps> = ({ className, item, variant = 'news' }) => {
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';
  const classes = useStyles();
  const { i18n } = useTranslation();

  const { title, categories, cover, shortDescription, createdAt, updatedAt } = item;
  const route = variant === 'news' ? ROUTES.NEWS.ROOT : ROUTES.SCIENCE.ROOT;
  const img = get(cover, 'thumbnails.large.url', PHOTO_PLACEHOLDER);
  const url = toUrl(route, item);

  const date = updatedAt || createdAt;
  const category = get(categories, [0, 'title', i18n.language]);

  return (
    <Link href={url}>
      <a className={clsx(classes.root, className)} title={title}>
        <Typography className={classes.title} variant="body1" component="div" mb={1.875}>
          {title}
        </Typography>

        {category && (
          <Typography
            py={0.25}
            px={0.625}
            variant="caption"
            component="b"
            color={'primary.contrastText'}
            bgcolor={'primary.light'}
            sx={{
              display: 'inline-block',
              borderTopLeftRadius: 8,
              lineHeight: '1.5',
              fontSize: 10,
              textTransform: 'uppercase',
              opacity: a11yMode ? 1 : 0.5,
            }}
          >
            {category}
          </Typography>
        )}

        <Box className={classes.media} mb={2.125}>
          <Image layout="responsive" src={img} width={270} height={180} alt={title} />
        </Box>
        {date && (
          <Typography
            variant="caption"
            component="div"
            sx={{ mb: 1.5, opacity: a11yMode ? 1 : 0.5 }}
          >
            {date && format(new Date(date), 'dd.mm.yyyy')}
          </Typography>
        )}
        <Typography className={classes.text} variant="body3" component="div">
          {shortDescription}
        </Typography>
      </a>
    </Link>
  );
};
