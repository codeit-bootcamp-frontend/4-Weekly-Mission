import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import { GET_FOLDER_API } from "api"

export const FolderContext = createContext(null)

export default function FolderContextProvider({ children }) {
  const { state: folderData, fetchRequest: shareRequest } = useHttp()

  const transformedData = {
    ...folderData,
    data: folderData.data?.data,
  }

  useEffect(() => {
    shareRequest(GET_FOLDER_API)
  }, [shareRequest])

  return <FolderContext.Provider value={transformedData}>{children}</FolderContext.Provider>
}
