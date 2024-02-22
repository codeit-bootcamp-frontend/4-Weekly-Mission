import React from "react"
import { createPortal } from "react-dom"
import * as S from "features/folder/components/FolderFeatures.style"

import ShareIcon from "assets/images/icon/feature-share.svg"
import DeleteIcon from "assets/images/icon/feature-delete.svg"
import NameEditIcon from "assets/images/icon/feature-edit.svg"
import useToggle from "hooks/useToggle"

import Modal, { ModalWithInput } from "components/UI/Modal"
import Backdrop from "components/UI/Backdrop"

const FeatureList = [
  { id: 1, imageSource: ShareIcon, title: "공유", modal: Modal },
  { id: 3, imageSource: NameEditIcon, title: "이름변경", modal: Modal },
  { id: 2, imageSource: DeleteIcon, title: "삭제", modal: Modal },
]

function FolderFeatures() {
  const { toggle, openToggleHandler, closeToggleHandler, changeTitile, title } = useToggle()
  // const { shareToggle, shareToggleHandler } = useToggle()
  // const { deleteToggle, deleteToggleHandler } = useToggle()

  const ModalWithInputHOC = ModalWithInput(Modal)

  const backdrop = createPortal(<Backdrop onClick={closeToggleHandler} />, document.getElementById("modal"))
  const modal = createPortal(
    <ModalWithInputHOC onClick={closeToggleHandler} title={title} />,
    document.getElementById("modal")
  )

  return (
    <S.Features>
      {toggle && backdrop}
      {toggle && modal}

      {FeatureList.map((item) => (
        <S.FeatureItem key={item.id}>
          {/* 이름 변경 */}
          {/* 공유 */}
          {/* 삭제 */}
          <button
            onClick={() => {
              openToggleHandler()
              changeTitile(item.title)
            }}
          >
            <img src={item.imageSource} alt="" />
            <span>{item.title}</span>
          </button>
        </S.FeatureItem>
      ))}
    </S.Features>
  )
}

export default FolderFeatures
