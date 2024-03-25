import { useContext, useState, ChangeEvent } from "react"
import { FolderCategories, FolderAddButton, FolderFeatures } from "."
import * as UI from "components/UI"
import ArticleList from "components/article/ArticleList"
import SearchBar from "components/searchBar/SerachBar"
import * as S from "./FolderBody.style"
import { FolderContext } from "../context/FolderContext"

import AddFolderModal from "components/modal-compound/AddFolderModal"
import DeleteLinkModal from "components/modal-compound/DeleteLinkModal"
import AddMyFolderModal from "components/modal-compound/AddMyFolderModal"
import useModal from "../hooks/useModal"
import useDebounce from "hooks/useDebounce"

function FolderBody() {
  const {
    link: { state: linkState },
    category: { state: categoryState },
    util: { title },
  } = useContext(FolderContext)

  const { data: linkData, isLoading: isLinkLoading, hasError: hasLinkError } = linkState
  const { modalValue, handleOpenModal, handleCloseModal: handleResetValue } = useModal()
  const [deletedUrl, setDeletedUrl] = useState("")
  const handleSelectedUrl = (url: string) => setDeletedUrl(url)

  const [searchValue, setSearchValue] = useState("")
  const handleSearchValueReset = () => setSearchValue("")
  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)
  const debounceSearchValue = useDebounce(searchValue, 0.5)

  const filteredLinkData = linkData?.data.filter(
    (linkData: any) =>
      linkData.url?.includes(debounceSearchValue) ||
      linkData.title?.includes(debounceSearchValue) ||
      linkData.description?.includes(debounceSearchValue)
  )

  return (
    <S.Section>
      {modalValue === "폴더 추가" && <AddFolderModal onCloseModal={handleResetValue} />}
      {modalValue === "삭제하기" && <DeleteLinkModal onCloseModal={handleResetValue} url={deletedUrl} />}
      {modalValue === "폴더에 추가" && (
        <AddMyFolderModal data={categoryState.data?.data} onCloseModal={handleResetValue} />
      )}

      <S.FolderWrapper>
        <SearchBar
          type="text"
          placeholder="링크를 검색해 보세요."
          name="search"
          value={searchValue}
          onChange={handleSearchValueChange}
          onReset={handleSearchValueReset}
        />
        <S.Layout>
          <FolderCategories />
          <FolderAddButton onOpenModal={handleOpenModal} />
        </S.Layout>
        <S.Layout>
          <S.Title>{title}</S.Title>
          {title !== "전체" && <FolderFeatures categoryName={title} categoryData={categoryState.data?.data} />}
        </S.Layout>
        <S.Link>
          {isLinkLoading && <UI.Loading top="15" />}
          {hasLinkError && <UI.AlertBanner type="danger">{hasLinkError.message}</UI.AlertBanner>}
          {!isLinkLoading && linkData?.data?.length === 0 ? (
            <UI.AlertBanner type="info">{`${title} 폴더의 링크가 없습니다.`}</UI.AlertBanner>
          ) : (
            <ArticleList
              data={filteredLinkData}
              onModalValueChanage={handleOpenModal}
              onChangeUrl={handleSelectedUrl}
            />
          )}
        </S.Link>
      </S.FolderWrapper>
    </S.Section>
  )
}

export default FolderBody
