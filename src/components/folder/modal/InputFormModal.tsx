import { ChangeEvent, FormEvent, useState } from 'react';
import { styled } from 'styled-components';

import Button from 'components/common/button/Button';
import BackdropModal from 'components/common/modal/BackdropModal';

import PLACEHOLDER from 'constants/FORM_MESSAGE';

const Styled = {
  Title: styled.span`
    margin-bottom: 2.4rem;
    font-size: 2rem;
    font-weight: 700;
  `,

  InputForm: styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  Input: styled.input`
    height: 6rem;
    padding: 1.8rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.color.gray3};
    border-radius: 0.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray4};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
  `,
};

/**
 * InputFormModal - 인풋폼이 포함된 공통 모달 컴포넌트(폴더 이름변경/추가)
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param  {function} onSubmit 폼이 제출될 때 호출되는 함수
 * @param {string} modalTitle 모달 타이틀
 * @param {string} buttonLabel 버튼 라벨(이름)
 */

interface InputFormModalProps {
  setOpen: (open: boolean) => void;
  onSubmit: (value: string) => void;
  modalTitle: string;
  buttonLabel: string;
  item: string;
}

function InputFormModal({ setOpen, onSubmit, modalTitle, buttonLabel, item }: InputFormModalProps) {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(inputValue);
    setOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.Title>{modalTitle}</Styled.Title>
      <Styled.InputForm onSubmit={handleFormSubmit}>
        <Styled.Input
          type="text"
          value={inputValue}
          placeholder={PLACEHOLDER.INPUT_CONTENT}
          onChange={handleInputChange}
        />
        <Button type="submit" style={{ height: '5.1rem' }}>
          {buttonLabel}
        </Button>
      </Styled.InputForm>
    </BackdropModal>
  );
}

export default InputFormModal;
