import React, { useState } from "react"
import * as S from "features/folder/components/FolderFeatures.style"

import ShareIcon from "assets/images/icon/feature-share.svg"
import DeleteIcon from "assets/images/icon/feature-delete.svg"
import NameEditIcon from "assets/images/icon/feature-edit.svg"
import useToggle from "hooks/useToggle"

import Backdrop from "components/modal/Backdrop"
import EditModal from "components/modal/EditModal"
import DeleteFolderModal from "components/modal/DeleteFolderModal"
import ModalPortal from "components/modal/ModalPortal"
import ShareModal from "components/modal/ShareModal"

function FolderFeatures({ categoryName, categoryData }) {
  const { toggle, openToggleHandler, closeToggleHandler } = useToggle()
  const [modalType, setModalType] = useState()
  const getModalType = (clickedModalName) => setModalType(clickedModalName)

  const backdrop = ModalPortal(<Backdrop onCloseModal={closeToggleHandler} />)
  const editFolderModal = ModalPortal(<EditModal onCloseModal={closeToggleHandler} categoryName={categoryName} />)
  const deleteFolderModal = ModalPortal(
    <DeleteFolderModal onCloseModal={closeToggleHandler} categoryName={categoryName} />
  )
  const shareModal = ModalPortal(
    <ShareModal
      onCloseModal={closeToggleHandler}
      categoryData={categoryData.filter((categories) => categories.name === categoryName)[0]}
    />
  )

  const handleOpenModal = (modalName) => {
    getModalType(modalName)
    openToggleHandler()
  }

  return (
    <S.Features>
      {toggle && backdrop}
      {toggle && modalType === "이름변경" && editFolderModal}
      {toggle && modalType === "삭제" && deleteFolderModal}
      {toggle && modalType === "공유" && shareModal}

      <S.FeatureItem>
        <button onClick={handleOpenModal.bind(this, "공유")}>
          <img src={ShareIcon} alt="" />
          <span>공유</span>
        </button>
      </S.FeatureItem>

      <S.FeatureItem>
        <button onClick={handleOpenModal.bind(this, "이름변경")}>
          <img src={NameEditIcon} alt="" />
          <span>이름변경</span>
        </button>
      </S.FeatureItem>

      <S.FeatureItem>
        <button onClick={handleOpenModal.bind(this, "삭제")}>
          <img src={DeleteIcon} alt="" />
          <span>삭제</span>
        </button>
      </S.FeatureItem>
    </S.Features>
  )
}

export default FolderFeatures
