import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 16rem;
  padding: 3.2rem 0 0 0;
  background-color: var(--black);

  .footer-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 192rem;
    height: fit-content;
    padding: 0 10.4rem;
  }

  .copyright {
    color: #676767;
    font-family: Arial;
    font-size: 1.6rem;
  }

  .footer-links {
    display: flex;
    column-gap: 3rem;
    padding-right: 1.8rem;
  }

  .footer-link {
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
    text-decoration: none;
  }

  .sns {
    display: flex;
    column-gap: 1.2rem;
    height: 2rem;
  }

  /* tablet & mobile */
  @media screen and (min-width: 375px) and (max-width: 1199px) {
    padding: 32px;

    .footer-box {
      display: grid;
      grid-template:
        "footer-links sns"
        "copyright ."
        /1fr 1fr;
      row-gap: 3.75rem;
      align-items: center;
      padding: 0 32px;
    }

    .copyright {
      justify-content: flex-start;
      grid-area: copyright;
    }

    .footer-links {
      grid-area: footer-links;
    }

    .sns {
      justify-content: flex-end;
      grid-area: sns;
    }
  }
`;
