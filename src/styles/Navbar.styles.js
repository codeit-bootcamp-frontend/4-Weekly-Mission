import styled from 'styled-components';

export const NavbarHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 1.25rem;
  background: var(--color-gray-100);

  @media screen and (width < 1123px) {
    .headerBox {
      padding: 0 3rem;
    }
  }
`;
export const NavbarHeaderBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  padding: 0 5rem;
  width: 100%;
`;
