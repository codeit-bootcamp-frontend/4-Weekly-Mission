import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import FolderList from "../components/FolderList";
import LinkItem from "../components/LinkItem";
import { useState } from "react";

function FolderAllPage() {
  const [selectedFolderId, setSelectedFolderId] = useState("");

  const handleItemClick = (folderId) => {
    setSelectedFolderId(folderId);
  };

  return (
    <>
      <Header />
      <SearchForm />
      <FolderList onClick={handleItemClick} />
      <LinkItem folderId={selectedFolderId} />
    </>
  );
}
export default FolderAllPage;
