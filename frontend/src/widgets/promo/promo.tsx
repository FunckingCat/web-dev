import React, { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from 'shared/components';
import { SectionComponentProps } from 'shared/types';

import { Form } from '../form';
import styles from './promo.module.scss';

export const Promo: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.hero, className)} {...props}>
      <Container className={styles.content}>
        <Text tag="h1" size="xl" weight="bold" className={styles.title}>
          Pure Sneakers
        </Text>
        <Form className={styles.form} variant="filled">
          <Form.Input placeholder="Телефон" />
          <Form.Input placeholder="Время" />
          <Form.Input placeholder="Адрес" />
          <button>Заказать</button>
        </Form>
      </Container>
    </section>
  );
};
