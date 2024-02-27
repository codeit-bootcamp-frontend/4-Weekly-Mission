import "./style.css";
import { useEffect, useState } from "react";
import { Cards, Searchbar, SharedPageHeader } from "../../components";
import { fetchSampleFolder } from "../../api";

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
        <Searchbar search={search} setSearch={setSearch} />
        <Cards links={folder?.links} />
      </div>
    </>
  );
}
