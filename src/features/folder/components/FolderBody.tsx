import React, { useContext, useState } from "react"
import { FolderCategories, FolderAddButton, FolderFeatures } from "."
import * as UI from "components/UI"
import ArticleList from "components/article/ArticleList"
import SearchBar from "components/searchBar/SerachBar"
import * as S from "./FolderBody.style"
import { FolderContext } from "../context/FolderContext"
import ModalPortal from "components/modal/ModalPortal"
import AddFolderModal from "components/modal/AddFolderModal"
import Backdrop from "components/modal/Backdrop"
import useToggle from "hooks/useToggle"
import DeleteLinkModal from "components/modal/DeleteLinkModal"
import AddMyFolderModal from "components/modal/AddMyFolderModal"

function FolderBody() {
  const {
    link: { state: linkState },
    category: { state: categoryState },
    util: { title },
  } = useContext(FolderContext)

  const { data: linkData, isLoading: isLinkLoading, hasError: hasLinkError } = linkState

  const { toggle, openToggleHandler, closeToggleHandler } = useToggle()
  const [modalTitle, setModalTitle] = useState("")
  const [deletedUrl, setDeletedUrl] = useState("")

  const handleChangeModalTitle = (title: string) => setModalTitle(title)
  const handleSelectedUrl = (url: string) => setDeletedUrl(url)

  const backdrop = ModalPortal(<Backdrop onCloseModal={closeToggleHandler} />)
  const addFolderModal = ModalPortal(<AddFolderModal onCloseModal={closeToggleHandler} />)
  const deleteLinkModal = ModalPortal(<DeleteLinkModal onCloseModal={closeToggleHandler} url={deletedUrl} />)
  const addMyFolderModal = ModalPortal(
    <AddMyFolderModal data={categoryState.data?.data} onCloseModal={closeToggleHandler} />
  )

  return (
    <S.Section>
      {toggle && backdrop}
      {toggle && modalTitle === "폴더 추가" && addFolderModal}
      {toggle && modalTitle === "삭제하기" && deleteLinkModal}
      {toggle && modalTitle === "폴더에 추가" && addMyFolderModal}

      <S.FolderWrapper>
        <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        <S.Layout>
          <FolderCategories />
          <FolderAddButton onOpenModal={openToggleHandler} onChangeModalTitle={handleChangeModalTitle} />
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
              data={linkData?.data}
              onOpenModal={openToggleHandler}
              onChangeModalTitle={handleChangeModalTitle}
              onChangeUrl={handleSelectedUrl}
            />
          )}
        </S.Link>
      </S.FolderWrapper>
    </S.Section>
  )
}

export default FolderBody
