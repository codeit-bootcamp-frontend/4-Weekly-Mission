import React from "react";
import FolderHeader from "../components/FolderHeader";
import FolderMain from "../components/FolderMain";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

function Folder() {
  return (
    <div>
      <FolderHeader />
      <FolderMain />
      <Footer />
    </div>
  );
}

export default Folder;
