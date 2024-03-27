import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: var(--lb-black);
  width: 100%;
  margin: 0;
  padding: 3.2rem 10.4rem 6.4rem;
  height: 160px;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3.2rem;
    row-gap: 6rem;
  }

  & address {
    display: flex;
    gap: 3rem;
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
  gap: 1.2rem;
  align-items: center;
  justify-content: flex-end;
`;
