import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  margin-top: 4rem;
  background-color: var(--black);

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

export default FooterContainer;