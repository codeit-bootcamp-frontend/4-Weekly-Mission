import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getAllLinks, getFolderLinks, getFolders } from "../api";
import SearchBar from "../components/common/SearchBar";
import AddLink from "../components/folder/AddLink";
import FolderInfo, { FolderNameContext } from "../components/folder/FolderInfo";
import useAsync from "../components/hooks/useAsync";
import CardList from "../components/shared/CardList";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-bottom: 100px;
`;

export const FolderIdContext = createContext();

function Folder() {
  // states
  const [folderId, setFolderId] = useState(0);
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [allLinks, setAllLinks] = useState([]);

  // custom hook
  const [foldersLoadingError, getFoldersAsync] = useAsync(getFolders);
  const [folderLinksLoadingError, getFolderLinksAsync] =
    useAsync(getFolderLinks);
  const [allLinksLoadingError, getAllLinksAsync] = useAsync(getAllLinks);

  const fetchData = async (folderId) => {
    try {
      const [foldersResponse, allLinksResponse, folderLinksResponse] =
        await Promise.all([
          getFoldersAsync(),
          getAllLinksAsync(),
          getFolderLinksAsync(folderId),
        ]);

      if (foldersResponse) setFolders(foldersResponse.data);
      if (allLinksResponse) setAllLinks(allLinksResponse.data);
      if (folderLinksResponse) setLinks(folderLinksResponse.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(folderId);
  }, [folderId]);

  return (
    <FolderIdContext.Provider value={{ folderId, setFolderId }}>
      <Container>
        <AddLink />
        <div className="Folder-content-wrapper">
          <SearchBar />
          <FolderInfo folders={folders} />
          <CardList
            links={folderId === 0 ? allLinks : links}
            folderLoadingError={foldersLoadingError}
          />
        </div>
      </Container>
    </FolderIdContext.Provider>
  );
}

export default Folder;
