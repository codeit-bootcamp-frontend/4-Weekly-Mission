import { ChangeEvent } from "react";
import "./SearchBar.css";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm);
  return (
    <div className="searchBar">
      <div className="searchBar-icon"></div>
      <input
        className="searchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleChange}
      />
    </div>
  );
};
