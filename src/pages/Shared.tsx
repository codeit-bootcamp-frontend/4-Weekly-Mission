import React, { useEffect, useState } from "react";
import { getFolder } from "../api";
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

interface FolderData {
  cardItems: Array<any>;
  folderInfo: {
    profileImageSource?: string | undefined;
    name: string;
  };
  folderName: string;
}

const Shared = () => {
  const [folderData, setFolderData] = useState<FolderData>({
    cardItems: [],
    folderInfo: { name: "", profileImageSource: undefined },
    folderName: "",
  });

  const [folderLoadingError, getFolderAsync] = useAsync(getFolder);

  // 카드 아이템 요청
  const handleLoadItems = async () => {
    try {
      if (typeof getFolderAsync === "function") {
        const result = await getFolderAsync();
        if (!result) return;

        const { links, owner, name } = result.folder;
        setFolderData({
          cardItems: links,
          folderInfo: owner,
          folderName: name,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleLoadItems();
  }, []);

  return (
    <Container>
      <SharedInfo
        folderData={folderData}
        // folderLoadingError={folderLoadingError}
      />
      <div className="Shared-content-wrapper">
        <SearchBar />
        <CardList links={folderData.cardItems} />
      </div>
    </Container>
  );
};

export default Shared;
