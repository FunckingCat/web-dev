import React, { useEffect, useState, KeyboardEvent, forwardRef } from 'react';
import cn from 'classnames';

import { Star } from '../star';
import { RatingProps } from './types';
import styles from './rating.module.scss';

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ isEditable = false, rating, setRating, className, max = 5, ...props }, ref) => {
    const [starArray, setStarArray] = useState<JSX.Element[]>(new Array(max).fill(null));

    const changeDisplay = (index: number) => {
      if (!isEditable) {
        return;
      }

      changeStarArray(index);
    };

    const changeRating = (rating: number) => {
      if (!isEditable || !setRating) {
        return;
      }

      setRating(rating);
    };

    const handleSpace = (e: KeyboardEvent<HTMLButtonElement>, rating: number) => {
      if (e.code !== 'Space' || !setRating) {
        return;
      }

      setRating(rating);
    };

    const changeStarArray = (currentRating: number) => {
      const updatedArray = starArray.map((star, index) => (
        <button
          key={index}
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(index + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
            isEditable && handleSpace(e, index + 1)
          }
        >
          <Star />
        </button>
      ));

      setStarArray(updatedArray);
    };

    useEffect(() => {
      changeStarArray(rating);
    }, [rating]);

    return (
      <div ref={ref} className={cn(styles.stars, className)} {...props}>
        {starArray.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  },
);
