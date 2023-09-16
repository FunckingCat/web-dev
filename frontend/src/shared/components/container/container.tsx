import React, { FC } from 'react';
import cn from 'classnames';

import { ContainerProps } from './types';
import styles from './container.module.scss';

export const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
};
