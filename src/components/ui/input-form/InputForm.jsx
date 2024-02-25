import styled from 'styled-components';

export const InputForm = styled.input`
  width: 280px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid var(--gray20, #ccd5e3);
  background: var(--white, #fff);
  transition: border-color 0.3s ease;
  &:focus {
    border-color: var(--primary, #6d6afe);
  }
  &::placeholder {
    color: var(--gray60, #9fa6b2);
    font-size: 16px;
    line-height: 24px;
  }
`;
