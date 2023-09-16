import React from 'react';

import { Container, Text } from 'shared/components';
import { Carousel, Subscription } from 'widgets';

import { Page } from '../page';
import styles from './personal.module.scss';

export const Personal = () => {
  return (
    <Page className={styles.personal}>
      <Container>
        <Text tag="h1" color="#000" size="l" className={styles.title}>
          {' '}
          Ваши персональные предложения{' '}
        </Text>
        <div className={styles.subcont}>
          <img className={styles.airforceImg} src="assets/airforce.jpg" alt="airforce" />
          <img className={styles.blackFridayImg} src="assets/black-friday.jpg" alt="blackfriday" />
          <img className={styles.adidasImg} src="assets/adidas.jpg" alt="adidas" />
          <img className={styles.bootsImg} src="assets/partner.jpg" alt="boots" />
        </div>
        <Subscription />
        <Text tag="h2" color="#000" size="l" className={styles.title}>
          {' '}
          История ваших заказов{' '}
        </Text>
        <Carousel
          blocks={[
            { id: 1, image: '../../assets/product/Химчистка_кроссовок_4.png' },
            { id: 2, image: '../../assets/product/Химчистка_кроссовок_10.png' },
            { id: 3, image: '../../assets/product/Химчистка_кроссовок_15.png' },
            { id: 4, image: '../../assets/product/Химчистка_кроссовок_30.png' },
            { id: 5, image: '../../assets/product/Химчистка_кроссовок_33.png' },
            { id: 6, image: '../../assets/product/Химчистка_кроссовок_4.png' },
          ]}
          perPage={3}
        />
      </Container>
    </Page>
  );
};
