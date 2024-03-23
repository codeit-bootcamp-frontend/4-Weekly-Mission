import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return (
    <Link to={routes.home}>
      <Img src="/images/linkbraryLogo.png" alt="logo" />
    </Link>
  );
};

const Img = styled.img`
  height: 1.6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;

export default Logo;
