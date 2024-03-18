import React from 'react';
import Image from 'next/image';
import { HeaderWrapper } from './Header.style';

function Header() {
  return (
    <HeaderWrapper>
      <Image
        src="/images/logo.svg"
        alt="Linkbrary"
        width={133}
        height={24}
        priority
      />
    </HeaderWrapper>
  );
}

export default Header;
