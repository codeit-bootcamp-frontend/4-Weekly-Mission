import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background-color: var(--gray-light);
  max-width: 106rem;
  height: 4.3rem;
  gap: 1rem;

  @media (min-width: 768px) {
    height: 5.4rem;
  }
`;

export const SearchBarIconContainer = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
`;

export const SearchBarInput = styled.input`
  width: 95%;
  font-size: 1.4rem;
  background-color: var(--gray-light);

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 150%;
  }

  &::placeholder {
    color: var(--text-content-gray);
  }
`;

export const SearchBarClearButton = styled.button`
  color: var(--white);
  background-color: var(--gray20);
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  text-align: center;
`;
