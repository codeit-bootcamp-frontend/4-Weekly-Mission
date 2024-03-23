import "./folderSearchBar.css";
import { useState } from "react";
import { useFolder } from "../../hooks/useFolder";
import SearcIcon from "../../assets/image/search.svg";

export const FolderSearchBar = () => {
  const { folder } = useFolder();
  const data = folder?.links;
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (value) => {
    setSearchInput(value);
    const filteredData = data.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  };
  // console.log("필터>", filteredResults);
  return (
    <div className="searchBarContainer">
      <div className="inputContainer">
        <div>
          <img src={SearcIcon} alt={"SearcIcon"} />
        </div>
        <input
          className="searchBar-input"
          placeholder="링크를 검색해 보세요."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
    </div>
  );
};
