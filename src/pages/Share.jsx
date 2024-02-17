import ShareBody from "components/share/ShareBody"
import ShareHeader from "components/share/ShareHeader"
import ShareContextProvider from "context/ShareContext"
import React from "react"

function Share() {
  return (
    <ShareContextProvider>
      <ShareHeader />
      <ShareBody />
    </ShareContextProvider>
  )
}

export default Share
