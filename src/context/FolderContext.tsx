import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface Props {
  children: ReactNode;
}

interface FolderType {
  id: number | null;
  name: ReactNode;
}

interface FolderContextValue {
  folderFilter: FolderType;
  setFolderFilter: Dispatch<SetStateAction<FolderType>>;
}

const initialFolderData: FolderType = {
  id: null,
  name: "전체",
};

// 새로운 Context를 생성합니다.
const FolderContext = createContext<FolderContextValue>({
  folderFilter: initialFolderData,
  setFolderFilter: () => {},
});

// Context의 Provider로 폴더 상태를 관리할 컴포넌트를 만듭니다.
export const FolderProvider = ({ children }: Props) => {
  const [folderFilter, setFolderFilter] = useState<FolderType>({
    id: null,
    name: "전체",
  });

  return (
    <FolderContext.Provider value={{ folderFilter, setFolderFilter }}>
      {children}
    </FolderContext.Provider>
  );
};

export const useFolder = () => {
  const context = useContext(FolderContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
