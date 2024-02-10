import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { getUserData, getFilderData } from "../../Api/api";
import FolderTilte from "../../Components/FolderTitle/FolderTilte";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Card from "../../Components/Card/Card";

function Index() {
  // 함수 이름을 대문자로 변경
  const [user, setUser] = useState({
    email: null,
    id: null,
    name: null,
    profileImageSource: null,
  });
  console.log(user);
  const [folder, setFolder] = useState({
    count: null,
    id: null,
    links: [],
    name: null,
    owner: {
      id: null,
      name: null,
      profileImageSource: null,
    },
  });
  console.log(folder);

  async function userDataHandler() {
    const userData = await getUserData();
    setUser(userData);
  }

  async function folderDataHandler() {
    const folderData = await getFilderData();
    setFolder(folderData.folder);
  }

  useEffect(() => {
    userDataHandler();
    folderDataHandler();
  }, []);

  return (
    <>
      <Header
        email={user.email}
        profileImageSource={user.profileImageSource}
      />
      <FolderTilte folderName={folder.name} owner={folder.owner} />
      <SearchBar />
      {folder.links.map(data => (
        <Card
          id={data.id}
          createdAt={data.createdAt}
          description={data.description}
          imageSource={data.imageSource}
          title={data.title}
          url={data.url}
        />
      ))}
      <Footer />
    </>
  );
}

export default Index;
