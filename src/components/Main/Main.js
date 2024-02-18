import CardList from "components/CardList/CardList";
import SearchInput from "components/SearchInput/SearchInput";

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
