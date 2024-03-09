import "./FolderContent.css";
import { useEffect, useState } from "react";
import { CategoryNav } from "pages/Folder/components/CategoryNav/CategoryNav";
import { CardList } from "pages/components/CardList";
import { EmptyLink } from "pages/components/EmptyLink/EmptyLink";
import { getFolders } from "data-access/getFolders";
import { CardItem } from "pages/components/CardItem";
import { AddFolderContent } from "components/Modals/AddFolderContent/AddFolderContent";
import { Button } from "../CategoryButton/CategoryButtonStyled";

export function FolderContent({ data }) {
  const [folder, setFolder] = useState([]);
  const [folderId, setFolderId] = useState();
  const [activeCategoryName, setActiveCategoryName] = useState("전체");
  const [isAddToFolder, setIsAddToFolder] = useState(false);

  const handleLoadFolder = async ({ folderId }) => {
    const { data } = await getFolders({ folderId });
    setFolder(data);
  };

  const handleCategoryActive = (e) => {
    setActiveCategoryName(e.target.value);
    setFolderId(e.target.id);
  };

  const showAddFolderModal = () => {
    setIsAddToFolder(true);
  };

  const CloseAddToFolderModal = () => {
    setIsAddToFolder(false);
  };

  useEffect(() => {
    handleLoadFolder({ folderId });
  }, [folderId]);

  return (
    <>
      {isAddToFolder && (
        <AddFolderContent
          isOpenModal={isAddToFolder}
          handleModalClose={CloseAddToFolderModal}
        />
      )}
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
        <button
          type="button"
          className="add-folder-button"
          onClick={showAddFolderModal}
        >
          폴더 추가 +
        </button>
      </div>
      <CategoryNav activeCategoryName={activeCategoryName} />
      {!folder.length ? (
        <EmptyLink />
      ) : (
        <CardList>
          {folder?.map((link) => (
            <CardItem data={data} key={link?.id} {...link} />
          ))}
        </CardList>
      )}
    </>
  );
}
