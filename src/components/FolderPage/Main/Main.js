import CardList from "components/FolderPage/CardList/CardList";
import SearchInput from "components/FolderPage/SearchInput/SearchInput";

function Main({ loadingError, search, folderInfo, handleSearchChange }) {
  return (
    <>
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
