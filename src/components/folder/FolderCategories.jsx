import React from "react"
import FolderCategoryItem from "components/folder/FolderCategoryItem"

import * as S from "components/folder/FolderCategories.style"

function FolderCategories({ categories, onSelectHandler }) {
  return (
    <S.Categories>
      {categories.map((category) => (
        <FolderCategoryItem key={category.id} category={category} onSelectHandler={onSelectHandler.bind(category.id)} />
      ))}
    </S.Categories>
  )
}

export default FolderCategories
