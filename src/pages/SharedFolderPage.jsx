import { useEffect, useState } from "react";
import { Cards, Hero } from "../components/SharedFolderPage";
import "./SharedFolderPage.css";
import { getSharedFolder } from "../api";

function SharedFolderPage() {
  const [folder, setFolder] = useState({});

  const fetchFolderData = async () => {
    try {
      const result = await getSharedFolder();
      setFolder(result);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchFolderData();
  }, []);

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
