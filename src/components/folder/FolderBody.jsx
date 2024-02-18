import React, { useContext, useEffect, useState } from "react"
import * as S from "./FolderBody.style"
import SearchBar from "components/shared/searchBar/SerachBar"
import EmptyData from "./EmptyData"
import FolderAddButton from "./FolderAddButton"
import FolderCategories from "./FolderCategories"
import FolderFeatures from "./FolderFeatures"
import CardList from "components/card/CardList"
import Loading from "components/UI/Loading"
import ErrorCard from "components/UI/ErrorCard"
import { GET_FOLDER_API, GET_LINK_API, GET_FOLDER_BY_ID } from "api"
import useHttp from "hooks/useHttp"

function FolderBody() {
  const { state: linkState, fetchRequest: linkFetchRequest } = useHttp()
  const { state: folderState, fetchRequest: folderFetchRequest } = useHttp()

  const { data: linkData, isLoading: isLinkLoading, hasError: hasLinkError } = linkState
  const { data: folderData, isLoading: isFolderLoading, hasError: hasFolderError } = folderState

  const [title, setTitle] = useState("전체")
  const [categories, setCategories] = useState(null)

  const selectedHandler = async (select) => {
    if (select.isSelected) return

    const selectedCategory = categories.map((category) => {
      return category.id === select.id
        ? { ...category, isSelected: !category.isSelected }
        : { ...category, isSelected: false }
    })

    linkFetchRequest(GET_FOLDER_BY_ID(select.id))
    setTitle(select.name)
    setCategories(selectedCategory)
  }

  useEffect(() => {
    linkFetchRequest(GET_LINK_API)
    folderFetchRequest(GET_FOLDER_API)
  }, [linkFetchRequest, folderFetchRequest])

  useEffect(() => {
    folderData?.data && setCategories(folderData.data)
  }, [folderData])

  return (
    <S.Section>
      <S.Wrapper>
        <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        <S.Layout>
          <FolderCategories title={title} folder={folderState} onSelectHandler={selectedHandler} />
          <FolderAddButton />
        </S.Layout>
        <S.Layout>
          <S.Title>{title}</S.Title>
          <FolderFeatures />
        </S.Layout>
        <S.GridLayout>
          {isFolderLoading && isLinkLoading && <Loading />}
          {hasLinkError && <ErrorCard>{hasLinkError.message}</ErrorCard>}
          {!isLinkLoading && !isFolderLoading && linkData && <CardList data={linkData} />}
        </S.GridLayout>
      </S.Wrapper>
    </S.Section>
  )
}

export default FolderBody
