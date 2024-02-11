import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/api';
import UserProfile from '../styles/UserProfile.styles';
import styled from 'styled-components';
import Button from './Button.styles';

const Navbar = () => {
  const [user, setUser] = useState();
  const fetchData = async () => {
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledHeader>
      <div className='headerBox'>
        <img src='/icons/linkbrary-logo.svg' alt='linkbrary' />
        {!user && <Button>로그인</Button>}
        {user && <UserProfile title={user.email} image={{ URL: user.profileImageSource, size: '2rem' }} />}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 1.25rem;
  background: var(--color-gray-100);

  .headerBox {
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: space-between;
    padding: 0 5rem;
    width: 100%;
  }

  @media screen and (width < 1123px) {
    .headerBox {
      padding: 0 3rem;
    }
  }
`;

export default Navbar;
