import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import { GET_SHARE_API } from "features/share/api"

export const ShareContext = createContext(null)

export default function ShareContextProvider({ children }) {
  const { state: shareData, fetchRequest: shareRequest } = useHttp()

  useEffect(() => {
    shareRequest(GET_SHARE_API)
  }, [shareRequest])

  return <ShareContext.Provider value={shareData}>{children}</ShareContext.Provider>
}
