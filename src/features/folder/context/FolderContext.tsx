import { createContext, ReactNode, useEffect } from "react"
import useHttp from "hooks/useHttp"
import useChangeTitle from "../hooks/useChangeTitle"
import { FolderAPI, LinkAPI } from "../api"

export interface Category {
  created_at: string
  favorite: string
  id: number
  link: {
    count: number
  }
  name: string
  user_id: number
}

interface FetchRequesType {
  api: string
  errorMapping?: any
}

interface FolderContextProps {
  category: {
    state: any
    fetchRequest: ({ api, errorMapping }: FetchRequesType) => Promise<void>
  }
  link: {
    state: any
    fetchRequest: ({ api, errorMapping }: FetchRequesType) => Promise<void>
  }
  util: {
    title: string
    selectedHandler: (selectedCategory: any) => void
  }
}

const getCategoryId = (selectedCategory: any) => (selectedCategory.id === "all" ? "" : selectedCategory.id)

export const FolderContext = createContext<FolderContextProps>({
  category: {
    state: null,
    fetchRequest: async () => {},
  },
  link: {
    state: null,
    fetchRequest: async () => {},
  },
  util: {
    title: "",
    selectedHandler: () => {},
  },
})

export default function FolderContextProvider({ children }: { children: ReactNode }) {
  const { state: categoryState, fetchRequest: categoryFetchRequest } = useHttp()
  const { state: linkState, fetchRequest: linkFetchRequest } = useHttp()
  const { title, onChangeTitle } = useChangeTitle("전체")

  const selectedHandler = (selectedCategory: Category) => {
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
