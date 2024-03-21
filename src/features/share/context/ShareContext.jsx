import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import * as ShareAPI from "features/share/api"

export const ShareContext = createContext(null)

export default function ShareContextProvider({ children }) {
  const { state: shareData, fetchRequest: shareRequest } = useHttp()

  useEffect(() => {
    shareRequest({ api: ShareAPI.GET_SHARE_API, errorMapping: ShareAPI.SHARE_ERROR_MAP })
  }, [shareRequest])

  return <ShareContext.Provider value={shareData}>{children}</ShareContext.Provider>
}
