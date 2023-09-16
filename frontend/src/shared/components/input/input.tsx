import React, { ChangeEvent, forwardRef, useState } from 'react';
import cn from 'classnames';

import { InputProps } from './types';
import styles from './input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, rangeClassName, min, max, type, onChange, isGray, isOutlined, ...props }, ref) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }

      setValue(e.target.value);
    };

    return (
      <div className={styles.wrapper}>
        <input
          value={value}
          onChange={handleChange}
          type={type}
          ref={ref}
          className={cn(styles.input, className, {
            [styles.gray]: isGray,
            [styles.outlined]: isOutlined,
          })}
          {...props}
        />
        {type === 'number' && (
          <input
            value={value}
            onChange={handleChange}
            type="range"
            min={min}
            max={max}
            className={cn(styles.range, rangeClassName)}
          />
        )}
      </div>
    );
  },
);
