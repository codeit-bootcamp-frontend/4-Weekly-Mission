import "../styles/FolderPage.css";
import floatingButton from "../assets/folder-add-icon-white.png";
import Footer from "../common/footer/Footer";
import NavigationBar from "../common/navigationBar/NavigationBar";
import LinkAddBar from "../components/LinkAddBar/LinkAddBar";
import SearchBar from "../common/searchBar/SearchBar";
import FolderMenu from "../components/FolderMenu/FolderMenu";
import FolderCurrentInformation from "../components/FolderCurrentInformation/FolderCurrentInformation";
import Cards from "../components/Cards/Cards";
import {
  getCards,
  getFolders,
  getSelectedCards,
  getUser,
} from "../services/api";
import { useEffect, useState } from "react";
import DeleteModal from "../components/Modals/DeleteModal";
import EditModal from "../components/Modals/EditModal";

function FolderPage() {
  const [userCards, setUserCards] = useState([]);
  const [userFolders, setUserFolders] = useState([]);
  const [folderId, setFolderId] = useState();
  const [folderName, setFolderName] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [isAllFolderSelected, setIsAllFolderSelected] = useState(false);
  const [isLinkDeleteSelect, setIsLinkDeleteSelect] = useState(false);
  const [isFolderDeleteSelect, setIsFolderDeleteSelect] = useState(false);
  const [isFolderAddSelect, setIsFolderAddSelect] = useState(false);
  const [isFolderEditSelect, setIsFolderEditSelect] = useState(false);

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
  };

  const changeLinkDeleteSelect = () => {
    setIsLinkDeleteSelect(!isLinkDeleteSelect);
  };

  const changeFolderDeleteSelect = () => {
    setIsFolderDeleteSelect(!isFolderDeleteSelect);
  };

  const changeFolderAddSelect = () => {
    setIsFolderAddSelect(!isFolderAddSelect);
  };

  const changeFolderEditSelect = () => {
    setIsFolderEditSelect(!isFolderEditSelect);
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
          isLinkDeleteSelect={isLinkDeleteSelect}
        />
      )}
      {isFolderDeleteSelect && (
        <DeleteModal
          title="폴더 삭제"
          description="폴더명"
          changeFolderDeleteSelect={changeFolderDeleteSelect}
          isFolderDeleteSelect={isFolderDeleteSelect}
        />
      )}
      {isFolderAddSelect && (
        <EditModal
          title="폴더 추가"
          description="추가하기"
          changeFolderAddSelect={changeFolderAddSelect}
          isFolderAddSelect={isFolderAddSelect}
        />
      )}
      {isFolderEditSelect && (
        <EditModal
          title="폴더 이름 변경"
          description="변경하기"
          changeFolderEditSelect={changeFolderEditSelect}
          isFolderEditSelect={isFolderEditSelect}
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
          setIsAllFolderSelected={setIsAllFolderSelected}
        />
        <FolderCurrentInformation
          folderName={folderName}
          isAllFolderSelected={isAllFolderSelected}
          changeFolderDeleteSelect={changeFolderDeleteSelect}
          changeFolderEditSelect={changeFolderEditSelect}
        />
        <Cards
          cards={userCards}
          changeLinkDeleteSelect={changeLinkDeleteSelect}
          changeFolderAddSelect={changeFolderAddSelect}
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
