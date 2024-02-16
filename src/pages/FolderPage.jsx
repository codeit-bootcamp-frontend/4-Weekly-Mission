import { useEffect, useState } from "react";
import "../styles/FolderPage.css";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/header/NavigationBar";
import Cards from "../components/main/Cards";
import SearchBar from "../components/main/SearchBar";
import UserInformation from "../components/main/FolderInformation";
import { getCards, getUsers } from "../services/api";

function FolderPage() {
  const [folderOwners, setFolderOwners] = useState([]);
  const [folderName, setFolderName] = useState();
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  // 카드 정보 받아오기
  const getCardsInfo = async () => {
    const cardsInfo = await getCards();
    const folderOwners = cardsInfo.folder.owner;
    const folderName = cardsInfo.folder.name;
    const cards = cardsInfo.folder.links;
    setFolderOwners(folderOwners);
    setFolderName(folderName);
    setCards(cards);
  };

  // 유저 정보 받아오기
  const getUserInfo = async () => {
    const userInfo = await getUsers();
    setUserInfo(userInfo);
  };

  useEffect(() => {
    getCardsInfo();
    getUserInfo();
  }, []);

  return (
    <div className="FolderPage">
      <header>
        <NavigationBar userInfo={userInfo} />
      </header>
      <main>
        <UserInformation folderOwners={folderOwners} folderName={folderName} />
        <div className="content_container">
          <SearchBar />
          <Cards cards={cards} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FolderPage;
