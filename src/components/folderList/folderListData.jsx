import { useEffect, useState } from "react";
import FolderData from "./FolderData";
import { getFolderList } from "../../apis/folderApi";
import "./FolderListData.css";

function FolderListData() {
  const [folderData, setFolderData] = useState([]);

  useEffect(() => {
    const fetchFolderData = async () => {
      const data = await getFolderList(1); // 사용자 ID를 1로 지정
      setFolderData(data);
    };

    fetchFolderData();
  }, []);

  return (
    <>
      <ul className="folderList">
        {folderData.map(({ id, name }) => (
          <FolderData key={id} name={name} />
        ))}
      </ul>
    </>
  );
}

export default FolderListData;
