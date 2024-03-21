import styled from "styled-components";

export const SharePageMain = styled.main`
  max-width: 1060px;
  margin: 40px auto 6rem;

  @media (max-width: 1124px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (max-width: 767px) {
    max-width: 389px;
    padding: 20px 32px;
    margin-bottom: 2rem;
  }
`;
