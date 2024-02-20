import FolderDetail from "../componenets/FolderDetail";
import Footer from "../componenets/Footer";
import LinkAdd from "../componenets/LinkAdd";
import Nav from "../componenets/Nav";
import useFetchData from "../hooks/useFetchData";

function Folder() {
  const profileData = useFetchData("profileDataFetch");
  const folderListData = useFetchData("folderListDataFetch");

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
