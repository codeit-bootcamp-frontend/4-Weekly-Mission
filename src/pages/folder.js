import React from "react";
import FolderHeader from "../components/FolderHeader";
import FolderMain from "../components/FolderMain";
import FolderCardList from "../components/FolderCardList";
import FolderList from "../components/FolderList";
import Footer from "../components/Footer";

function Folder() {
  return (
    <div>
      <FolderHeader />
      <FolderMain />
      <FolderList />
      <Footer />
    </div>
  );
}

export default Folder;
