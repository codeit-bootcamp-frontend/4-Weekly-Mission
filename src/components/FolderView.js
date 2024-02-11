import { useEffect, useState } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import "./FolderView.css";

export default function FolderView({ folder }) {
  const [search, setSearch] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (folder?.links) {
      setLinks(folder?.links);
    }
  }, [folder]);

  return (
    <div className="container">
      <div className="FolderView">
        <SearchBar search={search} setSearch={setSearch} />
        <Cards links={links} />
      </div>
    </div>
  );
}
