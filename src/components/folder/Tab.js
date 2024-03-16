import styled, { css } from 'styled-components';

const Tab = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background: #fff;
  color: #000;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;

  &:hover,
  &:active {
    background: var(--primary);
    color: #fff;
  }

  &:focus {
    background: var(--primary);
    color: #fff;
  }
`;

export default Tab;
