import React, { useState } from "react"
import * as S from "./FolderBody.style"
import SearchBar from "components/shared/searchBar/SerachBar"
// import EmptyData from "./EmptyData"
import FolderAddButton from "./FolderAddButton"
import FolderCategories from "./FolderCategories"
import FolderFeatures from "./FolderFeatures"

const CATEGORIES = [
  { id: 1, name: "전체", isSelected: true },
  { id: 2, name: "즐겨찾기", isSelected: false },
  { id: 3, name: "코딩 팁", isSelected: false },
  { id: 4, name: "채용 사이트", isSelected: false },
  { id: 5, name: "유용한 글", isSelected: false },
  { id: 6, name: "나만의 장소", isSelected: false },
]

function FolderBody() {
  const [title, setTitle] = useState("전체")
  const [categories, setCategories] = useState(CATEGORIES)

  const selectedHandler = (select) => {
    const selectedCategory = categories.map((category) =>
      category.id === select.id ? { ...category, isSelected: !category.isSelected } : { ...category, isSelected: false }
    )

    setTitle(select.name)
    setCategories(selectedCategory)
  }

  return (
    <S.Section>
      <S.Wrapper>
        <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        <S.Layout>
          <FolderCategories categories={categories} onSelectHandler={selectedHandler} />
          <FolderAddButton />
        </S.Layout>
        <S.Layout>
          <S.Title>{title}</S.Title>
          <FolderFeatures />
        </S.Layout>
        <S.GridLayout></S.GridLayout>
        {/* <EmptyData /> */}
      </S.Wrapper>
    </S.Section>
  )
}

export default FolderBody
