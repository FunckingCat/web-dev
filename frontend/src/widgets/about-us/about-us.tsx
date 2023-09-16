import React, { FC } from 'react';
import cn from 'classnames';

import { Container, List, ListItem, Text } from 'shared/components';
import { SectionComponentProps } from 'shared/types';

import styles from './about-us.module.scss';

// TODO переделать List таким образом, чтобы можно было
//  просто в компонент List передавать массив данных, а также добавить звездочку
export const AboutUs: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.aboutUs, className)} {...props}>
      <Container className={styles.content}>
        <Text tag="h2" size="l" weight="bold" className={styles.title}>
          О нас
        </Text>
        <Text tag="p" size="m" className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <List className={styles.list}>
          <ListItem>
            <Text size="m">Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem>
            <Text size="m">Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem>
            <Text size="m">Lorem ipsum dolor sit amet</Text>
          </ListItem>
        </List>
      </Container>
    </section>
  );
};
