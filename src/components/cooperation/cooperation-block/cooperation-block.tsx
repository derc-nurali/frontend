import React, { ComponentType } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { get } from 'lodash';
import { PHOTO_PLACEHOLDER } from '../../../constants/base.constants';
import { Grid, Typography, Box } from '@mui/material';
import clsx from 'clsx';
import useStyles from './styles';

interface AboutCooperationBlockProps {
  className?: string;
  data: Record<string, any>;
}

export const CooperationBlock: ComponentType<AboutCooperationBlockProps> = ({
  className,
  data,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const title = get(data, 'title', t('cooperation', 'Сотрудничество'));
  const description = get(data, 'description', '');
  const img = get(data, 'cover.thumbnails.medium.url', PHOTO_PLACEHOLDER);

  return (
    <Grid className={clsx(className, classes.root)} container spacing={10}>
      <Grid item xs={12} md={6} xl="auto">
        <Box component="figure" className={clsx(classes.figure)}>
          <Image src={img} width={520} height={370} alt={title} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} xl={6}>
        <Typography
          variant="body2"
          component="div"
          mt={0}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Grid>
    </Grid>
  );
};
