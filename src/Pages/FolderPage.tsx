import LinkAdd from "../components/LinkAdd";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";

function FolderPage() {

  return (
    <>
      <LinkAdd />
      <div>
          <SearchBar />
          <FolderList />
      </div>
    </>
  )
}

export default FolderPage;