import React from "react"
import * as S from "./FolderBody.style"
import SearchBar from "components/shared/searchBar/SerachBar"
import EmptyData from "./EmptyData"
import FolderFeatures from "./FolderFeatures"

function FolderBody() {
  return (
    <S.Section>
      <S.Wrapper>
        <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        <FolderFeatures />
        {/* <EmptyData /> */}
      </S.Wrapper>
    </S.Section>
  )
}

export default FolderBody
