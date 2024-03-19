import React from 'react';
import Link from 'next/link';
import {
  Wrapper,
  HeaderWrapper,
  Logo,
  UserEmail,
  UserImage,
  UserWrapper,
} from './Header.style';

const Header = () => (
  <Wrapper>
    <HeaderWrapper>
      <Link href="/">
        <Logo src="/images/logo.svg" alt="Linkbrary" width={133} height={24} />
      </Link>
      <UserWrapper>
        <UserImage
          src="/images/profileimg.png"
          alt="profile"
          width={28}
          height={28}
        />
        <UserEmail>Codeit@codeit.com</UserEmail>
      </UserWrapper>
    </HeaderWrapper>
  </Wrapper>
);

export default Header;
