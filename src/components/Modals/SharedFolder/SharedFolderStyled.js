import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
`;

export const SharedButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const IconText = styled.p`
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-align: center;
  color: var(--gray100);
`;
