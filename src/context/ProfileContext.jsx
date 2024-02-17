import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import { GET_PROFILE_API } from "api"

export const ProfileContext = createContext(null)

export default function ProfileContextProvider({ children }) {
  const { state: profileData, fetchRequest: profilRequest } = useHttp()

  const transformedData = {
    data: profileData.data?.data[0],
    isLoading: profileData.isLoading,
    hasError: profileData.hasError,
  }

  useEffect(() => {
    profilRequest(GET_PROFILE_API)
  }, [profilRequest])

  return <ProfileContext.Provider value={transformedData}>{children}</ProfileContext.Provider>
}
