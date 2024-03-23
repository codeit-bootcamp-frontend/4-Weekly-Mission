import React from "react";
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
import { useCallback, useEffect, useState } from "react";
import DeleteModal from "../components/Modals/DeleteModal";
import EditModal from "../components/Modals/EditModal";
import ShareModal from "../components/Modals/ShareModal";

interface Card {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  description: string;
  image_source: string;
  folder_id: number;
}

interface Link {
  count: number;
}

interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Link;
}

interface User {
  id: number;
  created_at: string;
  name: string;
  image_source?: string;
  email: string;
  auth_id: string;
}

function FolderPage() {
  const [userCards, setUserCards] = useState<Card[]>([]);
  const [userFolders, setUserFolders] = useState<Folder[]>([]);
  const [folderId, setFolderId] = useState<number | undefined>();
  const [folderName, setFolderName] = useState<string | undefined>();
  const [userInfo, setUserInfo] = useState([]);
  const [isAllFolderSelected, setIsAllFolderSelected] = useState(false);
  const [isLinkDeleteSelect, setIsLinkDeleteSelect] = useState(false);
  const [isFolderDeleteSelect, setIsFolderDeleteSelect] = useState(false);
  const [isFolderAddSelect, setIsFolderAddSelect] = useState(false);
  const [isFolderEditSelect, setIsFolderEditSelect] = useState(false);
  const [isFolderShareSelect, setIsFolderShareSelect] = useState(false);

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

  const changeLinkDeleteSelect = useCallback(() => {
    setIsLinkDeleteSelect(!isLinkDeleteSelect);
  }, [isLinkDeleteSelect]);

  const changeFolderDeleteSelect = useCallback(() => {
    setIsFolderDeleteSelect(!isFolderDeleteSelect);
  }, [isFolderDeleteSelect]);

  const changeFolderAddSelect = useCallback(() => {
    setIsFolderAddSelect(!isFolderAddSelect);
  }, [isFolderAddSelect]);

  const changeFolderEditSelect = useCallback(() => {
    setIsFolderEditSelect(!isFolderEditSelect);
  }, [isFolderEditSelect]);

  const changeFolderShareSelect = useCallback(() => {
    setIsFolderShareSelect(!isFolderShareSelect);
  }, [isFolderShareSelect]);

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
      {isFolderShareSelect && (
        <ShareModal changeFolderShareSelect={changeFolderShareSelect} />
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
          changeFolderShareSelect={changeFolderShareSelect}
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
