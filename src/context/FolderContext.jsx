import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import { GET_LINKS_API, GET_FOLDER_API } from "api"

export const FolderContext = createContext(null)

export default function FolderContextProvider({ children }) {
  const { state: linkData, fetchRequest: linkRequest } = useHttp()
  const { state: folderData, fetchRequest: folderRequest } = useHttp()

  const transformedData = {
    link: {
      ...linkData,
      data: linkData.data?.data,
    },
    folder: {
      ...folderData,
      data: folderData.data?.data,
    },
  }

  useEffect(() => {
    linkRequest(GET_LINKS_API)
    folderRequest(GET_FOLDER_API)
  }, [linkRequest, folderRequest])

  return <FolderContext.Provider value={transformedData}>{children}</FolderContext.Provider>
}
