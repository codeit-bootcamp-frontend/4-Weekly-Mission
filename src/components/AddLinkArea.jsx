import styled from 'styled-components';
import iconLink from '../assets/link.svg';
// import Button from './Button';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-gray-200);
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 6rem 0 9rem;
  padding: 1.5rem 2rem;
  max-width: 80rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-white);
  &::before {
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    background: url(${iconLink}) no-repeat center/contain;
  }
`;

const Input = styled.input`
  max-width: 100%;
  background-color: inherit;
  line-height: 2.4rem;
  font-size: 1.6rem;
  outline: none;
`;

const Button = styled.button`
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  line-height: 1.7rem;
  font-size: 1.4rem;
  color: var(--color-gray-100);
  font-weight: 600;
  white-space: nowrap;
`;

const AddLinkArea = () => (
  <Main>
    <InputArea>
      <Input />
      <Button>추가하기</Button>
    </InputArea>
  </Main>
);

export default AddLinkArea;
