import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import logo from 'assets/logo.svg';
import Button from 'components/common/button/Button';
import UserBtn from 'components/common/gnb/UserBtn';

const Styled = {
  Container: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    width: 100%;
    height: 9.3rem;
    padding: 2rem 20rem;
    background-color: ${({ theme }) => theme.color.background};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function GNB() {
  const isLoggedIn = true;

  return (
    <Styled.Container>
      <Link to="/">
        <img src={logo} alt="linkbrary-logo" />
      </Link>
      {isLoggedIn ? <UserBtn /> : <Button />}
    </Styled.Container>
  );
}

export default GNB;
