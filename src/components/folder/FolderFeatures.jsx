import React from "react"
import * as S from "components/folder/FolderFeatures.style"

import ShareIcon from "assets/images/icon/feature-share.svg"
import DeleteIcon from "assets/images/icon/feature-delete.svg"
import NameEditIcon from "assets/images/icon/feature-edit.svg"

const FeatureListImage = [
  { id: 1, imageSource: ShareIcon, title: "공유" },
  { id: 3, imageSource: NameEditIcon, title: "이름변경" },
  { id: 2, imageSource: DeleteIcon, title: "삭제" },
]

function FolderFeatures() {
  return (
    <S.Features>
      {FeatureListImage.map((item) => (
        <S.FeatureItem key={item.id}>
          <img src={item.imageSource} alt="" />
          <span>{item.title}</span>
        </S.FeatureItem>
      ))}
    </S.Features>
  )
}

export default FolderFeatures
