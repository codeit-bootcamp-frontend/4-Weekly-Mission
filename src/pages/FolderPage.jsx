import { useCallback, useEffect, useState } from "react";
import { Cards, Hero } from "../components/FolderPage";
import "./FolderPage.css";
import { getFolderInformation } from "../api";

function FolderPage() {
  const [folder, setFolder] = useState({});

  const fetchFolderData = useCallback(async () => {
    try {
      const result = await getFolderInformation();
      setFolder(result);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchFolderData();
  }, [fetchFolderData]);

  return (
    <main>
      <Hero folder={folder} />
      <div className="container FolderPage-container">
        <Cards folder={folder} />
      </div>
    </main>
  );
}

export default FolderPage;
