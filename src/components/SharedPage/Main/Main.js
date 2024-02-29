import Modal from "components/FolderPage/Modal/Modal";
import CardList from "components/SharedPage/CardList/CardList";
import SearchInput from "components/SharedPage/SearchInput/SearchInput";

function Main({ loadingError, search, folderInfo, handleSearchChange }) {
  return (
    <>
      <Modal />
      <SearchInput
        loadingError={loadingError}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <CardList links={folderInfo?.links} />
    </>
  );
}

export default Main;
