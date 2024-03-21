import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: var(--LBrary-Black);
  width: 100%;
  margin: 0;
  padding: 32px 104px 64px;
  height: 160px;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 32px;
    row-gap: 60px;
  }

  & address {
    display: flex;
    gap: 30px;
    font-family: acme;
    font-size: 1.6rem;
    font-weight: 400;
    & a {
      text-decoration: none;
      color: #cfcfcf;
    }
  }

  & p {
    color: #676767;
    text-align: left;
    font-family: acme;
    font-size: 1.6rem;
    font-weight: 400;

    @media (max-width: 767px) {
      grid-row: 2;
    }
  }
`;

export const FooterSocialListSection = styled.section`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
`;
