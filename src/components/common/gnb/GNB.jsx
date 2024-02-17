import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import useUserInfoQuery from 'hooks/api/user/useUserInfoQuery';
import logo from 'assets/logo.svg';
import Button from 'components/common/button/Button';
import UserBtn from 'components/common/gnb/UserBtn';

const Styled = {
  Container: styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};
  `,
  InnerWrap: styled.div`
    width: 100%;
    height: 9.3rem;
    max-width: 192rem;
    padding: 0 20rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1199px) {
      padding: 0 3.2rem;
    }
  `,
};

function GNB() {
  const { data } = useUserInfoQuery({ userId: 1 });
  const userData = data?.data?.data[0];
  const isLoggedIn = userData !== null;

  return (
    <Styled.Container>
      <Styled.InnerWrap>
        <Link to="/">
          <img src={logo} alt="linkbrary-logo" />
        </Link>
        {isLoggedIn ? (
          <UserBtn userData={userData} />
        ) : (
          <Button style={{ fontSize: '1.8rem', width: '12.8rem' }}>로그인</Button>
        )}
      </Styled.InnerWrap>
    </Styled.Container>
  );
}

export default GNB;
