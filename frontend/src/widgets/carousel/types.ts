import { ComponentProps } from 'react';

interface block {
  id: number;
  image?: string;
}

export interface CarouselProps extends ComponentProps<'div'> {
  blocks: block[];
  perPage?: number;
}
