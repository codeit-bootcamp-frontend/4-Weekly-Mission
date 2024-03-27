import styled from "styled-components";

export const CardContentKebabMenu = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  text-align: center;
  position: absolute;
  right: -4rem;
  bottom: 3.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    right: 1rem;
  }
`;

export const CardContentKebabMenuDelete = styled.button`
  padding: 0.7rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.671rem;
  color: var(--gray100);
  background-color: white;

  &:hover {
    color: var(--primary);
    background-color: var(--gray10);
  }
`;
