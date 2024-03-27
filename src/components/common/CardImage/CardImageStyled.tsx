import styled from "styled-components";

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 19.2rem;
  height: 19.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-position: center;
  background-size: 100%;
  transition: background-size 0.3s ease-in-out;

  @media (min-width: 768px) {
    min-height: 20rem;
    height: 20rem;
  }

  &:hover {
    background-size: 130%;
  }
`;

export const Star = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
`;
