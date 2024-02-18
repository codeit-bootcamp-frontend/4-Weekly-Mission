import React, { useContext } from "react"
import { FolderCategories, FolderAddButton, FolderFeatures } from "."
import * as UI from "components/UI"
import CardList from "components/card/CardList"
import SearchBar from "components/searchBar/SerachBar"
import * as S from "./FolderBody.style"
import { FolderContext } from "../context/FolderContext"

function FolderBody() {
  const {
    link: { linkState },
    util: { title },
  } = useContext(FolderContext)

  const { data: linkData, isLoading: isLinkLoading, hasError: hasLinkError } = linkState

  return (
    <S.Section>
      <S.Wrapper>
        <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        <S.Layout>
          <FolderCategories />
          <FolderAddButton />
        </S.Layout>
        <S.Layout>
          <S.Title>{title}</S.Title>
          {title !== "전체" && <FolderFeatures />}
        </S.Layout>
        <S.Link>
          {isLinkLoading && <UI.Loading top={15} />}
          {hasLinkError && <UI.AlertBanner type="danger">{hasLinkError.message}</UI.AlertBanner>}
          {!isLinkLoading && linkData && <CardList data={linkData} alertMessage={`${title} 폴더의 링크가 없습니다.`} />}
        </S.Link>
      </S.Wrapper>
    </S.Section>
  )
}

export default FolderBody
