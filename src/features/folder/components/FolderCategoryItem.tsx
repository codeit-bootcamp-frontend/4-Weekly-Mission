import React from "react"
import * as S from "./FolderCategoryItem.style"

interface FolderCategoryItemProps {
  title: string
  category: any
  onSelectHandler: (selectedCategory: any) => void
}

function FolderCategoryItem({ title, category, onSelectHandler }: FolderCategoryItemProps) {
  return (
    <li onClick={onSelectHandler.bind(null, category)}>
      <S.Button $isSelected={title === category.name}>{category.name}</S.Button>
    </li>
  )
}

export default FolderCategoryItem
