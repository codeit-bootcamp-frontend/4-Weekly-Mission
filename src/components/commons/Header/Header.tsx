import React from 'react';
import Link from 'next/link';
import useAPIData from '@/src/hooks/useAPIData';
import { UserDataType } from '@/src/type';
import { getUserSampleDataAPI } from '@/src/API/API';
import * as S from './Header.style';

interface Props {
  fix: boolean | null;
}

const Header = ({ fix }: Props) => {
  const { data: userProfile } = useAPIData<UserDataType>(getUserSampleDataAPI);
  return (
    <S.Wrapper $fix={fix}>
      <S.HeaderWrapper>
        <Link href="/">
          <S.Logo
            src="/images/logo.svg"
            alt="Linkbrary"
            width={133}
            height={24}
            priority
          />
        </Link>
        {userProfile ? (
          <S.UserWrapper>
            <S.UserImage
              src={userProfile.image}
              alt="profile"
              width={28}
              height={28}
            />
            <S.UserEmail>{userProfile.email}</S.UserEmail>
          </S.UserWrapper>
        ) : (
          <div />
        )}
      </S.HeaderWrapper>
    </S.Wrapper>
  );
};

export default Header;
