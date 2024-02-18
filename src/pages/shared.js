import Card from "../components/Card";
import FolderComponent from "../components/folderComponent";
import SearchLink from "../components/searchLink";

function Shared() {
  return (
    <div>
      <FolderComponent />
      <SearchLink />
      <Card />
    </div>
  );
}
export default Shared;
