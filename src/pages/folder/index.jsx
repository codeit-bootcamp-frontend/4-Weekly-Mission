import { useEffect, useState } from "react";
import GNB from "../../components/gnb/GNB";
import SearchLinkBar from "./components/search-link-bar/SearchLinkBar";
import styled from "styled-components";
import Content from "./components/content/Content";
import Footer from "../../components/footer/Footer";

const Folder = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);
  const [folderList, setFolderList] = useState(null);

  const makeFolderList = (folderData) => {
    const folderList = [
      {
        id: 0,
        name: "전체",
      },
    ];

    folderData.forEach((folder, idx) => {
      folderList.push({
        id: idx + 1,
        name: folder.name,
      });
    });

    return folderList;
  };

  useEffect(() => {
    Promise.all([
      fetch("https://bootcamp-api.codeit.kr/api/users/1/folders"),
      fetch("https://bootcamp-api.codeit.kr/api/users/1"),
    ])
      .then(([folderRes, userRes]) =>
        Promise.all([folderRes.json(), userRes.json()])
      )
      .then(([folderData, userData]) => {
        setFolder(folderData.data);
        setFolderList(makeFolderList(folderData.data));
        setUser(userData.data[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <GNB user={user} />
      <SearchLinkBar />
      <Content folder={folder} folderList={folderList} />

      <Footer />
    </Container>
  );
};

export default Folder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
