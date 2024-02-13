import React from 'react';
import { Button as RNButton } from 'react-native';

export type ButtonProps = React.ComponentProps<typeof RNButton> & {
  children?: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return <RNButton {...rest}>{children}</RNButton>;
}
