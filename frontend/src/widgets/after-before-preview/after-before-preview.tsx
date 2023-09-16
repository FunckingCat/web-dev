import React, { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from 'shared/components';
import { SectionComponentProps } from 'shared/types';
import NikeJordanPurple from 'assets/nike-jordan-purple.jpg';

import styles from './after-before-preview.module.scss';

export const AfterBeforePreview: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.afterBeforePreview, className)} {...props}>
      <Container className={styles.content}>
        <img src={NikeJordanPurple} alt="Найки" className={styles.img} />
        <div className={styles.info}>
          <Text tag="h2" size="l" weight="bold" className={styles.title}>
            До / После
          </Text>
          <Text tag="p" size="m" className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <button>Наши работы (пофиг на кнопку)</button>
        </div>
      </Container>
    </section>
  );
};
