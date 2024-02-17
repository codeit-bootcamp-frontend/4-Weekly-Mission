import React from "react"
import * as S from "./FolderCategoryItem.style"

function FolderCategoryItem({ category }) {
  return <S.Button $isSelected={category.isSelected}>{category.name}</S.Button>
}

export default FolderCategoryItem
