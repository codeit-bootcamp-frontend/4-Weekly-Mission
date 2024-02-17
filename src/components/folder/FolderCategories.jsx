import React from "react"
import FolderCategoryItem from "components/folder/FolderCategoryItem"

import * as S from "components/folder/FolderCategories.style"

const CATEGORIES = [
  { id: 1, name: "전체", isSelected: true },
  { id: 2, name: "즐겨찾기", isSelected: false },
  { id: 3, name: "코딩 팁", isSelected: false },
  { id: 4, name: "채용 사이트", isSelected: false },
  { id: 5, name: "유용한 글", isSelected: false },
  { id: 6, name: "나만의 장소", isSelected: false },
]

function FolderCategories() {
  return (
    <S.Categories>
      {CATEGORIES.map((category) => (
        <FolderCategoryItem key={category.id} category={category} />
      ))}
    </S.Categories>
  )
}

export default FolderCategories
