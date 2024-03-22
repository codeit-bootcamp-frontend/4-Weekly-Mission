import { Link } from "react-router-dom";
import Button from "../sharing/Button";
import styled from "styled-components";
import UserProfile from "./user/UserProfile";
import { User } from "../../utils/types";

type HeaderProps = {
  $fixed: boolean;
};

const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: ${({ $fixed }) => ($fixed ? "fixed" : "static")};
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  padding: 30px 200px;
  padding-bottom: ${({ $fixed }) => !$fixed && "0"};

  background-color: var(--color-background);

  /*태블릿 사이즈*/
  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 30px 32px;
  }
  /*모바일 사이즈*/
  @media (min-width: 375px) and (max-width: 767px) {
    padding: 30px 32px;
  }
`;

interface Props {
  userInfo: User;
  fixed: boolean;
}

const Header = ({ userInfo, fixed }: Props) => {
  return (
    <HeaderContainer $fixed={fixed}>
      <Link to="/">
        <img alt="Linkbrary logo" src="/assets/icons/Linkbrary.svg" />
      </Link>
      {userInfo ? (
        <UserProfile userInfo={userInfo} />
      ) : (
        <Button variant="gradient">로그인</Button>
      )}
    </HeaderContainer>
  );
};

export default Header;
