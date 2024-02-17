import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 375px;
  background-color: var(--Linkbrary-bg);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 2rem 0;

  @media screen and (max-width: 767px) {
    padding: 1.125rem 0;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 12.5rem;

  @media screen and (max-width: 1124px) {
    margin: 0 auto;
    width: 47rem;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    margin: 0 2rem;
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
`;

export const UserEmail = styled.span`
  color: var(--Linkbrary-gray100);
  font-size: 0.875rem;
  display: inline-block;
`;

export const LoginButton = styled(Link)`
  width: 8rem;
  text-align: center;
  padding: 1rem 1.25rem;
  background: var(--button);
  font-size: 1.125rem;
  border-radius: 0.5rem;
  color: var(--Grey-Light, #f5f5f5);
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 1rem 0.62rem;
    font-size: 0.875rem;
    width: 5rem;
  }
`;
