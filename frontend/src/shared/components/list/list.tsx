import React, { FC } from 'react';
import cn from 'classnames';

import { ListProps, ListWithIconProps } from './types';
import styles from './list.module.scss';
import { Star } from '../star';

export const List: FC<ListProps> = ({ className, children }) => {
  return <ul className={cn(styles.list, className)}>{children}</ul>;
};

export const ListItem: FC<ListWithIconProps> = ({ className, children, type }) => {
  const itemClassName = cn(styles.item, className, { [styles.star]: type === 'star' });
  return (
    <li className={itemClassName}>
      {type === 'star' && <Star />}
      {children}
    </li>
  );
};
