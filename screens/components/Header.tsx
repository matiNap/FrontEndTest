import React, { ReactNode } from 'react';
import { Header } from 'react-native-simple';

interface Props {
  children: ReactNode | ReactNode[];
}

export default ({ children }: Props) => {
  return (
    <Header
      translucent
      shadow="default"
      height={115}
      backgroundColor="accent"
    >
      {children}
    </Header>
  );
};
