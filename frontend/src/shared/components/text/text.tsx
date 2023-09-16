import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';

import { TextProps } from './types';
import styles from './text.module.scss';

const fontSizes = {
  xxs: '14px',
  xs: '18px',
  s: '20px',
  m: '24px',
  l: '54px',
  xl: '98px',
};

export const Text: FC<TextProps> = ({
  tag: Tag = 'div',
  color,
  size = 'xs',
  className,
  children,
  weight = 'regular',
  ...props
}) => {
  const style: CSSProperties = {
    color,
    fontSize: fontSizes[size],
    fontWeight: weight,
  };

  return (
    <Tag className={cn(styles.text, className)} style={style} {...props}>
      {children}
    </Tag>
  );
};
