import FolderList from "components/FolderPage/FolderList/FolderList";
import CardList from "components/FolderPage/CardList/CardList";
import SearchInput from "components/FolderPage/SearchInput/SearchInput";
import FolderListCtrl from "components/FolderPage/FolderListCtrl/FolderListCtrl";
import styles from "./Main.module.css";
import Modal from "../Modal/Modal";
import { ChangeEvent, useState } from "react";


interface Props {
  selectedModal: string;
  selectedId: string;
  selectedName: string;
  links: [{
    id: number;
    url: string;
    created_at: string;
    image_source: string;
    title: string;
    description: string;
  }];
  onSelectedFolder:({ name, id }: { name: string | null, id: number | string }) => void;
  loadingError: {
    message: string;
  }
  search: string;
  folderListInfo: [{ id: string; name: string; link:{count : number}}];
  handleSearchChange: (e : ChangeEvent) => void;
  setModal: (value: string) => void;
  handleCloseClick: (e: React.MouseEvent) => void;
}
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
  handleCloseClick
} : Props) {
  const [selectedLink, setSeletedLink] = useState("");
  const setLink = (link : string) => {
    setSeletedLink(link);
  };


  return (
    <>
      <Modal
        selectedModal={selectedModal}
        setModal={setModal}
        folderName={selectedName}
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
        handleCloseClick={handleCloseClick}
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
