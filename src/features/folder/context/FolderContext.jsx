import { createContext, useEffect } from "react"
import useHttp from "hooks/useHttp"
import * as API from "features/folder/api"
import useChangeTitle from "../hooks/useChangeTitle"

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
  const { title, onChangeTitle } = useChangeTitle()

  const selectedHandler = (selectedCategory) => {
    const categoryId = getCategoryId(selectedCategory)

    linkFetchRequest(API.GET_FOLDER_BY_ID(categoryId))
    onChangeTitle(selectedCategory.name)
  }

  useEffect(() => {
    categoryFetchRequest(API.GET_FOLDER_API)
    linkFetchRequest(API.GET_LINK_API)
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
