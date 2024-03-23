import { createContext, ReactNode, useEffect } from "react"
import useHttp from "hooks/useHttp"
import { GET_PROFILE_API } from "api"

interface Context {
  data: any
  isLoading: boolean
  hasError: boolean | null
}

export const ProfileContext = createContext<Context>({
  data: "",
  isLoading: false,
  hasError: null,
})

export default function ProfileContextProvider({ children }: { children: ReactNode }) {
  const { state: profileData, fetchRequest: profilRequest } = useHttp()

  const transformedData = {
    data: profileData.data?.data[0],
    isLoading: profileData.isLoading,
    hasError: profileData.hasError,
  }

  useEffect(() => {
    profilRequest({ api: GET_PROFILE_API })
  }, [profilRequest])

  return <ProfileContext.Provider value={transformedData}>{children}</ProfileContext.Provider>
}
