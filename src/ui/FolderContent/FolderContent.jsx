import { getCategory } from "data-access/getCategory";
import "./FolderContent.css";
import { Button } from "StyledComponents/Buttons";
import { useEffect, useState } from "react";
import { CategoryNav } from "ui/CategoryNav/CategoryNav";
import { CardList } from "ui/CardList";
import { EmptyLink } from "ui/EmptyLink/EmptyLink";
import { getFolders } from "data-access/getFolders";
import { CardItem } from "ui/CardItem";

export function FolderContent() {
  const [folder, setFolder] = useState([]);
  const [data, setData] = useState();
  const [folderId, setFolderId] = useState();
  const [activeCategoryName, setActiveCategoryName] = useState("전체");

  const handleLoadCategory = async () => {
    const { data } = await getCategory();
    setData(data);
  };

  const handleLoadFolder = async ({ folderId }) => {
    const { data } = await getFolders({ folderId });
    setFolder(data);
  };

  const handleCategoryActive = (e) => {
    setActiveCategoryName(e.target.value);
    setFolderId(e.target.id);
  };

  useEffect(() => {
    handleLoadCategory();
    handleLoadFolder({ folderId });
  }, [folderId]);

  return (
    <>
      <div className="classification">
        <div className="classification-buttons">
          <Button onClick={handleCategoryActive} id="" value="전체">
            전체
          </Button>
          {data?.map((category) => (
            <Button
              onClick={handleCategoryActive}
              value={category.name}
              id={category.id}
              key={category.id}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <button type="button" className="add-folder-button">
          폴더 추가 +
        </button>
      </div>
      <CategoryNav activeCategoryName={activeCategoryName} />
      {!folder.length ? (
        <EmptyLink />
      ) : (
        <CardList>
          {folder?.map((link) => (
            <CardItem key={link?.id} {...link} />
          ))}
        </CardList>
      )}
    </>
  );
}
