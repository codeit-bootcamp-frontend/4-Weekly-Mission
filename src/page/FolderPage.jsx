import { useState } from "react";
import AddLinkInput from "../components/AddLinkInput/AddLinkInput";
import FolderToolBar from "../components/FolderToolBar/FolderToolBar";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import NoLink from "../components/NoLink/NoLink";
import SearchBar from "../components/SearchBar/SearchBar";

const FolderPage = () => {
  const [selectedFolder, setSeletedFolder] = useState("ALL");
  console.log(selectedFolder);
  return (
    <>
      <NavigationBar isSticky={false} />
      <AddLinkInput />
      <SearchBar />
      <FolderToolBar onFolderClick={setSeletedFolder} />
      <NoLink />
      <Footer />
    </>
  );
};

export default FolderPage;
