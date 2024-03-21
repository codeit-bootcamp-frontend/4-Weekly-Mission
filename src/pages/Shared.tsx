import React, { useEffect, useState } from "react";
import { getFolder, getUser } from "../api";
import useAsync from "../components/hooks/useAsync";

// components
import CardList from "../components/shared/CardList";
import SearchBar from "../components/common/SearchBar";
import SharedInfo from "../components/shared/SharedInfo";

import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Shared = () => {
  const [folderData, setFolderData] = useState({
    cardItems: [],
    folderInfo: "",
    folderName: "",
  });
  const [order] = useState("createdAt");

  const [folderLoadingError, getFolderAsync] = useAsync(getFolder);

  // 카드 아이템 요청
  const handleLoadItems = async () => {
    let result = await getFolderAsync();
    if (!result) return;

    const { links, owner, name } = result.folder;
    setFolderData({
      cardItems: links,
      folderInfo: owner,
      folderName: name,
    });
  };

  useEffect(() => {
    handleLoadItems();
  }, []);

  return (
    <Container>
      <SharedInfo
        folderData={folderData}
        folderLoadingError={folderLoadingError}
      />
      <div className="Shared-content-wrapper">
        <SearchBar />
        <CardList
          items={folderData.cardItems}
          folderId={null}
          folderLoadingError={folderLoadingError}
        />
      </div>
    </Container>
  );
};

export default Shared;
