import React, { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from 'shared/components';
import { SectionComponentProps } from 'shared/types';

import { Form } from '../form';
import styles from './subscription.module.scss';

export const Subscription: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.subscription, className)} {...props}>
      <Container className={styles.content}>
        <Text tag="h2" size="l" weight="bold" className={styles.title}>
          Расчитай свою подписку
        </Text>
        <Form className={styles.form}>
          <Form.Input isGray type="number" min={1} max={30} placeholder="Кол-во пар обуви" />
          <Form.Input isGray type="number" min={1} max={80} placeholder="Частота чистки в год" />
          <button>Купить (может закажем кнопку на фрилансе?)</button>
        </Form>
        <div className={styles.prices}>
          <Text size="xs">Цена в год</Text>
          <Text size="l">20,000</Text>
          <Text size="xs">Сумма скидки</Text>
          <Text size="l">3,000</Text>
        </div>
      </Container>
    </section>
  );
};
