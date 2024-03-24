import { ChangeEvent, useState } from "react";
import { NoResults } from "pages";
import styles from "./folder.module.css";
import Header from "./components/Header";
import CardList from "components/CardList/CardList";
import SearchBar from "components/Input/SearchBar/SearchBar";
import { ReactComponent as AddIcon } from "assets/images/ic_add.svg";
import DeleteModal from "components/Modal/DeleteModal/DeleteModal";
import SharedModal from "components/Modal/SharedModal/SharedModal";
import FolderModal from "components/Modal/FolderModal/FolderModal";
import Category from "./components/Category/Category";
import ActionButton from "./components/ActionButton/ActionButton";
import useModal from "utils/hooks/useModal";
import {
  ALL,
  DELETE_FOLDER,
  ADD_FOLDER,
  SHARED,
  EDIT,
} from "utils/constants/strings";
import { GetLinkResponse, GetFolderResponse } from "types/apis";
import { useGetFolders } from "utils/hooks/useGetFolders";
import { useGetLinks } from "utils/hooks/useGetLinks";

type Nullable<T> = T | null;

export type SelectedCategory = {
  id: Nullable<number>;
  name: string;
};

export type ButtonClick = (
  categoryId: Nullable<number>,
  categoryName: string
) => void;

interface UseFetchResponse<T> {
  data: Nullable<T>;
  loading?: boolean;
  error?: string;
}

function FolderPage() {
  let userId = null;

  const value = localStorage.getItem("userId");

  if (typeof value === "string") {
    userId = JSON.parse(value);
  }

  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({
    id: null,
    name: ALL,
  });

  const { modals, openModal, closeModal } = useModal();

  const { data: folders }: UseFetchResponse<GetFolderResponse[]> =
    useGetFolders(userId);

  const { data: folderLinks }: UseFetchResponse<GetLinkResponse[]> =
    useGetLinks(userId, selectedCategory.id);

  const [searchInput, setSearchInput] = useState("");

  const [searchParam] = useState(["url", "title", "description"]);

  const searchItmes = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filterSearchText = (items: GetLinkResponse[]) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem] &&
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchInput.toLowerCase()) > -1
        );
      });
    });
  };

  const handleButtonClick: ButtonClick = (categoryId, categoryName) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
  };

  const handleDeletedClick = () => {
    setSearchInput("");
  };

  return (
    <div>
      <Header list={folders} />

      <div className={styles.container}>
        <div className={styles.content}>
          <SearchBar
            value={searchInput}
            onChange={searchItmes}
            onClick={handleDeletedClick}
          />

          {folders ? (
            <div>
              <div className={styles.category}>
                <Category
                  buttonNames={folders}
                  selectedCategory={selectedCategory}
                  onClick={handleButtonClick}
                />

                <button
                  className={styles.addButton}
                  onClick={() => openModal(ADD_FOLDER)}
                >
                  <span>폴더 추가</span>
                  <AddIcon className={styles.addIcon} />
                </button>
              </div>

              {modals[ADD_FOLDER] && (
                <FolderModal variant={ADD_FOLDER} closeModal={closeModal} />
              )}

              <div className={styles.bar}>
                <div className={styles.categoryName}>
                  {selectedCategory.name}
                </div>

                <div
                  className={`${styles.barButtons} ${
                    selectedCategory.name === ALL ? styles.hidden : ""
                  }`}
                >
                  <ActionButton openModal={openModal} variant={SHARED} />

                  <ActionButton openModal={openModal} variant={EDIT} />

                  <ActionButton openModal={openModal} variant={DELETE_FOLDER} />
                </div>
              </div>

              {modals[SHARED] && (
                <SharedModal
                  variant={SHARED}
                  closeModal={closeModal}
                  folder={selectedCategory.name}
                />
              )}

              {modals[EDIT] && (
                <FolderModal variant={EDIT} closeModal={closeModal} />
              )}
              
              {modals[DELETE_FOLDER] && (
                <DeleteModal
                  variant={DELETE_FOLDER}
                  closeModal={closeModal}
                  deleted={selectedCategory.name}
                />
              )}

              {folderLinks && (
                <CardList
                  items={filterSearchText(folderLinks)}
                  modals={modals}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              )}
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </div>
  );
}

export default FolderPage;
