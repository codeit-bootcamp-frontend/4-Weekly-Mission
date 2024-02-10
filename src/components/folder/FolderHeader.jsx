import React, { useContext } from "react"
import Wrapper from "../layout/Wrapper"

import "./FolderHeader.css"
import { FolderContext } from "../../context/FolderContext"
import Loading from "../UI/Loading"
import FolderHeaderInfo from "./FolderHeaderInfo"
import ErrorCard from "../UI/ErrorCard"

function FolderHeader() {
  const { isLoading, data, hasError } = useContext(FolderContext)

  const renderLoading = isLoading && !data && <Loading />
  const renderSuccess = !isLoading && !hasError && data && <FolderHeaderInfo data={data} />
  const renderFailed = hasError && <ErrorCard>{hasError.message}</ErrorCard>

  return (
    <section className="folderHeader">
      <Wrapper className="folderHeader-container">
        {renderLoading}
        {renderSuccess}
        {renderFailed}
      </Wrapper>
    </section>
  )
}

export default FolderHeader
