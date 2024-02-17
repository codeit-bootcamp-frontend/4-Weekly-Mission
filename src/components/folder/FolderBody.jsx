import React from "react"
import * as S from "./FolderBody.style"
import SearchBar from "components/shared/searchBar/SerachBar"
// import EmptyData from "./EmptyData"
import FolderAddButton from "./FolderAddButton"
import FolderCategories from "./FolderCategories"
import FolderFeatures from "./FolderFeatures"

function FolderBody() {
  return (
    <S.Section>
      <S.Wrapper>
        <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        <S.Layout>
          <FolderCategories />
          <FolderAddButton />
        </S.Layout>
        <S.Layout>
          <S.Title>타이틀</S.Title>
          <FolderFeatures />
        </S.Layout>
        <S.GridLayout></S.GridLayout>
        {/* <EmptyData /> */}
      </S.Wrapper>
    </S.Section>
  )
}

export default FolderBody
