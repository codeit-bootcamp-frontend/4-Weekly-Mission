import React from 'react';
import { HeaderWrapper, Logo } from './Header.style';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <img src="/images/logo.svg" alt="Linkbrary" />
    </HeaderWrapper>
  );
};
