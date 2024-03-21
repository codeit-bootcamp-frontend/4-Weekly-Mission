import "./FolderCardPage.css";
import FolderListData from "../../components/folderList/FolderListData";
import SearchCard from "../../components/searchBar/SearchCard";

function FolderCardPage() {
  return (
    <>
      <section className="folderCardPage--section">
        <SearchCard />
        <FolderListData />
      </section>
    </>
  );
}

export default FolderCardPage;
