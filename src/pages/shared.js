import Card from "../components/Card";
import FolderComponent from "../components/folderComponent";
import SearchLink from "../components/searchLink";

function Shared() {
  return (
    <div>
      <FolderComponent />
      <SearchLink />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card />
      </div>
    </div>
  );
}
export default Shared;
