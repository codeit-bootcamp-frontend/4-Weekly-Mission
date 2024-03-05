import { useGetFolder } from "data-access/useGetFolder";
import "./SharedPage.css";
import { FolderInfo } from "ui/FolderInfo";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { CardItem } from "ui/CardItem";
import { getFolders } from "data-access/getFolders";
import { useEffect, useState } from "react";

export const SharedPage = () => {
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
