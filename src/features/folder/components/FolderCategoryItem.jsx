import React from "react"
import * as S from "./FolderCategoryItem.style"

function FolderCategoryItem({ title, category, onSelectHandler }) {
  return (
    <li onClick={onSelectHandler.bind(this, category)}>
      <S.Button $isSelected={title === category.name}>{category.name}</S.Button>
    </li>
  )
}

export default FolderCategoryItem
