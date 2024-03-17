import styled from "styled-components";
import { PrimaryButton } from "./PrimaryButton";

export const Nav = styled.nav`
  background-color: var(--LBrary-Background);
  position: sticky;
  margin: 0;
  top: 0;
  z-index: 1;

  @media (max-width: 1199px) {
    margin: 0;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 20px 200px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 20px 32px;
    margin: 0 auto;
    max-width: 864px;

    & img {
      width: 88.6px;
    }
  }
`;

export const NavLoginButton = styled(PrimaryButton)`
  width: 12.8rem;

  @media (max-width: 767px) {
    width: 80px;
    font-size: 1.4rem;
    padding: 10px 16px;
  }
`;

export const NavProfileSection = styled.section`
  color: var(--LBrary-Gray100);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.4rem;
  font-weight: 400;

  & img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    font-size: 0;

    & img {
      width: auto;
    }
  }
`;
