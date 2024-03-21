import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import useChangeTitle from "../hooks/useChangeTitle"
import { FolderAPI, LinkAPI } from "../api"

const getCategoryId = (selectedCategory) => (selectedCategory.id === "all" ? "" : selectedCategory.id)

export const FolderContext = createContext({
  category: {
    state: null,
    fetchRequest: () => {},
  },
  link: {
    state: null,
    fetchRequest: () => {},
  },
  util: {
    title: null,
    selectedHandler: () => {},
  },
})

export default function FolderContextProvider({ children }) {
  const { state: categoryState, fetchRequest: categoryFetchRequest } = useHttp()
  const { state: linkState, fetchRequest: linkFetchRequest } = useHttp()
  const { title, onChangeTitle } = useChangeTitle("전체")

  const selectedHandler = (selectedCategory) => {
    const categoryId = getCategoryId(selectedCategory)

    linkFetchRequest({ api: LinkAPI.GET_LINK_BY_FOLDER_ID(categoryId), errorMapping: LinkAPI.LINK_ERROR_MAP })
    onChangeTitle(selectedCategory.name)
  }

  useEffect(() => {
    categoryFetchRequest({ api: FolderAPI.GET_FOLDER, errorMapping: FolderAPI.FOLDER_ERROR_MAP })
    linkFetchRequest({ api: LinkAPI.GET_LINK, errorMapping: LinkAPI.LINK_ERROR_MAP })
  }, [categoryFetchRequest, linkFetchRequest])

  const value = {
    category: {
      state: categoryState,
      fetchRequest: categoryFetchRequest,
    },
    link: {
      state: linkState,
      fetchRequest: linkFetchRequest,
    },
    util: {
      title,
      selectedHandler,
    },
  }

  return <FolderContext.Provider value={value}>{children}</FolderContext.Provider>
}
