import { useEffect, useState } from "react";
import { getUsersFolder, getUser } from "../../apis/Api";
import AddLinkInput from "../../components/AddLinkInput/AddLinkInput";
import LinkSearch from "../../components/LinkSearch/LinkSearch";
import FolderItem from "../../components/FolderItem/FolderItem";

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
