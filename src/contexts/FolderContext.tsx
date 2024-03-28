// 현재 선택된 폴더의 상태를 관리
import React, { createContext, ReactNode, useContext, useState } from "react";

type Folder = {
  id: number;
  name: string;
};

interface FolderContextValue {
  currentFolder: Folder;
  setCurrentFolder: (value: Folder) => void;
}

const FolderContext = createContext<FolderContextValue>({
  currentFolder: {
    id: 1,
    name: "전체",
  },
  setCurrentFolder: () => {},
});

export const FolderProvider = ({ children }: { children: ReactNode }) => {
  const [currentFolder, setCurrentFolder] = useState({
    id: 1,
    name: "전체",
  });

  return (
    <FolderContext.Provider value={{ currentFolder, setCurrentFolder }}>
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
