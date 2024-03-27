import styled from "styled-components";

export const KebabMenuOriginPosition = styled.div`
  display: flex;
  position: absolute;
  background-image: none;
  top: 21.5rem;
  right: 2rem;
`;

export const KebabDiv = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  top: 1.6rem;
  gap: 0.4rem;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);

  z-index: 1;
`;

export const KebabToggleButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  width: 2.1rem;
  height: 1.7rem;
`;

export const KebabMenuButton = styled.button`
  color: var(--lb-gray100);
  background-color: var(--lb-white);
  border: none;
  width: 10rem;
  background-color: ;
  padding: 0.7rem 1.2rem;
  text-align: center;

  &:hover {
    color: var(--lb-primary-color);
    background-color: var(--lb-gray10);
  }
`;

export const KebabCancel = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  border: none;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  &:hover {
    cursor: default;
  }
`;
