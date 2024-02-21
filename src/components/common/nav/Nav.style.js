import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  position: ${({ $position }) => $position};
  top: 0;
  width: 100%;
  background-color: #edf7ff;
  z-index: 1;
  .gnb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 9.4rem;
    max-width: 192rem;
    padding: 0 20rem;
  }

  .user-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
  .user-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .user-email {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--Linkbrary-gray100, #373740);
  }

  /* tablet & mobile */
  @media all and (min-width: 375px) and (max-width: 1199px) {
    .gnb {
      padding: 0 3.2rem;
    }
  }
`;
