import { ComponentProps, PropsWithChildren } from 'react';

type TagType = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextProps = PropsWithChildren<ComponentProps<TagType>> & {
  tag?: TagType;
  color?: string;
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
  weight?: 'regular' | 'bold';
};
