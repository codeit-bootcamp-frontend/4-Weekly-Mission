import React, { ChangeEvent } from "react"
import Modal from "./Modal"

import styled from "styled-components"
import useChangeTitle from "features/folder/hooks/useChangeTitle"

const Input = styled.input`
  width: 280px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid var(--gray3);
  margin: 24px 0 15px 0;
  padding: 0 15px;
  font-size: 16px;

  &:focus {
    border: 1px solid var(--primary);
  }
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 8px;
  color: var(--white);
`

interface AddFolderModalProps {
  onCloseModal: () => void
}

function AddFolderModal({ onCloseModal }: AddFolderModalProps) {
  const { title: inputValue, onChangeTitle: onChanageInputValue } = useChangeTitle("")
  const handleChangeEditModal = (event: ChangeEvent<HTMLInputElement>) => onChanageInputValue(event.target.value)

  return (
    <Modal onCloseModal={onCloseModal} title="폴더 추가">
      <Input type="text" value={inputValue} onChange={handleChangeEditModal} placeholder="내용을 입력해주세요." />
      <Button>추가하기</Button>
    </Modal>
  )
}

export default AddFolderModal
