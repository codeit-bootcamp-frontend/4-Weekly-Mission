import React, { useContext } from "react"
import FolderCategoryItem from "features/folder/components/FolderCategoryItem"

import * as S from "features/folder/components/FolderCategories.style"
import Loading from "components/UI/Loading"
import AlertBanner from "components/UI/AlertBanner"
import { FolderContext } from "../context/FolderContext"

function FolderCategories() {
  const {
    category: { categoryState },
    util: { title, selectedHandler },
  } = useContext(FolderContext)
  const { data: categoryData, isLoading, hasError } = categoryState

  const defaultCategory = [{ id: "all", name: "전체", isSelected: false }]
  const combineCategories = defaultCategory.concat(categoryData?.data)

  return (
    <S.Categories>
      {isLoading && <Loading $isCenter={false} size={30} />}
      {hasError && <AlertBanner type="danger">{hasError.message}</AlertBanner>}
      {categoryData?.data &&
        combineCategories.map((category) => (
          <FolderCategoryItem key={category.id} title={title} category={category} onSelectHandler={selectedHandler} />
        ))}
    </S.Categories>
  )
}

export default FolderCategories
