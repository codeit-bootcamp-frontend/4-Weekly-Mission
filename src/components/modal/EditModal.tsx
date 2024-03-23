import React, { ChangeEvent } from "react"
import Modal from "./Modal"

import styled from "styled-components"
import useChangeTitle from "features/folder/hooks/useChangeTitle"

const Input = styled.input`
  width: 280px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid var(--primary);
  margin: 24px 0 15px 0;
  padding: 0 15px;
  font-size: 16px;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 8px;
  color: var(--white);
`

interface EditModalProps {
  onCloseModal: () => void
  categoryName: string
}

function EditModal({ onCloseModal, categoryName }: EditModalProps) {
  const { title: editInputValue, onChangeTitle: onChangeEditInput } = useChangeTitle(categoryName)
  const handleChangeEditModal = (event: ChangeEvent<HTMLInputElement>) => onChangeEditInput(event.target.value)

  return (
    <Modal onCloseModal={onCloseModal} title="폴더 이름 변경">
      <Input type="text" value={editInputValue} onChange={handleChangeEditModal} />
      <Button>변경하기</Button>
    </Modal>
  )
}

export default EditModal
