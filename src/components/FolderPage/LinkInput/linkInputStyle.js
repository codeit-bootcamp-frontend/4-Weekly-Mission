import styled from 'styled-components';
import linkIcon from '../../../assets/icons/link.svg';

export const LinkContainer = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--background-color);
  padding: 3.75rem 0 5.62rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 4.3rem;
  max-width: 800px;
  margin: 0 2rem;
  border-radius: 0.9375rem;
  border: 1px solid #6d6afe;
  background: #fff;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const LinkInputStyle = styled.input`
  flex-grow: 1;
  padding: 0.9375rem 2.5rem;
  border-radius: 0.925rem;
  border: none;
  background: url(${linkIcon}) no-repeat 1rem center / 20px 20px;
  font-size: 1rem;
  color: #333;
  outline: none;
  padding-right: 1rem;
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  color: #f5f5f5;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  margin-right: 1rem;
  width: 5rem;
  height: 2.3rem;
  padding: 0.625rem 1rem;
  cursor: pointer;
`;
