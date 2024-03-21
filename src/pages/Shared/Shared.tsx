import { useGetFolder } from "data-access/useGetFolder";
import "./Shared.css";
import { FolderInfo } from "pages/Shared/components/FolderInfo";
import { SearchBar } from "pages/components/SearchBar";
import { CardList } from "pages/components/CardList";
import { CardItem } from "pages/components/CardItem";
import { getFolders } from "data-access/getFolders";
import { useEffect, useState } from "react";

export const Shared = () => {
  const [folders, setFolders] = useState();

  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName } = data || {};

  const handleLoadFolders = async (folderId = "") => {
    const { data } = await getFolders((folderId = ""));
    setFolders(data);
  };

  useEffect(() => {
    handleLoadFolders();
  }, []);

  return (
    <div className="SharedPage">
      <FolderInfo
        profileImage={profileImage}
        ownerName={ownerName}
        folderName={folderName}
      />
      <div className="SharedPage-items">
        <SearchBar />
        <CardList>
          {folders?.map((link) => (
            <CardItem key={link?.id} {...link} />
          ))}
        </CardList>
      </div>
    </div>
  );
};
