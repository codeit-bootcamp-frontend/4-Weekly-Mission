import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

import logo from 'assets/logo.svg';
import Button from 'components/common/button/Button';
import UserBtn from 'components/common/gnb/UserBtn';
import sampleAPI from 'api/sampleAPI';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await sampleAPI.getSampleUserInfo();
      const userData = res.data;
      setIsLoggedIn(userData ? true : false);
      setUserData(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Styled.Container>
      <Link to="/">
        <img src={logo} alt="linkbrary-logo" />
      </Link>
      {isLoggedIn ? <UserBtn userData={userData} /> : <Button />}
    </Styled.Container>
  );
}

export default GNB;
