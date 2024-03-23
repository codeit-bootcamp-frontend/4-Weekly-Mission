import { useGetFolder } from "../../data-access/useGetFolder";
import "./Shared.css";
import { FolderInfo } from "./components/FolderInfo";
import { SearchBar } from "../components/SearchBar";
import { CardList } from "../components/CardList";
import { CardItem } from "../components/CardItem";
import { getFolders } from "../../data-access/getFolders";
import { useEffect, useState } from "react";
import { FolderListDataForm, FolderPageDataForm } from "interface/DataForm";

export const Shared = () => {
  const [folders, setFolders] = useState<FolderListDataForm[]>([]);
  const [folderInfo, setFolderInfo] = useState<FolderPageDataForm>();

  const handleLoadData = async () => {
    const { folder } = await useGetFolder();
    setFolderInfo(folder);
  };

  const handleLoadFolders = async (folderId = "") => {
    const { data } = await getFolders({ folderId });
    setFolders(data);
  };

  useEffect(() => {
    handleLoadFolders();
    handleLoadData();
  }, []);

  return (
    <div className="SharedPage">
      {folderInfo && (
        <FolderInfo
          profileImage={folderInfo.owner.profileImageSource}
          ownerName={folderInfo.owner.name}
          folderName={folderInfo.name}
        />
      )}
      <div className="SharedPage-items">
        <SearchBar />
        <CardList>
          {folderInfo &&
            folderInfo.links?.map((link) => (
              <CardItem
                url={link.url}
                image_source={link.imageSource}
                description={link.description}
                created_at={link.createdAt}
                data={folders}
                key={link?.id}
              />
            ))}
        </CardList>
      </div>
    </div>
  );
};
