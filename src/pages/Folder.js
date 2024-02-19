import Header from "../component/Header";
import AddLinks from "../component/folder/AddLinks";
import "../style/folder.css";
import FolderMain from "../component/folder/FolderMain";

function Folder() {
  return (
    <>
      <Header />
      <AddLinks />
      <FolderMain />
    </>
  );
}

export default Folder;
