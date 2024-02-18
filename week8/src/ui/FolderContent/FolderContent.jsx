import { getCategory } from "data-access/getCategory";
import "./FolderContent.css";
import { Button } from "StyledComponents/Buttons";
import { useEffect, useState } from "react";
import { CategoryNav } from "ui/CategoryNav/CategoryNav";
import { CardList } from "ui/CardList";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { EmptyLink } from "ui/EmptyLink/EmptyLink";
import { getFolders, getFolder } from "../../data-access/getFolders";

export function FolderContent() {
  const [folders, setFolders] = useState();
  const [folder, setFolder] = useState();
  const [data, setData] = useState();
  const [folderLinkCount, setFolderLinkCount] = useState();
  const [folderId, setFolderId] = useState(0);
  const [activeCategoryName, setActiveCategoryName] = useState("전체");

  const handleLoadAllFolders = async () => {
    const { data } = await getFolders();
    setFolders(data);
  };

  const handleLoadCategory = async () => {
    const { data } = await getCategory();
    setData(data);
  };

  const handleLoadFolder = async ({ folderId }) => {
    if (folderId === "") {
      const { data } = getFolders();
      setFolder(data);
    } else {
      const { data } = await getFolder({ folderId });
      setFolder(data);
    }
  };

  const handleCategoryActive = (e) => {
    setActiveCategoryName(e.target.value);
    setFolderLinkCount(folderId !== "" ? e.target.count : folders.length);
    setFolderId(e.target.id);
  };

  useEffect(() => {
    handleLoadAllFolders();
    handleLoadCategory();
    handleLoadFolder({ folderId });
  }, []);

  return (
    <>
      <div className="classification">
        <div className="classification-buttons">
          <Button
            onClick={handleCategoryActive}
            key="0"
            id=""
            value="전체"
            count=""
          >
            전체
          </Button>
          {data?.map((category) => (
            <Button
              onClick={handleCategoryActive}
              key={category?.id}
              value={category.name}
              id={category?.id}
              count={category?.link.count}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <button className="add-folder-button">폴더 추가 +</button>
      </div>
      <CategoryNav activeCategoryName={activeCategoryName} />
      {!folderLinkCount ? (
        <EmptyLink />
      ) : (
        <CardList>
          {folder?.map((link) => (
            <ReadOnlyCard key={link?.id} {...link} />
          ))}
        </CardList>
      )}
    </>
  );
}
