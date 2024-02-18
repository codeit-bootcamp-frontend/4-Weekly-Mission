import styled from 'styled-components';

export const HeaderLayout = styled.header`
  position: ${props => (props.$isStatic ? 'static' : 'fixed')};
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 6rem;
  padding: 1.25rem;
  background: var(--color-gray-100);
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  width: 100%;
  padding: 0 5rem;

  @media screen and (width < 1123px) {
    padding: 0 2rem;
  }
`;

export const HeaderLogo = styled.img`
  width: 10rem;
`;
