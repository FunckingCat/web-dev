import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { CarouselProps } from './types';
import styles from './carousel.module.scss';
import useWindowDimensions from './helper';

export const Carousel: FC<CarouselProps> = ({ className, perPage = 3, blocks }) => {
  const { width } = useWindowDimensions();
  const [itemsPerPage, setItemsPerPage] = useState(perPage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [blockLength, setBlockLength] = useState(32);
  const [transformLenght, setTransformLength] = useState(74.2);

  useEffect(() => {
    if (width > 900) {
      setItemsPerPage(perPage);
    }
    if (width > 670 && width < 900) {
      if (itemsPerPage >= 2) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(perPage);
      }
    }
    if (width < 670) {
      if (itemsPerPage >= 1) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(perPage);
      }
    }

    switch (itemsPerPage) {
      case 1:
        setBlockLength(100);
        setTransformLength(2);
        break;
      case 2:
        setBlockLength(49);
        setTransformLength(55.1);
        break;
      case 4:
        setBlockLength(23.5);
        setTransformLength(85);
        break;
      default:
        setBlockLength(32);
        setTransformLength(74.2);
        break;
    }
  }, [itemsPerPage, perPage, width]);

  const moveBack = () => {
    const moveLenght = -(blocks.length - perPage);
    const isStart = activeIndex === 0;
    if (isStart) {
      setActiveIndex(moveLenght);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const moveNext = () => {
    const moveLength = -(blocks.length - perPage);
    const isEnd = activeIndex === moveLength;
    if (isEnd) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className={cn(styles.carousel, className)}>
      <div className={cn(styles.carouselItems)}>
        {blocks.map((block) => (
          <div
            className={cn(styles.carouselItem)}
            style={{
              transform: `translateX(${activeIndex * (blockLength + transformLenght)}%)`,
              minWidth: `${blockLength}%`,
            }}
            key={block.id}
          >
            <img src={block.image} alt="boots" />
          </div>
        ))}
      </div>
      <button className={cn(styles.carouselButtonBack)} onClick={() => moveBack()}>
        <i className={cn(styles.arrowLeft)} />
      </button>
      <button className={cn(styles.carouselButtonNext)} onClick={() => moveNext()}>
        <i className={cn(styles.arrowRight)} />
      </button>
    </div>
  );
};
