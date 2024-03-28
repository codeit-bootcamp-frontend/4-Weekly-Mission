import React, { useState, useEffect, ChangeEvent } from "react";
import searchIcon from "../../image/Search.svg";
import "./Search.css";
import closeBtn from "../../image/close.svg";
import { LinkData } from "../../types/interface";

interface SearchProps {
  folderLinkList: LinkData[];
  setFilteredLinks: (
    value: LinkData[] | ((prevState: LinkData[]) => LinkData[])
  ) => void;
  onSearch: (text: string) => void;
}

const Search = ({
  folderLinkList,
  setFilteredLinks,
  onSearch,
}: SearchProps) => {
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (!searchText) {
      setFilteredLinks(folderLinkList);
      return;
    }

    const filteredLinks = folderLinkList.filter(
      (link) =>
        link.url.includes(searchText) ||
        (link.title && link.title.includes(searchText)) ||
        (link.description && link.description.includes(searchText))
    );
    setFilteredLinks(filteredLinks);
  }, [searchText, folderLinkList, setFilteredLinks]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
    setFilteredLinks(folderLinkList);
  };

  return (
    <form className="searchBar">
      <img src={searchIcon} alt="Search" className="searchIcon" />
      <input
        type="text"
        placeholder="링크를 검색해 보세요"
        className="searchInput"
        value={searchText}
        onChange={handleInputChange}
      />
      {searchText && (
        <img
          src={closeBtn}
          alt="close button"
          className="closeIcon"
          onClick={handleClearSearch}
        />
      )}
    </form>
  );
};

export default Search;
