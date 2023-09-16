import { ComponentProps, PropsWithChildren } from 'react';

export type ListProps = PropsWithChildren<ComponentProps<'ul'>>;

export type ListItemProps = PropsWithChildren<ComponentProps<'li'>>;

export interface ListWithIconProps extends ListItemProps {
  type?: 'circle' | 'star';
}
