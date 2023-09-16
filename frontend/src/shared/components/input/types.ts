import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  min?: number;
  max?: number;
  rangeClassName?: string;
  isGray?: boolean;
  isOutlined?: boolean;
}
