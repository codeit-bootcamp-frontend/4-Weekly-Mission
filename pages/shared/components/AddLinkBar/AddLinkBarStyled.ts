import styled from "styled-components";

export const AddLinkContainer = styled.div`
  background-color: var(--light-blue);
  width: 100%;
  padding: 3.75rem 20rem 5.625rem;
  display: flex;
  justify-content: space-evenly;
`;

export const AddLinkBar = styled.div<{ isEmpty: boolean }>`
  background-color: var(--white);
  padding: 1.6rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  border: 0.1rem solid
    ${({ isEmpty }) => (isEmpty ? "var(--primary)" : "var(--red)")};
  width: 80rem;
  border-radius: 1.5rem;

  @media (max-width: 768px) {
    width: 39rem;
    padding: 0.8rem 1rem;
  }
`;

export const AddLinkInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export const AddLinkIcon = styled.img`
  width: 2rem;
  height: 2rem;

  @media (max-width: 768px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const AddLinkInput = styled.input`
  color: var(--gray60);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.671rem;
  }
`;

export const AddInputButton = styled.button`
  width: 8rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.671rem;
  color: var(--gray-light);
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
`;
