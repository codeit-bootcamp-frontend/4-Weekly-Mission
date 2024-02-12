import { useCallback, useEffect, useState } from "react";
import Cards from "./Cards";
import Hero from "./Hero";
import "./Main.css";
import { getFolderInformation } from "../../api";

function Main() {
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
      <div className="container Main-container">
        <Cards folder={folder} />
      </div>
    </main>
  );
}

export default Main;
