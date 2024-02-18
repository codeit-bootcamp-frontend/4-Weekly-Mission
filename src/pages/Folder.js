import useFetchData from "../hooks/useFetchData";
import Nav from "../components/Nav";
import AddLink from "../components/AddLink";
import FolderDetails from "../components/FolderDetails";
import Footer from "../components/Footer";

export default function Folder() {
  const currentUserData = useFetchData("targetUser", 1);
  const folderListData = useFetchData("targetUserFolderList", 1);

  return (
    <>
      <Nav currentUserData={currentUserData} />
      <AddLink />
      <FolderDetails folderListData={folderListData} />
      <Footer />
    </>
  );
}
