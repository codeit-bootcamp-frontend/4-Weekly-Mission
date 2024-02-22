import styled from 'styled-components';
import iconLink from '../../../assets/link.svg';
import SubHeader from '../../common/SubHeader';
import TextInput from './TextInput';

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6rem 0 9rem;
  padding: 1.6rem 2rem;
  width: 100%;
  max-width: 80rem;
  border-radius: 1.5rem;
  background-color: var(--color-white);
  &::before {
    content: '';
    display: block;
    margin-right: 1.2rem;
    min-width: 2rem;
    min-height: 2rem;
    background: url(${iconLink}) no-repeat center/contain;
  }
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
  <SubHeader>
    <InputGroup>
      <TextInput type="text" placeholder="링크를 추가해 보세요" image={iconLink} />
      <Button>추가하기</Button>
    </InputGroup>
  </SubHeader>
);

export default AddLinkArea;
