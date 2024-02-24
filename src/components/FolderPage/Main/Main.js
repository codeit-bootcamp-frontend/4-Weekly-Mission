import FolderList from "components/FolderPage/FolderList/FolderList";
import CardList from "components/FolderPage/CardList/CardList";
import SearchInput from "components/FolderPage/SearchInput/SearchInput";
import FolderListCtrl from "components/FolderPage/FolderListCtrl/FolderListCtrl";
import styles from "./Main.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Main({
  selectedModal,
  selectedId,
  selectedName,
  links,
  onSelectedFolder,
  loadingError,
  search,
  folderListInfo,
  handleSearchChange,
  setModal,
}) {
  const [selectedLink, setSeletedLink] = useState([]);

  const setLink = (link) => {
    setSeletedLink(link);
  };

  return (
    <>
      <Modal
        selectedModal={selectedModal}
        setModal={setModal}
        folderName={selectedName}
        links={links}
        selectedLink={selectedLink}
        folders={folderListInfo}
        selectedId={selectedId}
      />
      {folderListInfo && (
        <FolderList
          onSelectedFolder={onSelectedFolder}
          selectedId={selectedId}
          folders={folderListInfo}
          setModal={setModal}
        />
      )}
      <FolderListCtrl folderName={selectedName} setModal={setModal} />
      <SearchInput
        loadingError={loadingError}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {links[0] ? (
        <CardList setLink={setLink} links={links} setModal={setModal} />
      ) : (
        <div className={styles["noSavedLink"]}>저장된 링크가 없습니다.</div>
      )}
    </>
  );
}

export default Main;
