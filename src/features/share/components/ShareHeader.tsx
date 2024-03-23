import React, { useContext } from "react"
import ShareHeaderInfo from "./ShareHeaderInfo"
import Loading from "components/UI/Loading"
import ErrorCard from "components/UI/AlertBanner"
import { ShareContext } from "features/share/context/ShareContext"

import * as S from "./ShareHeader.style"

function ShareHeader() {
  const { isLoading, data, hasError } = useContext(ShareContext)

  const renderLoading = isLoading && <Loading />
  const renderSuccess = data && <ShareHeaderInfo data={data} />
  const renderFailed = hasError && <ErrorCard>{hasError.message}</ErrorCard>

  return (
    <S.ShareHeader>
      <S.ShareWrapper>
        {renderLoading}
        {renderSuccess}
        {renderFailed}
      </S.ShareWrapper>
    </S.ShareHeader>
  )
}

export default ShareHeader
