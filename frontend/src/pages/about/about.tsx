import React from 'react';

import { Container, Text } from 'shared/components';

import { Page } from '../page';
import styles from './about.module.scss';

export const About = () => {
  return (
    <Page className={styles.about}>
      <Container>
        <Text tag="h1" color="#000" size="l" className={styles.title}>
          {' '}
          О нас{' '}
        </Text>
        <div className={styles.subcont}>
          <Text tag="p" color="#000" size="s" className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Text tag="p" color="#000" size="s" className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </div>
        <div>
          <Text tag="h2" color="#000" size="l" className={styles.aboutTitle}>
            {' '}
            Наша история{' '}
          </Text>
          <div>
            <Text tag="p" color="#000" size="s" className={styles.aboutHistory}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
          </div>
        </div>
      </Container>
    </Page>
  );
};
