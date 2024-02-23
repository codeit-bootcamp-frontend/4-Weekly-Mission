import { useEffect, useState } from "react";
import { getUsersFolder, getUser } from "../components/Api";
import AddLinkInput from "../components/AddLinkInput";
import LinkSearch from "../components/LinkSearch";
import FolderItem from "../components/FolderItem";

function FolderPage() {
  // FloderItem
  const [usersFolderData, setUsersFolderData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const usersFolder = await getUsersFolder();
        setUsersFolderData(usersFolder.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <AddLinkInput />
      <LinkSearch />
      <FolderItem usersFolderData={usersFolderData} />
    </>
  );
}

export default FolderPage;
