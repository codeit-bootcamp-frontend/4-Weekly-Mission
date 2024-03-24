import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import iconLink from '../../../assets/link.svg';
import SubHeader from '../../common/SubHeader';
import TextInput from './TextInput';
import { modalTypes } from '../../../util/constants';
import Add from '../../common/modal/Add';

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6rem 0 9rem;
  padding: 1.6rem 2rem;
  width: 100%;
  max-width: 80rem;
  height: 6.9rem;
  border: 1px solid var(--color-primary);
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

  @media (max-width: 767px) {
    margin: 2.4rem 0 4rem;
    padding: 0.8rem 1rem;
    height: 5.3rem;

    &::before {
      margin-right: 0.8rem;
      min-width: 1.6rem;
      min-height: 1.6rem;
    }
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

const AddLinkArea = () => {
  const [showModal, setShowModal] = useState(false);
  const [linkString, setLinkString] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkString(e.target.value);
  };

  const handleBtnClick = () => {
    if (linkString.trim() === '') return;
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <SubHeader>
      <InputGroup>
        <TextInput
          type="text"
          placeholder="링크를 추가해 보세요"
          value={linkString}
          onChange={handleInputChange}
          // image={iconLink}
        />
        <Button data-modal={modalTypes.add} onClick={handleBtnClick}>
          추가하기
        </Button>
      </InputGroup>
      {showModal && createPortal(<Add link={linkString} onCloseModal={handleModalClose} />, document.body)}
    </SubHeader>
  );
};

export default AddLinkArea;
