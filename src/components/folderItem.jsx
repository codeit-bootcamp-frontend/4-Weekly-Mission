import { FolderData } from "../api/api";
import { useEffect, useState } from "react";

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
    return <div>{JSON.stringify(userData.folder)}</div>;
  };

  return (
    <ul>
      <FolderItem />
    </ul>
  );
};

export default FolderItemList;
