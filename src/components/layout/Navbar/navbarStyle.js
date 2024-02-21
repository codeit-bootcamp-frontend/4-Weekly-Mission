import styled from 'styled-components';
import Button from '../../common/Button/Button';

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: var(--background-color);
  position: ${({ $isFolderPage }) => ($isFolderPage ? 'sticky' : 'static')};
  top: 0;
  left: 0;
  z-index: 999;
  padding: 1.25rem 32px;

  @media (max-width: 767px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
`;

export const NavbarItem = styled.li`
  /* 스타일을 추가 예정 */
`;

export const LogoLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;
`;

export const LoginButton = styled(Button)`
  width: 8rem;
  padding: 1rem 1.25rem;
  border: none;
  font-size: 1.125rem;
  border-radius: 8px;
  color: #fff;
  background: var(--gra-purpleblue-to-skyblue);
  cursor: pointer;
`;

export const UserProfileImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 6px;
  border-radius: 50%;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfileEmail = styled.span`
  margin-left: 6px;

  @media (max-width: 767px) {
    display: none;
  }
`;
