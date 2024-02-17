import { useCallback, useEffect, useState } from "react";
import { Cards, Hero } from "../components/SharedFolderPage";
import "./SharedFolderPage.css";
import { getFolderInformation } from "../api";

function SharedFolderPage() {
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
      <div className="container SharedFolderPage-container">
        <Cards folder={folder} />
      </div>
    </main>
  );
}

export default SharedFolderPage;
