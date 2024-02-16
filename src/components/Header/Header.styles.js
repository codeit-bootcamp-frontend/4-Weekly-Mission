import styled from 'styled-components';

export const HeaderLayout = styled.header`
  position: ${props => (props.$isStatic ? 'static' : 'fixed')};
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 0 5rem;
  width: 100%;

  @media screen and (width < 1123px) {
    padding: 0 2rem;
  }
`;

export const HeaderLogo = styled.img`
  width: 1.8rem;
`;
