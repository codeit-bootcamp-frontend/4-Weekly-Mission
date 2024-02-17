import React from "react"
import * as S from "components/folder/FolderAddButton.style"
import AddFolderIcon from "assets/images/icon/add-folder.svg"

function FolderAddButton() {
  return (
    <S.AddFolder>
      폴더 추가
      <img src={AddFolderIcon} alt="" />
    </S.AddFolder>
  )
}

export default FolderAddButton
