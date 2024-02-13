import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import { fetchSampleFolder } from "../api";
import "./SharedPage.css";
import SharedFrame from "../components/SharedFrame";

export default function FolderView() {
  const [folder, setFolder] = useState(null);
  const [search, setSearch] = useState("");

  async function getFolder() {
    try {
      const response = await fetchSampleFolder();
      setFolder(response);
    } catch (e) {
      alert(e);
      return;
    }
  }

  useEffect(() => {
    getFolder();
  });

  return (
    <>
      <div className="shared-page-frame">
        <SharedFrame folder={folder} />
      </div>
      <div className="container">
        <div className="shared-page-contents">
          <SearchBar search={search} setSearch={setSearch} />
          <Cards links={folder?.links} />
        </div>
      </div>
    </>
  );
}
