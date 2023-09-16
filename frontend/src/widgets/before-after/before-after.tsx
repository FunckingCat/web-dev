import React, { FC } from 'react';
import cn from 'classnames';

import { Container } from 'shared/components';
import { SectionComponentProps } from 'shared/types';
import BalenciagaBlack from 'assets/balenciaga-black.jpg';
import BalenciagaGreen from 'assets/balenciaga-cveta-kapusty.jpg';
import Yeezy from 'assets/yeezy.jpg';

import styles from './before-after.module.scss';

export const BeforeAfter: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.beforeAfter, className)} {...props}>
      <Container className={styles.content}>
        <img src={BalenciagaBlack} alt="Черные баленсиаги" />
        <img src={BalenciagaGreen} alt="Баленсиаги цвета капусты" />
        <img src={Yeezy} alt="Изи бусты" />
      </Container>
    </section>
  );
};
