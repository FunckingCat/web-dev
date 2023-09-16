import { ComponentProps } from 'react';

export interface CardProps extends ComponentProps<'div'> {
  title: string;
  price: number;
  image: string;
}
