import { createContext, useEffect, useState } from "react"
import useHttp from "hooks/useHttp"
import * as API from "features/folder/api"

const getCategoryId = (selectedCategory) => (selectedCategory.id === "all" ? "" : selectedCategory.id)

export const FolderContext = createContext(null)

export default function FolderContextProvider({ children }) {
  const { state: categoryState, fetchRequest: categoryFetchRequest } = useHttp()
  const { state: linkState, fetchRequest: linkFetchRequest } = useHttp()
  const [title, setTitle] = useState("전체")

  const fetchSelectCategory = (categoryId) => linkFetchRequest(API.GET_FOLDER_BY_ID(categoryId))

  const changeTitle = (selectedName) => setTitle(selectedName)

  const selectedHandler = async (selectedCategory) => {
    fetchSelectCategory(getCategoryId(selectedCategory))
    changeTitle(selectedCategory.name)
  }

  useEffect(() => {
    categoryFetchRequest(API.GET_FOLDER_API)
    linkFetchRequest(API.GET_LINK_API)
  }, [categoryFetchRequest, linkFetchRequest])

  const value = {
    category: {
      categoryState,
      categoryFetchRequest,
    },
    link: {
      linkState,
      linkFetchRequest,
    },
    util: {
      title,
      selectedHandler,
    },
  }

  return <FolderContext.Provider value={value}>{children}</FolderContext.Provider>
}
