import React, { useState, createContext, useContext } from "react";

// 새로운 Context를 생성합니다.
const FolderContext = createContext();

// Context의 Provider로 폴더 상태를 관리할 컴포넌트를 만듭니다.
export const FolderProvider = ({ children }) => {
  const [folderState, setFolderState] = useState({
    id: null,
    name: "전체",
  });

  return (
    <FolderContext.Provider value={{ folderState, setFolderState }}>
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
