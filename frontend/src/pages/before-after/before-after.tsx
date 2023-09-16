import React from 'react';
import { Container } from 'shared/components';
import { Page } from 'pages/page';
import { PRODUCTS } from './constants';
import styles from './before-after.module.scss';

// TODO добавить страницу в Header
export const BeforeAfter = () => {
  return (
    <Page>
      <Container className={styles.container}>
        <ul className={styles.products}>
          {PRODUCTS.map(({ image }, index) => (
            <li key={index}>
              <img src={`assets/product/${image}`} alt={`Продукт${index}`} />
            </li>
          ))}
        </ul>
      </Container>
    </Page>
  );
};
