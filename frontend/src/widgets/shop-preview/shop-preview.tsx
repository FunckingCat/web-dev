import React, { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from 'shared/components';
import { SectionComponentProps } from 'shared/types';
import CleaningKit from 'assets/cleaning-kit.jpg';

import styles from './shop-preview.module.scss';

export const ShopPreview: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.shopPreview, className)} {...props}>
      <Container className={styles.content}>
        <div>
          <Text tag="h2" size="l" weight="bold" className={styles.title}>
            Магазин
          </Text>
          <Text tag="p" size="m" className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <button>Магазин</button>
        </div>
        <img src={CleaningKit} alt="Набор для очистки" className={styles.img} />
      </Container>
    </section>
  );
};
