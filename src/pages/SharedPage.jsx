import "./styles/SharedPage.css";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import { fetchSampleFolder } from "../api";
import SharedPageHeader from "../components/SharedPageHeader";

export default function FolderView() {
  const [folder, setFolder] = useState(null);
  const [search, setSearch] = useState("");

  async function fetchFolder() {
    try {
      const response = await fetchSampleFolder();
      setFolder(response);
    } catch (e) {
      alert(e);
      return;
    }
  }

  useEffect(() => {
    fetchFolder();
  });

  return (
    <>
      <SharedPageHeader folder={folder} />
      <div className="shared-page-contents">
        <SearchBar search={search} setSearch={setSearch} />
        <Cards links={folder?.links} />
      </div>
    </>
  );
}
