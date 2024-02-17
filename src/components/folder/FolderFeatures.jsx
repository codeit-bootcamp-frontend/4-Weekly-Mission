import React from "react"
import * as S from "./FolderFeatures.style"
import FolderCategoryItem from "components/folder/FolderCategoryItem"
import AddFolderIcon from "assets/images/icon/add-folder.svg"

const CATEGORIES = [
  { id: 1, name: "전체", isSelected: true },
  { id: 2, name: "즐겨찾기", isSelected: false },
  { id: 3, name: "코딩 팁", isSelected: false },
  { id: 4, name: "채용 사이트", isSelected: false },
  { id: 5, name: "유용한 글", isSelected: false },
  { id: 6, name: "나만의 장소", isSelected: false },
]

function FolderFeatures() {
  return (
    <S.Features>
      <S.Categories>
        {CATEGORIES.map((category) => (
          <FolderCategoryItem key={category.id} category={category} />
        ))}
      </S.Categories>
      <S.AddFolder>
        폴더 추가
        <img src={AddFolderIcon} alt="" />
      </S.AddFolder>
    </S.Features>
  )
}

export default FolderFeatures
