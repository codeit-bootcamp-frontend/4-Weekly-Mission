import { FolderData } from "../api/api";
import { useEffect, useState } from "react";
import "../css/folder.css";

const FolderItemList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await FolderData();
        setUserData(userData);
      } catch (error) {
        console.error("ERROR", error);
      }
    };
    fetchUserData();
  }, []);

  const FolderItem = () => {
    console.log(userData);
    return (
      <>
        <div>{JSON.stringify(userData.folder)}</div>
      </>
    );
  };

  if (!userData) {
    return <div className="nofile">저장된 링크가 없습니다.</div>;
  }

  return (
    <div>
      <FolderItem />
    </div>
  );
};

export default FolderItemList;
