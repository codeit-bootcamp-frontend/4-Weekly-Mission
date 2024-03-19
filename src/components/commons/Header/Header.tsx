import React from 'react';
import Link from 'next/link';
import useAPIData from '@/src/hooks/useAPIData';
import { UserDataType } from '@/src/type';
import { getUserSampleDataAPI } from '@/src/API/API';
import {
  Wrapper,
  HeaderWrapper,
  Logo,
  UserEmail,
  UserImage,
  UserWrapper,
} from './Header.style';

const Header = () => {
  const { data: userProfile } = useAPIData(getUserSampleDataAPI);
  return (
    <Wrapper>
      <HeaderWrapper>
        <Link href="/">
          <Logo
            src="/images/logo.svg"
            alt="Linkbrary"
            width={133}
            height={24}
          />
        </Link>
        {userProfile ? (
          <UserWrapper>
            <UserImage
              src={(userProfile as UserDataType).image}
              alt="profile"
              width={28}
              height={28}
            />
            <UserEmail>{(userProfile as UserDataType).email}</UserEmail>
          </UserWrapper>
        ) : (
          <div />
        )}
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;
