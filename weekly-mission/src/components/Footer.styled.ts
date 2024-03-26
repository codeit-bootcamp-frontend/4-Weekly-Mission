import styled from "styled-components";

export const Footer = styled.footer`
  padding-top: 6rem;
`;

export const FooterInner = styled.div`
  height: 16rem;
  background-color: #111322;
  padding: 3.2rem 10% 6.4rem;
  display: flex;
  justify-content: space-between;
  color: #676767;
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 790px) {
    flex-wrap: wrap;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 790px) {
    order: 2;
    float: left;
    width: 50%;
  }
`;

export const CodeitText = styled.p`
  @media (max-width: 790px) {
    order: 3;
    margin-top: 6rem;
  }
`;

export const QuestionTab = styled.div`
  @media (max-width: 790px) {
    order: 1;
    float: right;
    width: 50%;
  }
`;

export const OtherLink = styled.a`
  color: inherit;
  &:first-child {
    margin-right: 3rem;
  }
`;

export const SocialTab = styled.ul`
  display: flex;
  gap: 1.2rem;
  @media (max-width: 790px) {
    justify-content: flex-end;
  }
`;
