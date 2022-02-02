import clsx from 'clsx';
import React, { ComponentType } from 'react';
import { Swipy, SwipyProps } from '../../swipy';
import { PostsCard } from '../posts-card';
import useStyles from './styles';

interface PostsSliderProps {
  data: any[];
}

export const PostsSlider: ComponentType<PostsSliderProps & Omit<SwipyProps, 'renderItem'>> = ({
  data,
}) => {
  const classes = useStyles();

  return (
    <Swipy
      data={data}
      spaceBetween={30}
      slidesPerView={'auto'}
      navigation={{
        prevEl: '.news-slider-prev',
        nextEl: '.news-slider-next',
      }}
      draggable
      className={clsx(classes.slider)}
      itemClassName={clsx(classes.slide)}
      renderItem={(item) => <PostsCard item={item} />}
      centeredSlides
      centeredSlidesBounds
    />
  );
};
