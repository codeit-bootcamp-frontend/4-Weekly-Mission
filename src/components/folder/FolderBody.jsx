import React, { useContext, useEffect, useState } from "react"
import * as S from "./FolderBody.style"
import SearchBar from "components/shared/searchBar/SerachBar"
import EmptyData from "./EmptyData"
import FolderAddButton from "./FolderAddButton"
import FolderCategories from "./FolderCategories"
import FolderFeatures from "./FolderFeatures"
import { FolderContext } from "context/FolderContext"
import CardList from "components/card/CardList"
import Loading from "components/UI/Loading"
import ErrorCard from "components/UI/ErrorCard"
import { GET_FOLDER_BY_ID } from "api"
import useHttp from "hooks/useHttp"

function FolderBody() {
  const { link, folder } = useContext(FolderContext)
  const { data, isLoading, hasError } = link

  const { data: folderData, isLoading: isFolderLoading, hasError: hasFolderError } = folder

  const [title, setTitle] = useState(null)
  const [categories, setCategories] = useState(null)

  const selectedHandler = async (select) => {
    if (select.isSelected) return

    const selectedCategory = categories.map((category) => {
      return category.id === select.id
        ? { ...category, isSelected: !category.isSelected }
        : { ...category, isSelected: false }
    })

    const response = await fetch(GET_FOLDER_BY_ID(select.id))
    const responseData = await response.json()

    console.log(responseData)

    setTitle(select.name)
    setCategories(selectedCategory)
  }

  // ! 클릭할 때 마다 데이터 요청.

  useEffect(() => {
    setCategories(folderData)
  }, [folderData])

  // console.log(categories)

  const renderLoading = isLoading && <Loading />
  const renderError = hasError && <ErrorCard>{hasError.messgae}</ErrorCard>
  const renderSuccess = !isLoading && !hasError && data && <CardList data={data} />
  const renderSuccessWithEmpty = renderSuccess && data.length === 0 && <EmptyData />

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
        <S.GridLayout>
          {renderLoading}
          {renderError}
          {renderSuccess}
          {renderSuccessWithEmpty}
        </S.GridLayout>
      </S.Wrapper>
    </S.Section>
  )
}

export default FolderBody
