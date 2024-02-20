import { FolderBody, FolderHeader } from "features/folder/components"
import FolderContextProvider from "features/folder/context/FolderContext"
import React from "react"

function Folder() {
  return (
    <React.Fragment>
      <FolderHeader />
      <FolderContextProvider>
        <FolderBody />
      </FolderContextProvider>
    </React.Fragment>
  )
}

export default Folder
