import { useEffect, useState } from "react";
import { getUserFolder } from "../../api";
import "./FolderSorting.css";

function FolderSorting() {
  const [sortData, setSortData] = useState([]);

  const fetchUserFolder = async () => {
    try {
      const jsonData = await getUserFolder();
      const userFolders = jsonData.data;
      setSortData(userFolders);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserFolder();
  }, []);

  return (
    <div className="folder-sorting">
      <div className="container">
        <button className="sorting-button">전체</button>
        {sortData.map((data) => {
          return <button className="sorting-button">{data.name}</button>;
        })}
      </div>
      <button className="add-folder">폴더 추가 +</button>
    </div>
  );
}

export default FolderSorting;
