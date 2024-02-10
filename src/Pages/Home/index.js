import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getUserData, getFilderData } from "../../api/api";
import FolderTilte from "../../components/FolderTitle/FolderTilte";
import CardList from "../../components/CardList/CardList";

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
    <main>
      <Header
        email={user.email}
        profileImageSource={user.profileImageSource}
      />
      <FolderTilte folderName={folder.name} owner={folder.owner} />
      <CardList links={folder.links} />
      <Footer />
    </main>
  );
}

export default Index;
