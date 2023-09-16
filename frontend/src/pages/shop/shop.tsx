import React from 'react';
import { Container } from 'shared/components';
import { Page } from 'pages/page';
import { Card } from 'widgets/card';
import { PRODUCTS } from './constants';
import styles from './shop.module.scss';

// TODO добавить страницу в Header
export const Shop = () => {
  return (
    <Page className={styles.page}>
      <Container className={styles.container}>
        <div className={styles.cart}>
          <img src="assets/shopping-cart.svg" alt="cart" />
          <span className={styles.cartNumber}>0</span>
        </div>
        {PRODUCTS.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </Container>
    </Page>
  );
};
