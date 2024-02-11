import React, { useContext } from "react"
import Wrapper from "../layout/Wrapper"
import ShareSearchBar from "./ShareSearchBar"
import ShareCardList from "./ShareCardList"
import Loading from "../UI/Loading"
import ErrorCard from "../UI/ErrorCard"
import { ShareContext } from "../../context/ShareContext"

function ShareBody() {
  const { isLoading, data, hasError } = useContext(ShareContext)

  const renderLoading = isLoading && <Loading />
  const renderSuccess = data && (
    <>
      <ShareSearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
      <ShareCardList data={data} />
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

export default ShareBody
