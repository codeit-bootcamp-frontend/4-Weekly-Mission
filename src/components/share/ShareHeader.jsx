import React, { useContext } from "react"
import Wrapper from "components/layout/Wrapper"
import ShareHeaderInfo from "./ShareHeaderInfo"
import Loading from "components/UI/Loading"
import ErrorCard from "components/UI/ErrorCard"
import { ShareContext } from "context/ShareContext"

import "./ShareHeader.css"

function ShareHeader() {
  const { isLoading, data, hasError } = useContext(ShareContext)

  const renderLoading = isLoading && <Loading />
  const renderSuccess = data && <ShareHeaderInfo data={data} />
  const renderFailed = hasError && <ErrorCard>{hasError.message}</ErrorCard>

  return (
    <section className="shareHeader">
      <Wrapper className="shareHeader-container">
        {renderLoading}
        {renderSuccess}
        {renderFailed}
      </Wrapper>
    </section>
  )
}

export default ShareHeader
