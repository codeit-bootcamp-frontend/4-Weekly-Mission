import FolderDetail from "../componenets/FolderDetail";
import Footer from "../componenets/Footer";
import LinkAdd from "../componenets/LinkAdd";
import Nav from "../componenets/Nav";
import useFetchData from "../hooks/useFetchData";

function Folder() {
  const profileData = useFetchData("profileDataFetch", 1);
  const folderListData = useFetchData("folderListDataFetch", 1);

  return (
    <>
      <Nav profileData={profileData} />
      <LinkAdd />
      <FolderDetail folderListData={folderListData} />
      <Footer />
    </>
  );
}

export default Folder;
