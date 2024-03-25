import React, { useEffect, useState } from "react";
import { FolderInfo } from "../components/folder/folderInfo";
import { FolderList } from "../components/folder/folderList";
import { FolderSearchBar } from "../components/folder/folderSearchBar";
import { useFolder } from "../hooks/useFolder";
import { folderDataType } from "../types/folderTypes";
import { SearchResult } from "../components/folder/SearchResult";
import "./mainPage.css";

export const MainPage = () => {
  const { folder } = useFolder();

  const [filteredResults, setFilteredResults] = useState<folderDataType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const searchItems = (value: string) => {
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
      <FolderInfo folder={folder} />
      <div className="mainPageWrapper">
        <FolderSearchBar handleSearchInput={setSearchInput} />
        <SearchResult searchInput={searchInput} />
        <div className="folderBox">
          <FolderList list={filteredResults} />
        </div>
      </div>
    </div>
  );
};
