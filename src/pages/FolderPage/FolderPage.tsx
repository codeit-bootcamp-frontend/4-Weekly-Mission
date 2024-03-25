import React from "react";
import { useEffect, useRef, useState } from "react";
import { getUsersFolder } from "../../apis/Api";
import AddLinkInput from "../../components/AddLinkInput/AddLinkInput";
import LinkSearch from "../../components/LinkSearch/LinkSearch";
import FolderItem from "../../components/FolderItem/FolderItem";

function FolderPage() {
  const [usersFolderData, setUsersFolderData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleResetSearch = () => {
    setSearchKeyword("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  console.log(searchKeyword);

  return (
    <>
      <AddLinkInput />
      <LinkSearch
        value={searchKeyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchKeyword(e.target.value)
        }
        onReset={handleResetSearch}
        inputRef={inputRef}
      />
      <FolderItem
        usersFolderData={usersFolderData}
        searchKeyword={searchKeyword}
      />
    </>
  );
}

export default FolderPage;
