import React from "react"
import ShareContextProvider from "features/share/context/ShareContext"
import { ShareBody, ShareHeader } from "features/share/components"

function Shared() {
  return (
    <ShareContextProvider>
      <ShareHeader />
      <ShareBody />
    </ShareContextProvider>
  )
}

export default Shared
