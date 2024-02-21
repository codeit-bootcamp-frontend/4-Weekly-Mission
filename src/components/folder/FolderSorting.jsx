import { useEffect, useState } from "react";
import { getUserFolder } from "../../api";
import "./FolderSorting.css";
import { json } from "react-router-dom";

function FolderSorting() {
  const [sortData, setSortData] = useState([]);

  const Datas = async () => {
    try {
      const jsonData = await getUserFolder();
      const userFolders = jsonData.data;

      // const userName = userFolders.map((user) => {
      //   return user.name;
      // });

      setSortData(userFolders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Datas();
  }, []);

  return (
    <div className="folder-sorting">
      <div className="container">
        {console.log(sortData)}
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
