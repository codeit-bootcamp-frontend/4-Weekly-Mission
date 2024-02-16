import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/header/NavigationBar";
import Cards from "./components/main/Cards";
import SearchBar from "./components/main/SearchBar";
import UserInformation from "./components/main/FolderInformation";
import { getCards, getUsers } from "./services/api";

function App() {
  // 카드 정보 받아오기
  const [folderOwnerData, setFolderOwnerData] = useState([]);
  const [folderNameData, setFolderNameData] = useState();
  const [cardData, setCardData] = useState([]);

  const getCardsInfo = async () => {
    const cardsInfo = await getCards();
    const folderOwnerData = cardsInfo.folder.owner;
    const folderNameData = cardsInfo.folder.name;
    const cardData = cardsInfo.folder.links;
    setFolderOwnerData(folderOwnerData);
    setFolderNameData(folderNameData);
    setCardData(cardData);
  };

  useEffect(() => {
    getCardsInfo();
  }, []);

  // 유저 정보 받아오기
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = async () => {
    const userInfo = await getUsers();
    setUserInfo(userInfo);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="App">
      <header>
        <NavigationBar userInfo={userInfo} />
      </header>
      <main>
        <UserInformation
          folderOwnerData={folderOwnerData}
          folderNameData={folderNameData}
        />
        <div className="content_container">
          <SearchBar />
          <Cards cardData={cardData} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
