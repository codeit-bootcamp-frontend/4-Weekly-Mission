import React from "react"
import * as S from "./FolderCategoryItem.style"

function FolderCategoryItem({ category }) {
  return (
    <li>
      <S.Button $isSelected={category.isSelected}>{category.name}</S.Button>
    </li>
  )
}

export default FolderCategoryItem
