import { Grid } from '@mui/material';
import { BoxProps } from '@mui/system';
import { map } from 'lodash';
import React, { ComponentType } from 'react';
import { PostsCard, PostVariants } from '../posts-card';
import useStyles from './styles';

interface PostsListProps {
  variant?: PostVariants;
  data?: any[];
}

const separateArray = (data: any, size: number) => {
  const result = [];
  for (var i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }
  return result;
};

const gridMap = (i: number, reverse: boolean, variant: PostVariants) => {
  let patern = reverse ? i % 3 === 0 : (i + 1) % 3 === 0;
  if (variant === 'science') {
    patern = !reverse ? i % 3 === 0 : (i + 1) % 3 === 0;
  }

  return patern ? 12 : 6;
};

export const PostsList: ComponentType<PostsListProps & BoxProps> = ({
  variant = 'news',
  data = [],
}) => {
  const classes = useStyles();
  const dataColumns = data && separateArray(data, 3);
  const spacing = 3.75;

  const columns = map(dataColumns, (column: any, j: number) => {
    const items = map(column, (item: any, i: number) => {
      return (
        <Grid item xs={12} md={gridMap(i, j % 2 === 0, variant)} key={`post_item_${i}`}>
          <PostsCard className={classes.item} item={item} key={`post_${i}`} />
        </Grid>
      );
    });
    return (
      <Grid item lg={6} container spacing={spacing} key={`post_column_${j}`}>
        {items}
      </Grid>
    );
  });

  return (
    <Grid container className={classes.grid} spacing={spacing}>
      {columns}
    </Grid>
  );
};
