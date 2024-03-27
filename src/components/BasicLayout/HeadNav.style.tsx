import styled from "styled-components";
import { PrimaryButton } from "../PrimaryButton";

export const Nav = styled.nav<{ $isSticky: boolean }>`
  background-color: var(--lb-background);
  position: ${({ $isSticky }) => ($isSticky ? "sticky" : "relative")};
  margin: 0;
  top: 0;
  z-index: 1;

  @media (max-width: 1199px) {
    margin: 0;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 2rem 20rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 2rem 3.2rem;
    margin: 0 auto;
    max-width: 86.4rem;

    & img {
      width: 8.86rem;
    }
  }
`;

export const NavLoginButton = styled(PrimaryButton)`
  width: 12.8rem;

  @media (max-width: 767px) {
    width: 8rem;
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
  }
`;

export const NavProfileSection = styled.section`
  color: var(--lb-gray100);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: 400;

  & img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    font-size: 0;

    & img {
      width: auto;
    }
  }
`;
