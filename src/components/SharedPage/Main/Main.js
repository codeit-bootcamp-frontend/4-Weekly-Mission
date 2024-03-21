import Modal from "components/FolderPage/Modal/Modal";
import CardList from "components/SharedPage/CardList/CardList";
import SearchInput from "components/SharedPage/SearchInput/SearchInput";
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
      <SearchInput
        loadingError={loadingError}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <CardList links={links} />
    </>
  );
}

export default Main;
