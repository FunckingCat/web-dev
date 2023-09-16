import React, { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from 'shared/components';

import { FooterProps } from './types';
import styles from './footer.module.scss';

const telegramIcon = '../../assets/telegram.svg';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <Container className={cn(styles.cont, className)}>
        <div className={cn(styles.wrapper, className)}>
          <a href="https://t.me/joinchat/HltVtDpVhHpiYTEy">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a href="tel:+74950000000">
            <Text tag="p" color="#fff" size="xs" className={cn(styles.number, className)}>
              +7 (495) 000-00-00
            </Text>
          </a>
          <a href="mailto:help@puresneakers.ru">
            <Text tag="p" color="#fff" size="xs" className={cn(styles.mail, className)}>
              help@puresneakers.ru
            </Text>
          </a>
        </div>
        <Text tag="p" color="#fff" size="xs" className={cn(styles.cpr, className)}>
          Copyright (C)
        </Text>
      </Container>
    </footer>
  );
};
