import React, { ComponentType } from 'react';
import clsx from 'clsx';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { get } from 'lodash';
import { USER_PLACEHOLDER } from '../../../constants/base.constants';
import useStyles from './styles';

type StaffLeaderCardTypes = 'small' | 'medium' | 'large';

const IMG_SIZES: Record<StaffLeaderCardTypes, Record<'width' | 'height', number>> = {
  small: {
    width: 55,
    height: 80,
  },
  medium: {
    width: 90,
    height: 120,
  },
  large: {
    width: 150,
    height: 200,
  },
};

interface StaffLeaderCardProps {
  className?: string;
  item: Record<string, any>;
  variant?: StaffLeaderCardTypes;
}

export const StaffCard: ComponentType<StaffLeaderCardProps> = ({
  className,
  item,
  variant = 'medium',
}) => {
  const classes = useStyles();
  const { fullName, position, cover } = item;
  const img = get(cover, 'thumbnails.medium.url', USER_PLACEHOLDER);

  return (
    <Box className={clsx(classes.root, className)}>
      <Grid container spacing={variant === 'small' ? 1.75 : 3.75} alignItems="center">
        <Grid item xs="auto">
          <Box className={clsx(classes.figure)} component="figure">
            <Image {...IMG_SIZES[variant]} src={img} alt={fullName} />
          </Box>
        </Grid>
        <Grid item xs="auto">
          <Typography variant="body1" color="primary.dark" component="div" mb={1.5}>
            {fullName}
          </Typography>
          <Typography
            variant="caption"
            color="primary.dark"
            component="div"
            sx={{ textTransform: 'uppercase' }}
          >
            {position}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
