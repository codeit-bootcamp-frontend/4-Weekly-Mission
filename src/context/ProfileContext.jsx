import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import { GET_PROFILE_API } from "api"

export const ProfileContext = createContext(null)

export default function ProfileContextProvider({ children }) {
  const { state: profileData, fetchRequest: profilRequest } = useHttp()

  useEffect(() => {
    profilRequest(GET_PROFILE_API)
  }, [profilRequest])

  return <ProfileContext.Provider value={profileData}>{children}</ProfileContext.Provider>
}
