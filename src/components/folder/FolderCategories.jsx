import React from "react"
import FolderCategoryItem from "components/folder/FolderCategoryItem"

import * as S from "components/folder/FolderCategories.style"
import Loading from "components/UI/Loading"
import { ErrorCard } from "components/UI/ErrorCard.style"

function FolderCategories({ title, folder, onSelectHandler }) {
  const { data: folderData, isLoading, hasError } = folder

  const defaultData = [{ name: "전체", isSelected: true, id: Date.now() }]
  const combineData = folderData?.data && defaultData.concat(folderData.data)

  return (
    <S.Categories>
      {isLoading && <Loading $isCenter={false} size={30} />}
      {combineData?.map((category) => (
        <FolderCategoryItem
          key={category.id}
          title={title}
          category={category}
          onSelectHandler={onSelectHandler.bind(category.id)}
        />
      ))}
    </S.Categories>
  )
}

export default FolderCategories
