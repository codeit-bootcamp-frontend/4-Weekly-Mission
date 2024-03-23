import React, { useEffect, useState } from "react";
import { FolderInfo } from "../components/folder/folderInfo";
import { FolderList } from "../components/folder/folderList";
import { FolderSearchBar } from "../components/folder/folderSearchBar";
import { useFolder } from "../hooks/useFolder";
import "./mainPage.css";

export const MainPage = () => {
  const { folder } = useFolder();

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const searchItems = (value) => {
      const data = folder?.links ?? [];
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFilteredResults(filteredData);
    };

    folder && searchItems(searchInput);
  }, [folder, searchInput]);

  return (
    <div className="mainPageContainer">
      <FolderInfo />
      <div className="mainPageWrapper">
        <FolderSearchBar handleSearchInput={setSearchInput} />
        <div className="folderBox">
          <FolderList list={filteredResults} />
        </div>
      </div>
    </div>
  );
};
