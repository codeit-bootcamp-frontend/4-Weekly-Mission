import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  font-weight: 400;
  line-height: 1.193125rem;
  border: 0.0625rem solid var(--primary);
  border-radius: 0.3125rem;
  &:hover,
  &:active {
    background-color: var(--primary);
    color: #fff;
  }
`;
