import "../styles/FolderPage.css";
import floatingButton from "../assets/folder-add-icon-white.png";
import Footer from "../common/footer/Footer";
import NavigationBar from "../common/navigationBar/NavigationBar";
import LinkAddBar from "../components/linkAddBar/LinkAddBar";
import SearchBar from "../common/searchBar/SearchBar";
import FolderMenu from "../components/folderMenu/FolderMenu";
import FolderCurrentInformation from "../components/folderCurrentInformation/FolderCurrentInformation";
import Cards from "../components/cards/Cards";
import {
  getCards,
  getFolders,
  getSelectedCards,
  getUser,
} from "../services/api";
import { useEffect, useState } from "react";
import DeleteModal from "../components/Modals/DeleteModal";

function FolderPage() {
  const [userCards, setUserCards] = useState([]);
  const [userFolders, setUserFolders] = useState([]);
  const [folderId, setFolderId] = useState();
  const [folderName, setFolderName] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [isWholeFolderSelect, setIsWholeFolderSelect] = useState(false);
  const [isLinkDeleteSelect, setIsLinkDeleteSelect] = useState(false);

  const getCardsInfo = async () => {
    const response = await getCards();
    const userCards = response.data;
    setUserCards(userCards);
  };

  const getFoldersInfo = async () => {
    const response = await getFolders();
    const userFolders = response.data;
    setUserFolders(userFolders);
  };

  const getSelectedCardsInfo = async () => {
    const response = await getSelectedCards(folderId);
    const selectedCards = response.data;
    setUserCards(selectedCards);
  };

  const getUserInfo = async () => {
    const response = await getUser();
    const userInfo = response.data[0];
    setUserInfo(userInfo);
    console.log(userInfo);
  };

  const changeLinkDeleteSelect = () => {
    setIsLinkDeleteSelect(!isLinkDeleteSelect);
  };

  useEffect(() => {
    getFoldersInfo();
    getSelectedCardsInfo();
  }, [folderId]);

  useEffect(() => {
    getUserInfo();
    getCardsInfo();
  }, []);

  return (
    <div className="FolderPage">
      {isLinkDeleteSelect && (
        <DeleteModal
          title="링크 삭제"
          description="링크 이름"
          changeLinkDeleteSelect={changeLinkDeleteSelect}
        />
      )}
      <header>
        <NavigationBar userInfo={userInfo} />
      </header>
      <main>
        <LinkAddBar />
        <SearchBar />
        <FolderMenu
          folders={userFolders}
          getCardsInfo={getCardsInfo}
          setFolderId={setFolderId}
          setFolderName={setFolderName}
          setIsWholeFolderSelect={setIsWholeFolderSelect}
        />
        <FolderCurrentInformation
          folderName={folderName}
          isWholeFolderSelect={isWholeFolderSelect}
        />
        <Cards
          cards={userCards}
          changeLinkDeleteSelect={changeLinkDeleteSelect}
        />
        <button className="mobile_floating_button">
          <span>폴더 추가</span>
          <img
            className="floating_add_image"
            src={floatingButton}
            alt="add button"
          />
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FolderPage;
