import { ComponentProps, FC, PropsWithChildren } from 'react';

import { Input } from 'shared/components';

interface InputProps extends PropsWithChildren<ComponentProps<'form'>> {
  variant?: 'filled' | 'border' | 'transparent';
}

export type FormType = FC<InputProps> & {
  Input: typeof Input;
};
