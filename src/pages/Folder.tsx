import FixedSearchBar from "components/searchBar/FixedSearchBar"
import { FolderBody, FolderHeader } from "features/folder/components"
import FolderContextProvider from "features/folder/context/FolderContext"
import useIntersection from "hooks/useIntersection"

function Folder() {
  const { ref: searchBarRef, visible: headerVisible } = useIntersection<HTMLDivElement>({ threshold: 0 })
  const { ref: footerRef, visible: footerVisible } = useIntersection<HTMLDivElement>({ threshold: 0 })

  return (
    <FolderContextProvider>
      <div ref={searchBarRef}></div>
      <FolderHeader />
      <FolderBody />
      <div ref={footerRef}></div>
      {!headerVisible && !footerVisible && <FixedSearchBar />}
    </FolderContextProvider>
  )
}

export default Folder
