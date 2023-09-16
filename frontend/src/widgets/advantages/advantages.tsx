import React, { FC } from 'react';
import cn from 'classnames';

import { Text } from 'shared/components';
import { SectionComponentProps } from 'shared/types';

import styles from './advantages.module.scss';

export const Advantages: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.advantages, className)} {...props}>
      <Text tag="p" size="m" className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Text>
    </section>
  );
};
