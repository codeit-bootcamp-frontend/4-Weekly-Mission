import React from "react"
import FolderHeader from "components/folder/FolderHeader"
import FolderBody from "components/folder/FolderBody"
import FolderContextProvider from "context/FolderContext"

function Folder() {
  return (
    <FolderContextProvider>
      <FolderHeader />
      <FolderBody />
    </FolderContextProvider>
  )
}

export default Folder
