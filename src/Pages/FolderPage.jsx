import LinkAdd from "../components/LinkAdd";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";
import AddModal from "../modal/AddModal";
import { useState } from "react";

function FolderPage() {
  const [isModalClicked, setIsModalClicked] = useState(false);

  const handleModalClick = () => {
    setIsModalClicked((prev) => !prev);
  };

  return (
    <>
      <LinkAdd />
      <div>
          <SearchBar />
          <FolderList handleModalClick={handleModalClick}/>
      </div>
      <AddModal isModalClicked={isModalClicked} handleModalClick={handleModalClick}/>
    </>
  )
}

export default FolderPage;