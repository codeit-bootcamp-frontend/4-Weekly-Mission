import { createContext, useEffect } from "react"
import useHttp from "../hooks/useHttp"
import { GET_FOLDER_API } from "../api"

export const FolderContext = createContext(null)

export default function FolderContextProvider({ children }) {
  const { state: folderData, fetchRequest: folderRequest } = useHttp()

  useEffect(() => {
    folderRequest(GET_FOLDER_API)
  }, [folderRequest])

  return <FolderContext.Provider value={folderData}>{children}</FolderContext.Provider>
}
