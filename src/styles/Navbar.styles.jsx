import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/api';
import UserProfile from '../styles/UserProfile.styles';
import styled from 'styled-components';

const Navbar = () => {
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState('');

  const fetchData = async () => {
    try {
      const { email, profileImageSource } = await getUser();
      setEmail(email);
      setImageURL(profileImageSource);
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
        <UserProfile title={email} image={{ URL: imageURL, size: '2rem' }} />
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
