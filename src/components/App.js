import { useState, useEffect } from "react";
import FolderList from "./FolderList";
import { getFolders } from "../api";

function App() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { folder } = await getFolders();
    setItems(folder.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="App">
      <FolderList items={items} />
    </div>
  );
}

export default App;
