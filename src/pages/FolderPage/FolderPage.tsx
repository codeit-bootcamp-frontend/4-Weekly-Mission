import { ChangeEvent, useEffect, useState } from "react";
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
import useFetch from "utils/hooks/useFetch";
import { API } from "utils/constants/api";
import {
  ALL,
  DELETE_FOLDER,
  ADD_FOLDER,
  SHARED,
  EDIT,
} from "utils/constants/strings";
import { GetLinkResponse, GetFolderResponse, DataResponse } from "types/apis";

export type SelectedCategory = {
  id: number | null;
  name: string;
};

export type ButtonClick = (
  categoryId: number | null,
  categoryName: string
) => void;

interface UseFetchResponse<T> {
  data: DataResponse<T>;
  loading?: boolean;
  error?: string;
}

function FolderPage() {
  const userId = "1";

  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({
    id: null,
    name: ALL,
  });

  const { modals, openModal, closeModal } = useModal();

  const { data: folders }: UseFetchResponse<GetFolderResponse[]> = useFetch(
    `${API}/users/${userId}/folders`
  );

  const {
    data: folderData,
    loading,
    error,
  }: UseFetchResponse<GetLinkResponse[]> = useFetch(
    selectedCategory.id
      ? `${API}/users/${userId}/links?folderId=${selectedCategory.id}`
      : `${API}/users/${userId}/links`
  );

  const handleButtonClick: ButtonClick = (categoryId, categoryName) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
  };

  const [searchInput, setSearchInput] = useState("");
  const [searchParam] = useState(["url", "title", "description"]);

  const searchItmes = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const search = (items: GetLinkResponse[]) => {
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

  const handleDeletedClick = () => {
    setSearchInput("");
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

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
                {modals[ADD_FOLDER] && (
                  <FolderModal variant={ADD_FOLDER} closeModal={closeModal} />
                )}
              </div>

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
                  {modals[SHARED] && (
                    <SharedModal
                      variant={SHARED}
                      closeModal={closeModal}
                      folder={selectedCategory.name}
                    />
                  )}

                  <ActionButton openModal={openModal} variant={EDIT} />
                  {modals[EDIT] && (
                    <FolderModal variant={EDIT} closeModal={closeModal} />
                  )}

                  <ActionButton openModal={openModal} variant={DELETE_FOLDER} />
                  {modals[DELETE_FOLDER] && (
                    <DeleteModal
                      variant={DELETE_FOLDER}
                      closeModal={closeModal}
                      deleted={selectedCategory.name}
                    />
                  )}
                </div>
              </div>
              {folderData && (
                <CardList
                  items={search(folderData)}
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
