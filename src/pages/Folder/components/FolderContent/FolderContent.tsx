import "./FolderContent.css";
import { useEffect, useState, MouseEvent } from "react";
import { CategoryNav } from "../CategoryNav/CategoryNav";
import { CardList } from "../../../components/CardList";
import { EmptyLink } from "../../../components/EmptyLink";
import { getFolders } from "../../../../data-access/getFolders";
import { CardItem } from "../../../components/CardItem";
import { AddFolderContent } from "../../../../components/Modals/AddFolderContent";
import { Button } from "../CategoryButton/CategoryButtonStyled";
import { FolderListDataForm, getFolderDataForm } from "interface/DataForm";

export function FolderContent({ data }: { data: FolderListDataForm[] }) {
  const [folder, setFolder] = useState<getFolderDataForm[]>([]);
  const [folderId, setFolderId] = useState("");
  const [activeCategoryName, setActiveCategoryName] = useState("전체");
  const [isAddToFolder, setIsAddToFolder] = useState(false);

  const handleLoadFolder = async ({ folderId }: { folderId: string }) => {
    const { data } = await getFolders({ folderId });
    setFolder(data);
  };

  const handleCategoryActive = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveCategoryName((e.target as HTMLButtonElement).value);
    setFolderId((e.target as HTMLButtonElement).id);
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
          {data.map((category) => (
            <Button
              onClick={handleCategoryActive}
              value={category.name}
              id={category.id as string}
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
            <CardItem
              key={link?.id}
              url={link.url}
              image_source={link.image_source}
              description={link.description}
              created_at={link.created_at}
              data={data}
            />
          ))}
        </CardList>
      )}
    </>
  );
}
