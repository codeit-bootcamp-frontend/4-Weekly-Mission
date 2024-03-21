import React, { useContext } from "react"
// import CardList from "components/card/CardList"
import SearchBar from "components/searchBar/SerachBar"
import { ShareContext } from "features/share/context/ShareContext"

import { Wrapper } from "components/Layout/Wrapper.style"
import * as UI from "components/UI"

function ShareBody() {
  const { isLoading, data, hasError } = useContext(ShareContext)

  const renderLoading = isLoading && <UI.Loading />
  const renderSuccess = data && (
    <>
      <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
      {/* <CardList data={data} /> */}
    </>
  )
  const renderFailed = hasError && (
    <UI.AlertBanner>
      {hasError.message}
      {hasError.status}
    </UI.AlertBanner>
  )

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
