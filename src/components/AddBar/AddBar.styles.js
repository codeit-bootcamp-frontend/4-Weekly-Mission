import styled from 'styled-components';
import { HiOutlineLink } from 'react-icons/hi';

export const AddBarDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 48rem;
  border: 0.1rem solid var(--color-primary);
  border-radius: 8px;
  background: var(--color-white);
  padding: 1rem;
  margin: 3rem 0rem;
`;

export const AddBarLineLink = styled(HiOutlineLink)`
  font-size: 2rem;
  color: var(--color-primary);
`;

export const AddBarInput = styled.input`
  width: 100%;
  outline: none;
  font-size: 1.2rem;
`;
