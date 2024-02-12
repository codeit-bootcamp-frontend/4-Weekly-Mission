import { useEffect, useState } from "react"
import { getFolderData } from "../APIs/PageApi"

export const useFolder = () => {
  const [folder, setFolder] = useState({profileImage:"", profileName: null, folderName: null})
  const [cardLinks, setCardLinks] = useState([])

  const fetchFolder = async() => {
    const { profileImage, profileName, folderName, cardLinks } = await getFolderData()
    setFolder({ profileImage, profileName, folderName })
    setCardLinks(cardLinks)
  }

  useEffect(() => {
    fetchFolder()
  }, [])

  return ({
    folder,
    cardLinks
  })
}