import React, { useContext } from "react"
import ShareSearchBar from "./ShareSearchBar"
import ShareCardList from "./ShareCardList"
import { ShareContext } from "context/ShareContext"
import Loading from "components/UI/Loading"
import ErrorCard from "components/UI/ErrorCard"
import { Wrapper } from "components/Layout/Layout.style"

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
    <section>
      <Wrapper>
        {renderLoading}
        {renderSuccess}
        {renderFailed}
      </Wrapper>
    </section>
  )
}

export default ShareBody
