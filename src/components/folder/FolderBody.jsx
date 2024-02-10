import React, { useContext } from "react"
import Wrapper from "../layout/Wrapper"
import { FolderSearchBar, FolderCardList } from "./"
import Loading from "../UI/Loading"
import { FolderContext } from "../../context/FolderContext"
import ErrorCard from "../UI/ErrorCard"

function FolderBody() {
  const { isLoading, data, hasError } = useContext(FolderContext)

  const renderLoading = isLoading && <Loading />
  const renderSuccess = !isLoading && data && !hasError && (
    <>
      <FolderSearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
      <FolderCardList data={data} />
    </>
  )
  const renderFailed = hasError && <ErrorCard>{hasError.message}</ErrorCard>

  return (
    <section className="folderBody">
      <Wrapper>
        {renderLoading}
        {renderSuccess}
        {renderFailed}
      </Wrapper>
    </section>
  )
}

export default FolderBody
