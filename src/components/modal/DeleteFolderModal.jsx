import React from "react"
import Modal from "./Modal"
import styled from "styled-components"

const CurrentCategoryName = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray2);
  margin: 8px 0 24px 0;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: var(--red);
  border-radius: 8px;
  color: var(--white);
`

function DeleteFolderModal({ onCloseModal, categoryName }) {
  return (
    <Modal onCloseModal={onCloseModal} title="링크 삭제">
      <CurrentCategoryName>{categoryName}</CurrentCategoryName>
      <Button>삭제하기</Button>
    </Modal>
  )
}

export default DeleteFolderModal
