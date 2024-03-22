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

interface Props {
  fix: boolean | null;
}

const Header = ({ fix }: Props) => {
  const { data: userProfile } = useAPIData<UserDataType>(getUserSampleDataAPI);
  return (
    <Wrapper $fix={fix}>
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
              src={userProfile.image}
              alt="profile"
              width={28}
              height={28}
            />
            <UserEmail>{userProfile.email}</UserEmail>
          </UserWrapper>
        ) : (
          <div />
        )}
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;
