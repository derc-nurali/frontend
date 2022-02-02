import clsx from 'clsx';
import { isEmpty, map } from 'lodash';
import React, { ComponentType, ReactNode, useEffect, useState } from 'react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export interface SwipyProps extends SwiperOptions {
  data?: any[];
  renderItem: (item: any, idx: number) => ReactNode;
  onChange?: (idx: number) => void;
  slideTo?: number;
  className?: string;
  itemClassName?: string;
  draggable?: boolean;
}

export const Swipy: ComponentType<SwipyProps> = ({
  data,
  renderItem,
  onChange,
  slideTo,
  className,
  itemClassName,
  ...props
}) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(slideTo);
    }

    return;
  }, [slideTo, swiperInstance]);

  const handleChange = (swiperIns: any) => {
    if (onChange) {
      onChange(swiperIns.activeIndex);
    }
  };

  const items = map(data, (item: any, idx: number) => (
    <SwiperSlide className={clsx(itemClassName, [`swiper-slide-${idx}`])} key={idx}>
      {renderItem(item, idx)}
    </SwiperSlide>
  ));

  if (isEmpty(data)) return null;

  return (
    <Swiper
      onSwiper={setSwiperInstance}
      onSlideChange={handleChange}
      className={clsx(className)}
      {...props}
    >
      {items}
    </Swiper>
  );
};
