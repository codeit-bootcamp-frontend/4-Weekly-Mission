import { FolderBody, FolderHeader } from "features/folder/components"
import FolderContextProvider from "features/folder/context/FolderContext"
import React from "react"

function Folder() {
  return (
    <FolderContextProvider>
      <FolderHeader />
      <FolderBody />
    </FolderContextProvider>
  )
}

export default Folder
