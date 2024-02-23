import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  margin-top: 10rem;
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
  }

  .sns {
    display: flex;
    column-gap: 1.2rem;
    height: 2rem;
  }
  /* mobile */
  @media all and (min-width: 375px) and (max-width: 767px) {
    footer {
      margin-top: 40px;
    }

    .footer-box {
      display: grid;
      grid-template:
        'footer-links sns'
        'copyright .'
        /1fr 1fr;
      row-gap: 60px;
      align-items: center;
      padding: 0 32px;
    }

    .copyright {
      grid-area: copyright;
    }

    .footer-links {
      grid-area: footer-links;
    }

    .sns {
      grid-area: sns;
      justify-content: flex-end;
    }
  }
`;
