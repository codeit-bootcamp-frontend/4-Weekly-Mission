import React from "react"
import * as S from "./FolderCategoryItem.style"

function FolderCategoryItem({ category, onSelectHandler }) {
  console.log(category.name, category.isSelected)
  return (
    <li onClick={onSelectHandler.bind(this, category)}>
      <S.Button $isSelected={category.isSelected}>{category.name}</S.Button>
    </li>
  )
}

export default FolderCategoryItem
