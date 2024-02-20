import AddLink from "../components/addLink";
import SearchLink from "../components/searchLink";
import FolderList from "../components/folderList";

function Folder() {
  return (
    <div>
      <AddLink />
      <SearchLink />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FolderList />
      </div>
    </div>
  );
}
export default Folder;
